const { basePokemon, fastMove, chargedMove, basePokemonMoves, User, userPokemon } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
	Query: {
		basepokemons: async () => {
			return await basePokemon.find({});
		},
		basepokemon: async (parent, { pokemonname }) => {
			return await basePokemon.findOne({ pokemon_name: pokemonname }).populate("moves");
		},
		basepokemonmoves: async (parent, { pokemonname }) => {
			return await basePokemonMoves.findOne({ pokemon_name: pokemonname });
		},
		chargedmoves: async () => {
			return await chargedMove.find({});
		},
		fastmoves: async () => {
			return await fastMove.find({});
		},
		user: async (parent, { userId }) => {
			return await User.findOne({ _id: userId }).populate("pokemon");
		},
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(profile);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) throw AuthenticationError;

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) throw AuthenticationError;

			const token = signToken(user);
			return { token, user };
		},
		addPokemon: async (parent, { pokemon_name, att, def, sta, pokemon_id, type, fastMove, chargedMoves }, context) => {
			const pokemon = await userPokemon.create({ pokemon_name, att, def, sta, pokemon_id, type });
			pokemon.fastMove.push(fastMove);
			pokemon.chargedMoves.push(chargedMoves);
			pokemon.save();

			return await User.findOneAndUpdate({ _id: context.user._id }, { $addToSet: { pokemon: pokemon._id } }, { new: true });
		},
	},
};

module.exports = resolvers;

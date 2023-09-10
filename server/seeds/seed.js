const db = require("../config/connection");
const { basePokemon, fastMove, chargedMove, basePokemonMoves } = require("../models");

const basePokemonData = require("./basePokemonData.json");
const fastMoveData = require("./fastMovesData.json");
const chargedMoveData = require("./chargedMovesData.json");
const basePokemonMovesData = require("./basePokemonMoves.json");

db.once("open", async () => {
	// clean database
	//await cleanDB("School", "schools");
	//await cleanDB("Class", "classes");
	//await cleanDB("Professor", "professors");

	// bulk create each model
	const basePokemons = await basePokemon.insertMany(basePokemonData);
	const fastMoves = await fastMove.insertMany(fastMoveData);
	const chargedMoves = await chargedMove.insertMany(chargedMoveData);
	const basepokemonmove = await basePokemonMoves.insertMany(basePokemonMovesData);

	console.log("all done!");
	process.exit(0);
});

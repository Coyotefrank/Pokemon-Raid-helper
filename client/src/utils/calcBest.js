const userPokemon = {
	att: 80,
	def: 41,
	sta: 251,
	pokemon_id: 39,
	pokemon_name: "Jigglypuff",
	type: ["Normal", "Fairy"],
	fastMove: {
		duration: 400,
		energy_delta: 6,
		move_id: 200,
		name: "Fury Cutter",
		power: 3,
		stamina_loss_scaler: 0.01,
		type: "Bug",
	},
	chargedMove: [
		{
			critical_chance: 0.05,
			duration: 2900,
			energy_delta: -33,
			move_id: 13,
			name: "Wrap",
			power: 60,
			stamina_loss_scaler: 0.06,
			type: "Normal",
		},
	],
};
const boss = {};

function calcDamage(pokemon, Type, weatherBoost, STAB, Mega) {
    var fastEPS = pokemon.fastMove.energy_delta / (pokemon.fastMove.duration / 1000);
    var fastEPS = pokemon.fastMove.energy_delta / (pokemon.fastMove.duration / 1000);

    

    var modifier = STAB * weatherBoost * Mega * 

    var fastDam = 0.5*(pokemon.fastMove.power * (pokemon.att / boss.def) * modifier) + 1;


}

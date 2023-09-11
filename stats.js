const viewStatsButton = document.getElementById('viewStats');

const viewStatsButton = document.getElementById('viewStats');

viewStatsButton.addEventListener('click', function () {
    const selectedPokemon = document.getElementById('pokemonDropdown').value;
    
    if (selectedPokemon === 'Pikachu' || selectedPokemon === 'Charizard') {
        console.log('Button has been clicked when Pikachu or Charizard are selected on the pokemonDropdown menu');
    }
});


const pokemonData = {
    Pikachu: { hp: 35, attack: 55, defense: 40 },
    Charizard: { hp: 78, attack: 84, defense: 78 },
};

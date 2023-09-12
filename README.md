# Pokemon-Raid-helper

64fe85f6dfbd16285522b530

const opts = basePokemonData.map((pokemon_name) => ({ value: pokemon_name, label: pokemon_name }));

    const onFinish = (values) => {
    	console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
    	console.log("Failed:", errorInfo);
    };
    const onChange = (value) => {
    	const currentPokemon = useQuery(QUERY_BASE_POKEMON_MOVES, { variables: { pokemon_name: value } });
    	currentPokemon.fast_moves.concat(currentPokemon.elite_fast_moves);
    	currentPokemon.fast_moves.map((el) => ({ value: el, label: el }));

    	currentPokemon.charged_moves.concat(currentPokemon.elite_charged_moves);
    	currentPokemon.charged_moves.map((el) => ({ value: el, label: el }));
    	console.log(currentPokemon);
    };

    const onSearch = (value) => {
    	console.log("search:", value);
    };


    const [basePokemonDataQuery, { Error }] = useQuery(QUERY_ALL_BASE_POKEMON);

    useEffect(async () => {
    	const basePokemonData = await basePokemonDataQuery();
    	console.log(basePokemonData);
    }, []);


        	const currentPokemon = useQuery(QUERY_BASE_POKEMON_MOVES, { variables: { pokemon_name: value } });
    	currentPokemon.fast_moves.concat(currentPokemon.elite_fast_moves);
    	currentPokemon.fast_moves.map((el) => ({ value: el, label: el }));

    	currentPokemon.charged_moves.concat(currentPokemon.elite_charged_moves);
    	currentPokemon.charged_moves.map((el) => ({ value: el, label: el }));
    	console.log(currentPokemon);

const fetchPokemon = async (value) => {
const { inputdata = { basepokemon: { pokemon_name: "", \_id: "", base_attack: 0, base_defense: 0, base_stamina: 0, form: "" }, basepokemonmove: { charged_moves: [], elite_charged_moves: [], elite_fast_moves: [], fast_moves: [], pokemon_name: [] } }, status } = await useQuery(QUERY_GET_BASE_POKEMON, { variables: { pokemon_name: value } });
//const d2 = await inputdata.json();
setPokemon(inputdata);
return d2;
};

// const onChange = (value) => {
// console.log("CHANGED:", value);
// const { data } = useQuery(QUERY_GET_BASE_POKEMON, { variables: { pokemon_name: value } });
// const currentSelectedPokemon = data.json();
// console.log(currentSelectedPokemon);
// };

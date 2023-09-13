import { useQuery } from "@apollo/client";
import { QUERY_GET_BASE_POKEMON, QUERY_GET_BASE_POKEMON_MOVES } from "../utils/queries";

import { Button, Layout, Form, Input, InputNumber, Select } from "antd";
//import { basePokemon } from "../../../server/models";
const { Header, Content } = Layout;

const AddForm = (props) => {
	const { data = { basepokemonmove: { charged_moves: [], elite_charged_moves: [], elite_fast_moves: [], fast_moves: [], pokemon_name: "" } }, loading, error } = useQuery(QUERY_GET_BASE_POKEMON_MOVES, { variables: { pokemonname: props.value } });

	if (loading) {
		return <div>Loading...</div>;
	} else if (error) {
		return <div>Error</div>;
	} else {
		//const { data: basePokemonMoves, status } = useQuery(QUERY_GET_BASE_POKEMON_MOVES, { variables: { pokemon_name: "Charmader" } });
		const filterOption = (input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

		console.log("BASE Pokemon Move Data:", data);

		const fastMove = data.basepokemonmove?.fast_moves || [];
		const fastMoveOptions = Array.from(fastMove, (move) => ({ value: move, label: move }));
		const chargedMove = data.basepokemonmove?.charged_moves || [];
		const chargedMoveOptions = Array.from(chargedMove, (move) => ({ value: move, label: move }));

		//console.log("fastMoveOptions:", fastMoveOptions);
		//console.log("chargedMoveOptions:", chargedMoveOptions);
		return (
			<>
				{/* <h1>Hello</h1> */}
				<Form.Item name="fastmove">
					<Select showSearch placeholder="FastMove" optionFilterProp="children" filterOption={filterOption} options={fastMoveOptions} />
				</Form.Item>

				<Form.Item name="chargedmove">
					<Select showSearch placeholder="Charged Move" optionFilterProp="children" filterOption={filterOption} options={chargedMoveOptions} />
				</Form.Item>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}>
					<Button type="primary" htmlType="submit">
						Submit
					</Button>
				</Form.Item>
			</>
		);
	}
};

export default AddForm;

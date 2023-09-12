// import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_BASE_POKEMON, QUERY_GET_BASE_POKEMON } from "../utils/queries";

import { Button, Layout, Form, Input, InputNumber, Select } from "antd";
const { Header, Content } = Layout;

const Add = () => {
	// Filter `option.label` match the user type `input`
	//const [pokemon, setPokemon] = useState({ basepokemon: { pokemon_name: "", _id: "", base_attack: 0, base_defense: 0, base_stamina: 0, form: "" }, basepokemonmove: { charged_moves: [], elite_charged_moves: [], elite_fast_moves: [], fast_moves: [], pokemon_name: [] } });
	const { data = { basepokemons: { pokemon_name: "" } }, status } = useQuery(QUERY_ALL_BASE_POKEMON);

	const onChange = (value) => {
		console.log("CHANGED:", value);
	};
	if (status === "loading") {
		return <div>Loading...</div>;
	} else if (status === "error") {
		return <div>Error</div>;
	} else {
		const filterOption = (input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
		const opts = [
			{ value: "test", label: "test" },
			{ value: "test", label: "test" },
		];
		const onFinish = (values) => {
			console.log("Success:", values);
		};
		const onFinishFailed = (errorInfo) => {
			console.log("Failed:", errorInfo);
		};

		const onSearch = (value) => {
			console.log("search:", value);
		};
		return (
			<Content theme="dark" className="content" class="addForm">
				<Form name="basic" layout="vertical" style={{ maxWidth: 600 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
					{/* pokemon */}
					<Form.Item name="pokemon" rules={[{ required: true, message: "Please input your Pokemon!" }]}>
						<Select showSearch placeholder="Pokemon" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={filterOption} options={opts} />
					</Form.Item>
					{/* //Stats */}
					<Form.Item>
						<Form.Item rules={[{ required: true }]} style={{ display: "inline-block", margin: "4 4px" }}>
							<InputNumber placeholder="Att: " />
						</Form.Item>

						<Form.Item rules={[{ required: true }]} style={{ display: "inline-block", margin: "4 4px" }}>
							<InputNumber placeholder="Def: " />
						</Form.Item>

						<Form.Item rules={[{ required: true }]} style={{ display: "inline-block", margin: "4 4px" }}>
							<InputNumber placeholder="Sta: " />
						</Form.Item>
					</Form.Item>
					{/* //CP */}
					<Form.Item rules={[{ required: true }]}>
						<InputNumber placeholder="CP: " />
					</Form.Item>

					<Form.Item>
						<Select showSearch placeholder="FastMove" optionFilterProp="children" filterOption={filterOption} options={opts} />
					</Form.Item>

					<Form.Item>
						<Select showSearch placeholder="Charged Move" optionFilterProp="children" filterOption={filterOption} options={opts} />
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
				</Form>
			</Content>
		);
	}
};

export default Add;

import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { useState, useEffect } from "react";
import { Button, Layout, Image, Form, Input, InputNumber, Select, Col, Row, Card } from "antd";
const { Header, Content } = Layout;
import AddForm from "../components/addForm";
import Auth from "../utils/auth";
const { Meta } = Card;
const currentList = [
	{
		id: 310,
		name: "MANECTRIC",
		types: ["Electric"],
		weather: ["rain"],
	},

	{
		id: 797,
		name: "CELESTEELA",
		types: ["Steel", "Flying"],
		weather: ["windy", "snow"],
	},
	{
		id: 798,
		name: "KARTANA",
		types: ["Grass", "Steel"],
		weather: ["sunny", "snow"],
	},

	{
		id: 323,
		name: "MACHAMP",
		types: ["Fighting"],
		weather: ["cloudy"],
	},
	{
		id: "CAMERUPT",
		name: "CAMERUPT",
		types: ["Fire", "Ground"],
		weather: ["sunny"],
	},
	{
		id: 376,
		name: "METAGROSS",
		form: "METAGROSS",
		types: ["Steel", "Psychic"],
		weather: ["windy", "snow"],
	},
	{
		id: 776,
		name: "TURTONATOR",
		form: "TURTONATOR",
		types: ["Fire", "Dragon"],
		weather: ["sunny", "windy"],
	},
	{
		id: 201,
		name: "UNOWN",
		form: "UNOWN",
		types: ["Psychic"],
		weather: ["windy"],
	},
];

const BestP = (props) => {
	const {
		data = {
			user: { pokemon: 0 },
		},
		status,
		error,
	} = useQuery(QUERY_USER, { variables: { email: "Julianmlacey@gmail.com" } });
	if (status === "loading") {
		return <div>Loading...</div>;
	} else if (error) {
		console.log(error);
		return <div>Error</div>;
	} else {
		console.log("User Query: ", data.user);
		return (
			<Content theme="dark" className="content" class="addFormStyle">
				<Row>
					<div style={{ backgroundImage: `url(https://pm1.aminoapps.com/7243/0ea89cf278223e13003a6897d3091b7d99271cf6r1-688-475v2_hq.jpg` }}>
						<Image width={200} src={`https://images.gameinfo.io/pokemon/256/p${props.boss}.webp`} />
					</div>
				</Row>

				<Row justify="center" align="bottom">
					{Array.from(data.user.pokemon, (p) => {
						return (
							<Col span={4}>
								<Card
									hoverable
									style={{ width: 200 }}
									cover={
										<div style={{ backgroundImage: `url(https://pm1.aminoapps.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg)` }}>
											<img alt="pokemon" style={{ alignSelf: "center" }} src={`https://images.gameinfo.io/pokemon/256/p${p.pokemon_id}.webp`} />
										</div>
									}>
									<Meta title={p.pokemon_name} description={`att: ${p.att} def: ${p.def} sta: ${p.sta}`} />
								</Card>
							</Col>
						);
					})}
				</Row>
			</Content>
		);
	}
};

export default BestP;

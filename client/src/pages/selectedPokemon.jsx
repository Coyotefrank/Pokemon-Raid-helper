import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";

import React from "react";
import { Button, Layout, Menu, Typography } from "antd";
const { Header, Content } = Layout;
const Pokemon = () => {
	return (
		<Content className="content">
			<Row justify="center">
				<Col span={12}>
					<div className="picture-box">
						<img src="place holder" alt="" />
					</div>
				</Col>
			</Row>
			<Row justify="center">
				<Col span={12}>
					<div className="content-box">
						<h2>Raid Boss Stats</h2>
						<p>place holder for the boss stats</p>
						<Button type="primary" className="proceed-button">
							Proceed to Search Page
						</Button>
					</div>
				</Col>
			</Row>
		</Content>
	);
};

export default Pokemon;

import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import { NormalLoginForm } from "../components/form";

import React from "react";
import { Button, Layout, Menu, Typography } from "antd";
const { Header, Content } = Layout;
const Add = () => {
	return (
		<Content className="content">
			<NormalLoginForm />
			<div className="box">
				<h2>Add Pokemon</h2>
				<p>Pokemon search</p>
			</div>
			<div className="box">
				<h2>Your Pokemon</h2>
				<p>Added Pokemon</p>
			</div>
		</Content>
	);
};

export default Add;

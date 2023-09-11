import React from "react";
import { Button, Form, Input, Layout, Typography, Menu } from "antd";

export default function Header() {
	return (
		<>
			<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1">Home</Menu.Item>
				<Menu.Item key="2">Sign Up / Login</Menu.Item>
			</Menu>
			<Typography.Title className="title" level={2}>
				Pokémon Raid Battle App
			</Typography.Title>
		</>
	);
}

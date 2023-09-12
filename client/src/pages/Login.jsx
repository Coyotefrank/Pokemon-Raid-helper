import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import React from "react";
import { Button, Layout, Menu, Typography, Form, Input } from "antd";
const { Header, Content } = Layout;
const Login = () => {
	return (
		<Content theme="dark" className="content">
			<Typography.Title level={3}>Login</Typography.Title>
			<Form name="login-form" initialValues={{ remember: true }} onFinish={onFinishLogin}>
				<Form.Item name="username" label="Username" rules={[{ required: true, message: "Please enter your username" }]}>
					<Input placeholder="Enter your username" />
				</Form.Item>
				<Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
					<Input.Password placeholder="Enter your password" />
				</Form.Item>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form>

			<Typography.Title level={3}>Sign Up</Typography.Title>
			<Form name="signup-form" initialValues={{ remember: true }} onFinish={onFinishSignup}>
				<Form.Item name="new-username" label="Username" rules={[{ required: true, message: "Please choose a username" }]}>
					<Input placeholder="Choose a username" />
				</Form.Item>
				<Form.Item name="new-password" label="Password" rules={[{ required: true, message: "Please create a password" }]}>
					<Input.Password placeholder="Create a password" />
				</Form.Item>
				<Button type="primary" htmlType="submit">
					Sign Up
				</Button>
			</Form>
		</Content>
	);
};

export default Login;

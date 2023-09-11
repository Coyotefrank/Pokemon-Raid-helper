import "./App.css";
import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Button, Form, Input, Layout, Typography, Menu } from "antd";
const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

import Header from "./components/header";

function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default App;

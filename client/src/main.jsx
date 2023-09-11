import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Add from "./pages/addPokemon";
//import Vote from './pages/Vote';
//import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		//errorElement: <NotFound />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/Login",
				element: <Login />,
			},
			{
				path: "/Add",
				element: <Add />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

//ReactDOM.createRoot(document.getElementById("root")).render(<App />);

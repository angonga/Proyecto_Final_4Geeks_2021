import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Register from "./pages/register";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { PerfilUsuario } from "./pages/perfilUsuario";
import PerfilProveedor from "./pages/perfilProveedor";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Recuperacion from "./pages/recuperacion";
import { EditProveedor } from "./pages/editProveedor";
import { EditUsuario } from "./pages/editUsuario";
import ResetPassword from "./pages/resetPassword";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Register />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>

						<Route exact path="/perfilUsuario">
							<PerfilUsuario />
						</Route>

						<Route exact path="/perfilProveedor">
							<PerfilProveedor />
						</Route>

						<Route exact path="/editProveedor">
							<EditProveedor />
						</Route>

						<Route exact path="/resetPassword">
							<ResetPassword />
						</Route>

						<Route exact path="/editUsuario">
							<EditUsuario />
						</Route>

						<Route exact path="/recuperacion">
							<Recuperacion />
						</Route>

						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

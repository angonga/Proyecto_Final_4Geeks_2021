import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Context } from "../store/appContext";
import logo from "../../img/07_logo_1000x400.jpg";
import Card from "../component/Cards.jsx";
import Bienvenidos from "../component/Bienvenidos.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<img id="logo" src={logo} alt="Logo Calle4" />
			<Bienvenidos />

			<div className="text-center mt-5">
				<h1>¿Cómo ir a Calle4?</h1>
				<div>
					<Card />
				</div>
			</div>
		</div>
	);
};

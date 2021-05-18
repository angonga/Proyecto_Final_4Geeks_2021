import React, { useContext } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Context } from "../store/appContext";
import logo from "../../img/07_logo_1000x400.jpg";
import Card from "../component/Cards.jsx";
import Bienvenidos from "../component/Bienvenidos.js";
import Carousel from "../component/Carousel.js";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container text-center">
			<br />
			<br />
			<img id="logo" className="img-fluid" src={logo} alt="Logo Calle4" />

			<Bienvenidos />
			<Carousel />

			<div className="text-center mt-5">
				<h1>¿Cómo ir a Calle 4?</h1>
				<button className="btn btn-lg btn-primary ">Buscar Servicio</button>
				<br />
				<br />
				<div>
					<Card />
				</div>

				{/* <div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
				<p>
					This boilerplate comes with lots of documentation:{" "}
					<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
						Read documentation
					</a>
				</p> */}
			</div>
		</div>
	);
};

import React from "react";
//import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
//import "../../styles/quienes.css";
import sergio from "../../img/sergio.jpeg";
import andrea from "../../img/andrea.jpg";
import geovanny from "../../img/giovanni.jpeg";
import karen from "../../img/karen.jpeg";
import { Card, Button, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";

export const Quienes = _props => {
	return (
		<div className="container pb-5">
			<br />
			<br />
			<h4 className="font-italic text-dark text-center py-5">
				Calle 4 somos un grupo de visionarios que busca profesionalizar a los trabajadores independientes,
				ofreciendóles a nuestros usuarios poder obtener los servicios que necesiten, garantizándoles confianza y
				seguridad en el personal que contrate.
			</h4>{" "}
			<div className="row pb-5">
				<div className="col">
					<Card>
						<CardImg top width="200px" src={andrea} alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle tag="h5">Andrea Gonzalez </CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-light">
								Ingeniera Industrial, Analista de Datos y Desarrolladora Full Stack
							</CardSubtitle>
							<Button className="btn btn-dark">Contactar</Button>
						</CardBody>
					</Card>
				</div>
				<div className="col">
					<Card>
						<CardImg top width="200px" src={sergio} alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle tag="h5">Sergio Baldioceda</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-light">
								Ingeniero en Tecnologías de Información y Desarrollador Full Stack
							</CardSubtitle>
							<Button className="btn btn-dark">Contactar</Button>
						</CardBody>
					</Card>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<Card>
						<CardImg top width="200px" src={geovanny} alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle tag="h5">Giovanni Chinchilla </CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-light">
								Ingeniero Informática y Desarrollador Full Stack
							</CardSubtitle>
							<Button className="btn btn-dark">Contactar</Button>
						</CardBody>
					</Card>
				</div>
				<div className="col">
					<Card>
						<CardImg top width="200px" src={karen} alt="Card image cap" />
						<CardBody className="text-center">
							<CardTitle tag="h5">Karen Aguilar</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-light">
								Contadora Pública y Desarrolladora Full Stack
							</CardSubtitle>
							<Button className="btn btn-dark">Contactar</Button>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
};

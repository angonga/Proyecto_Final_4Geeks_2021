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
		<div container>
			<br />
			<br />
			<p className="font-italic font-weight-bold text-info text-center">
				Calle 4 somos un grupo de visionarios que busca profesionalizar a los trabajadores
				independientes,ofreciendóles a nuestros usuarios poder obtener los servicios que necesiten,
				garantizándoles confianza y seguridad en el personal que contrate.
			</p>{" "}
			<ul>
				<div className="row justify-content text-center" style={{ marginLeft: "100px" }}>
					<div className="col-5">
						<Card>
							<CardImg top width="200px" height="200px" src={andrea} alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Andrea Gonzalez </CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Ingeniera Industrial
								</CardSubtitle>
								<Button>Contactar</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-5">
						<Card>
							<CardImg top width="200px" height="200px" src={sergio} alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Sergio Baldioceda</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Ingeniero Informatica
								</CardSubtitle>
								<Button>Contactar</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</ul>
			<ul>
				<div className="row justify-content text-center" style={{ marginLeft: "100px" }}>
					<div className="col-5">
						<Card>
							<CardImg top width="200px" height="200px" src={geovanny} alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Giovanni Chinchilla </CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Ingeniero Informatica
								</CardSubtitle>
								<Button>Contactar</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-5">
						<Card>
							<CardImg top width="200px" height="200px" src={karen} alt="Card image cap" />
							<CardBody>
								<CardTitle tag="h5">Karen Aguilar</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Contadora Pública
								</CardSubtitle>
								<Button>Contactar</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</ul>
		</div>
	);
};

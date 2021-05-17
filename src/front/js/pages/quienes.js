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
			<h4 className="font-italic font-weight-bold text-info text-center py-5">
				Calle4 es un plataforma de servicios que buscar conectar a proveedores de servicios con potenciales
				clientes, profesionalizando a los trabajadores independientes y la vez garantizando a nuestros usuarios
				un servicio de confianza, no solo a través de nuestra plataforma sino con personal que contrate.
			</h4>{" "}
			<ul>
				<div className="row pb-5">
					<div className="col">
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

import React from "react";
//import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
//import "../../styles/home.scss";
import { Card, Button, CardImg, CardTitle, CardSubtitle, CardBody } from "reactstrap";

export const Quienes = _props => {
	return (
		<div>
			<p className="font-italic font-weight-bold text-info">
				<h1 align="center">QUIENES SOMOS</h1>
			</p>
			<ul>
				<div className="row justify-content-around">
					<div className="col-4">
						<Card>
							<CardImg
								top
								width="100%"
								src="https://mail.google.com/mail/u/0?ui=2&ik=016633df5d&attid=0.5&permmsgid=msg-a:r3691995154495253232&th=17909b7d8fc99e40&view=att&disp=safe&realattid=ii_knxaxdlr3"
								alt="Card image cap"
							/>
							<CardBody>
								<CardTitle tag="h5">Nombre</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Descripcion personal
								</CardSubtitle>
								<Button>Contactese</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-4">
						<Card>
							<CardImg
								top
								width="100%"
								src="https://mail.google.com/mail/u/0?ui=2&ik=016633df5d&attid=0.5&permmsgid=msg-a:r3691995154495253232&th=17909b7d8fc99e40&view=att&disp=safe&realattid=ii_knxaxdlr3"
								alt="Card image cap"
							/>
							<CardBody>
								<CardTitle tag="h5">Nombre</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Descripcion personal
								</CardSubtitle>
								<Button>Contactese</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</ul>
			<ul>
				<div className="row justify-content-around">
					<div className="col-4">
						<Card>
							<CardImg
								top
								width="100%"
								src="https://mail.google.com/mail/u/0?ui=2&ik=016633df5d&attid=0.5&permmsgid=msg-a:r3691995154495253232&th=17909b7d8fc99e40&view=att&disp=safe&realattid=ii_knxaxdlr3"
								alt="Card image cap"
							/>
							<CardBody>
								<CardTitle tag="h5">Nombre</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Descripcion personal
								</CardSubtitle>
								<Button>Contactese</Button>
							</CardBody>
						</Card>
					</div>
					<div className="col-4">
						<Card>
							<CardImg
								top
								width="100%"
								src="https://mail.google.com/mail/u/0?ui=2&ik=016633df5d&attid=0.5&permmsgid=msg-a:r3691995154495253232&th=17909b7d8fc99e40&view=att&disp=safe&realattid=ii_knxaxdlr3"
								alt="Card image cap"
							/>
							<CardBody>
								<CardTitle tag="h5">Nombre</CardTitle>
								<CardSubtitle tag="h6" className="mb-2 text-muted">
									Descripcion personal
								</CardSubtitle>
								<Button>Contactese</Button>
							</CardBody>
						</Card>
					</div>
				</div>
			</ul>
		</div>
	);
};

import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

export const Contacto = _props => {
	return (
		<div>
			<Card>
				<CardImg
					top
					width="236"
					height="304"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIhgJ7LP5OQZB7_UST6tafayq4Jd6zBfziQ&usqp=CAU"
					alt="Card image cap"
				/>
				<CardBody>
					<Form>
						<FormGroup row>
							<Label for="nombre" sm={3} size="default">
								NOMBRE
							</Label>
							<Col sm={7}>
								<Input type="text" name="text" id="text" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="exampleEmail" sm={3} size="default">
								Email
							</Label>
							<Col sm={7}>
								<Input type="email" name="email" id="exampleEmail" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="comentarios" sm={3} size="1117px">
								COMENTARIOS
							</Label>
							<Col sm={7} display="table" width="">
								<Input type="textarea" name="text" id="text" />
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label for="enviar" sm={6} />
							<Col sm={2}>
								<Input type="text" name="text" id="text" placeholder="  ENVIAR " float="center" />
							</Col>
						</FormGroup>
					</Form>
				</CardBody>
			</Card>
		</div>
	);
};

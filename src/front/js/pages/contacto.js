import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";

export const Contacto = _props => {
	const handleSubmit = e => {
		console.log("handle submit");
		// hacer fetch con datos para enviar el correo de contacto
	};

	return (
		<div className="form-view">
			<h1>Contacto</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputName" className="form-label">
						Nombre
					</label>
					<input type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email
					</label>
					<input type="email" className="form-control" id="exampleInputEmail1" />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputComments1" className="form-label">
						Commentarios
					</label>
					​<textarea rows="5" cols="70" className="form-control" id="exampleInputComments1" />
				</div>
				<button type="submit" className="btn btn-primary">
					Enviar
				</button>
			</form>
		</div>
	);
};

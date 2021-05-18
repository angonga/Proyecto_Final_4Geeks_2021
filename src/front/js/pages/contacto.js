import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { Col, Form, FormGroup, Label, Input } from "reactstrap";
import "../../styles/contacto.scss";

export const Contacto = _props => {
	return (
		<div className="prueba">
			<form id="contact" action="" method="post">
				<h3>¿Sugerencias o Preguntas?</h3>
				<h4>No dudes en escribirnos</h4>
				<fieldset>
					<input placeholder="Tu nombre" type="text" required />
				</fieldset>
				<fieldset>
					<input placeholder="Tu correo" type="email" required />
				</fieldset>
				<fieldset>
					<input placeholder="Tu número de teléfono(optional)" type="tel" required />
				</fieldset>

				<fieldset>
					<textarea placeholder="Digita tu mensaje...." required />
				</fieldset>
				<fieldset>
					<button name="submit" type="submit" id="contact-submit" data-submit="...Enviando">
						Enviar
					</button>
				</fieldset>
			</form>
		</div>
	);
};

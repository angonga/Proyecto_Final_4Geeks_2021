import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import iconosprofesionales from "../../img/iconosprofesionales.jpg";

export const PerfilUsuario = () => (
	<div style={{ marginLeft: "250px", marginTop: "100px" }} className="container-fluid">
		<div style={{ width: "350px", float: "left", marginRight: "100px" }} className="input-group">
			<input type="text" className="form-control" placeholder="Qué servicio buscar?" />
			<div className="input-group-append" />
		</div>
		<div style={{ width: "350px" }} className="input-group">
			<input type="text" className="form-control" placeholder="Provincia o Cantón" />
			<div className="input-group-append" />
		</div>
		<button style={{ marginTop: "25px", marginLeft: "375px" }} type="button" className="btn btn-info">
			Buscar
		</button>
		<div>
			<img style={{ marginTop: "100px", marginRight: "100px", width: "800px" }} src={iconosprofesionales} />
		</div>
	</div>
);

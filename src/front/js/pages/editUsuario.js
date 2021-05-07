import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import ImgUploader from "../component/ImgUploader";

export const EditUsuario = () => (
	<div style={{ marginLeft: "250px" }} className="container-fluid">
		<h1 style={{ float: "left" }}>Mis Datos:</h1>

		<div style={{ float: "left", marginLeft: "50px" }}>
			<ImgUploader />
		</div>

		<div style={{ marginLeft: "100px", marginBottom: "50px", marginTop: "20px", float: "left" }}>
			<button type="button" className="btn btn-info">
				Cambiar Contraseña
			</button>
		</div>

		<div style={{ marginLeft: "50px", marginTop: "250px", width: "800px" }}>
			<form style={{ float: "left", marginRight: "30px" }}>
				<input style={{ width: "350px" }} type="text" name="nombre" placeholder="Nombre" />
			</form>

			<form style={{ float: "left" }}>
				<input style={{ width: "350px" }} type="text" name="apellido" placeholder="Apellido" />
			</form>

			<form style={{ float: "left", marginRight: "30px", marginTop: "25px" }}>
				<input style={{ width: "350px" }} type="text" name="email" placeholder="Email" />
			</form>

			<form style={{ float: "left", marginTop: "25px" }}>
				<input style={{ width: "350px" }} type="text" name="telefono" placeholder="Telefono" />
			</form>

			<form style={{ float: "left", marginRight: "30px", marginTop: "25px" }}>
				<input style={{ width: "350px" }} type="text" name="provincia" placeholder="Provincia" />
			</form>

			<form style={{ float: "left", marginTop: "25px" }}>
				<input style={{ width: "350px" }} type="text" name="canton" placeholder="Cantón" />
			</form>
		</div>
		<div style={{ float: "left", marginLeft: "-450px" }}>
			<button style={{ marginTop: "100px" }} type="button" className="btn btn-success">
				Guardar
			</button>
		</div>
	</div>
);

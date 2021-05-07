import React from "react";
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import "../../styles/register.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Register extends React.Component {
	state = {
		abierto: true
	};
	abrirModal = () => {
		this.setState({ abierto: !this.state.abierto });
	};
	render() {
		const modalStyles = {
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)"
		};
		return (
			<>
				{/* <div className="principal">
					<div className="secundario">
						<Button color="success" onClick={this.abrirModal}>
							Registrarse
						</Button>
					</div>
				</div> */}
				<Modal id="modal" isOpen={this.state.abierto} style={modalStyles}>
					<ModalHeader>
						Formulario de Registro
						<div style={{ fontSize: "16px", float: "right", marginLeft: "150px", marginTop: "5px" }}>
							<FormGroup check>
								<Label check>
									<Input type="checkbox" /> Registro como proveedor?
								</Label>
							</FormGroup>
						</div>
					</ModalHeader>
					<ModalBody size="lg">
						<FormGroup style={{ width: "225px" }}>
							<Label for="email">Email</Label>
							<Input type="text" id="email" />
						</FormGroup>
						<FormGroup style={{ width: "225px", float: "right", marginTop: "-87px" }}>
							<Label for="phone">Teléfono</Label>
							<Input type="text" id="telefono" />
						</FormGroup>
						<FormGroup style={{ width: "225px" }}>
							<Label for="password">Contraseña</Label>
							<Input type="text" id="password" />
						</FormGroup>
						<FormGroup style={{ width: "225px", float: "right", marginTop: "-85px" }}>
							<Label for="password2">Confirmar Contraseña</Label>
							<Input type="text" id="password2" />
						</FormGroup>
						<FormGroup style={{ width: "225px", marginTop: "-87px" }}>
							<Label for="phone">Nombre</Label>
							<Input type="text" id="nombre" />
						</FormGroup>
						<FormGroup style={{ width: "225px", marginTop: "-87px" }}>
							<Label for="phone">Apellido</Label>
							<Input type="text" id="apellido" />
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="primary">Enviar</Button>
						<Button color="secondary" onClick={this.abrirModal}>
							Cancelar
						</Button>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}
export default Register;

import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Link } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class ResetPassword extends React.Component {
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
							Cambiar Contraseña
						</Button>
					</div>
				</div> */}

				<Modal id="modal" isOpen={this.state.abierto} style={modalStyles}>
					<ModalHeader>Cambiar Contraseña</ModalHeader>
					<ModalBody>
						<FormGroup style={{ width: "400px" }}>
							<Label for="old">Contraseña Actual</Label>
							<Input type="password" id="email" />
						</FormGroup>
						<FormGroup style={{ width: "400px" }}>
							<Label for="new">Nueva Contraseña</Label>
							<Input type="password" id="email" />
						</FormGroup>
						<FormGroup style={{ width: "400px" }}>
							<Label for="new2">Confirmar Nueva Contraseña</Label>
							<Input type="password" id="email" />
						</FormGroup>
					</ModalBody>

					<ModalFooter>
						<a href="/login">
							<Button color="secondary">Guardar</Button>
						</a>
						<a href="/">
							<Button color="secondary">Salir</Button>
						</a>
						{/* <Button color="secondary" onClick={"/"}>
							Cancel
						</Button> */}
					</ModalFooter>
				</Modal>
			</>
		);
	}
}

export default ResetPassword;

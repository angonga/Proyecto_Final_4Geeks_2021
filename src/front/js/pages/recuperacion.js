import React from "react";
//import "./register.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

class Recuperacion extends React.Component {
	state = {
		abierto: false
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
				<div className="principal">
					<div className="secundario">
						<Button color="success" onClick={this.abrirModal}>
							Recuperar Contraseña
						</Button>
					</div>
				</div>

				<Modal id="modal" isOpen={this.state.abierto} style={modalStyles}>
					<ModalHeader>Recuperar Contraseña</ModalHeader>
					<ModalBody>
						<FormGroup style={{ width: "400px" }}>
							<Label for="email">Email Registrado</Label>
							<Input type="text" id="email" />
						</FormGroup>
					</ModalBody>

					<ModalFooter>
						<Button color="primary">Recuperar</Button>
						<Button color="secondary" onClick={this.abrirModal}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}

export default Recuperacion;

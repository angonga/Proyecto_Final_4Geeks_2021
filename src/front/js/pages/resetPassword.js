import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
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
							<Label for="old">Old Password</Label>
							<Input type="text" id="email" />
						</FormGroup>
						<FormGroup style={{ width: "400px" }}>
							<Label for="new">New Password</Label>
							<Input type="text" id="email" />
						</FormGroup>
						<FormGroup style={{ width: "400px" }}>
							<Label for="new2">Confirm New Password</Label>
							<Input type="text" id="email" />
						</FormGroup>
					</ModalBody>

					<ModalFooter>
						<Button color="primary">Guardar</Button>
						<Button color="secondary" onClick={this.abrirModal}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</>
		);
	}
}

export default ResetPassword;

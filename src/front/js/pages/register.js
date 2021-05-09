import React, { useState, useContext } from "react";
import "../../styles/register.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Context } from "../store/appContext";

const Register = () => {
	const [abierto, setAbierto] = useState(true);
	//crear estado para el campo email
	const [email, setEmail] = useState("");
	const [rol, setRol] = useState("");
	const [data, setData] = useState({
		role: false
	});
	const { store, actions } = useContext(Context);
	console.log(email);
	console.log(rol);

	const handleChange = e => {
		console.log(e.target.name);
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = e => {
		actions.register(data);
	};

	const modalStyles = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	};

	const abrirModal = () => {
		setAbierto(!abierto);
	};
	// const sendForm = () => {
	// 	alert(email);
	// };
	console.log(data);
	return (
		<Modal id="modal" isOpen={abierto} style={modalStyles}>
			<ModalHeader>
				{/* // Registro //{" "} */}
				<div style={{ fontSize: "16px", float: "right", marginLeft: "150px", marginTop: "5px" }}>
					<FormGroup check>
						<Label check>
							<Input
								type="checkbox"
								onChange={e => {
									console.log(e);
									setData({ ...data, role: !e.target.checked ? false : true });
								}}
							/>{" "}
							Registro como proveedor?
						</Label>
					</FormGroup>
				</div>
			</ModalHeader>

			<ModalBody>
				<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
					<Label for="email">Email</Label>
					<Input type="text" name="email" id="email" onChange={handleChange} />
				</FormGroup>

				<FormGroup style={{ width: "225px", float: "left" }}>
					<Label for="phone">Phone</Label>
					<Input type="text" id="phone" name="phone" onChange={handleChange} />
				</FormGroup>

				<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
					<Label for="phone">Nombre</Label>
					<Input type="text" id="nombre" name="name" onChange={handleChange} />
				</FormGroup>

				<FormGroup style={{ width: "225px", float: "left" }}>
					<Label for="phone">Apellido</Label>
					<Input type="text" id="apellido" name="last_name" onChange={handleChange} />
				</FormGroup>

				<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
					<Label for="password">Password</Label>
					<Input type="text" id="password" name="password" onChange={handleChange} />
				</FormGroup>

				<FormGroup style={{ width: "225px", float: "left" }}>
					<Label for="password2">Confirm Password</Label>
					<Input type="text" id="password2" name="confirm_password" onChange={handleChange} />
				</FormGroup>
			</ModalBody>

			<ModalFooter>
				<Button color="primary" onClick={onSubmit}>
					Send
				</Button>

				<Button color="secondary" onClick={abrirModal}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
};

export default Register;

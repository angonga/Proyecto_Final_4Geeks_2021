import React, { useState, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label, Link } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const ResetPassword = () => {
	const [abierto, setAbierto] = useState(true);
	const [email, setEmail] = useState("");
	const [oldpassword, setOldPassword] = useState("");
	const [newpassword, setNewPassword] = useState("");
	const [confirmedpassword, setConfirmedPassword] = useState("");
	const [redirect, setRedirect] = useState(false);
	const MySwal = withReactContent(Swal);

	const modalStyles = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)"
	};

	const handleSubmit = () => {
		const body = {
			email: email,
			oldpassword: oldpassword,
			newpassword: newpassword,
			confirmedpassword: confirmedpassword
		};

		fetch("https://3001-maroon-viper-y4y3mj7h.ws-us07.gitpod.io/api/resetpassword", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				MySwal.fire({
					icon: "success",
					title: <p>Su contraseña se ha actualizado con éxito!</p>
				});
				setRedirect(true);
			})
			.catch(err => console.log(err));
	};

	const abrirModal = () => {
		setAbierto(!abierto);
	};

	return (
		<Modal id="modal" isOpen={abierto} style={modalStyles}>
			<ModalHeader>Cambiar Contraseña</ModalHeader>
			<ModalBody>
				<FormGroup style={{ width: "400px" }}>
					<Label for="old">Correo Electrónico</Label>
					<Input
						type="email"
						id="email"
						onChange={e => {
							setEmail(e.target.value);
						}}
					/>
				</FormGroup>
				<FormGroup style={{ width: "400px" }}>
					<Label for="old">Contraseña Actual</Label>
					<Input
						type="password"
						id="email"
						onChange={e => {
							setOldPassword(e.target.value);
						}}
					/>
				</FormGroup>
				<FormGroup style={{ width: "400px" }}>
					<Label for="new">Nueva Contraseña</Label>
					<Input
						type="password"
						id="email"
						onChange={e => {
							setNewPassword(e.target.value);
						}}
					/>
				</FormGroup>
				<FormGroup style={{ width: "400px" }}>
					<Label for="new2">Confirmar Nueva Contraseña</Label>
					<Input
						type="password"
						id="email"
						onChange={e => {
							setConfirmedPassword(e.target.value);
						}}
					/>
				</FormGroup>
			</ModalBody>
			{redirect ? (
				<Redirect to="/login" />
			) : (
				<ModalFooter>
					<Button color="secondary" onClick={handleSubmit}>
						Guardar
					</Button>
					<Button color="secondary">Salir</Button>
				</ModalFooter>
			)}
		</Modal>
	);
};

export default ResetPassword;

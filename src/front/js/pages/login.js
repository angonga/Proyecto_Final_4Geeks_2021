import "../../styles/register.css";
import React, { useState } from "react";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://3000-peach-reindeer-5dsbnefl.ws-us03.gitpod.io/login", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h1>Login</h1>
			<form onSubmit={handleSubmit} style={{ width: "500px" }}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onChange={e => setEmail(e.target.value)}
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
					/>
					<div id="emailHelp" className="form-text">
						Well never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						onChange={e => setPassword(e.target.value)}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Login;

// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import { Link } from "react-router-dom";
// import { Context } from "../store/appContext";

// const Login = () => {
// 	const [abierto, setAbierto] = useState(true);
// 	const [email, setEmail] = useState("");
// 	const [password, setPassword] = useState("");
// 	const { store, actions } = useContext(Context);

// 	const modalStyles = {
// 		position: "absolute",
// 		top: "50%",
// 		left: "50%",
// 		transform: "translate(-50%, -50%)"
// 	};

// 	const body = {
// 		email: email,
// 		password: password
// 	};

// 	const onSubmit = e => {
// 		actions.login(body);
// 	};

// 	const abrirModal = () => {
// 		setAbierto(!abierto);
// 	};

// 	// const sendForm = () => {
// 	// 	alert(email);
// 	// };
// 	console.log(body);
// 	return (
// 		<Modal id="modal" isOpen={abierto} style={modalStyles}>
// 			<ModalHeader>Inicio de Sesión</ModalHeader>
// 			<ModalBody>
// 				<FormGroup style={{ width: "225px" }}>
// 					<Label for="email">Email</Label>
// 					<Input type="text" id="email" onChange={e => setEmail(e.target.value)} />
// 				</FormGroup>
// 				<FormGroup style={{ width: "225px" }}>
// 					<Label for="password">Contraseña</Label>
// 					<Input type="password" id="password" onChange={e => setPassword(e.target.value)} />
// 				</FormGroup>
// 			</ModalBody>
// 			<ModalFooter>
// 				<Button color="primary" onClick={onSubmit}>
// 					Enviar
// 				</Button>
// 				<Button color="secondary" onClick={abrirModal}>
// 					Cancelar
// 				</Button>
// 				<Link to="/recuperacion">Olvidó su contraseña?</Link>
// 			</ModalFooter>
// 		</Modal>
// 	);
// };

// export default Login;

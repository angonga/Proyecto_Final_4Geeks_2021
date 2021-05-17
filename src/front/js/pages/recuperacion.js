// import React from "react";
// //import "./register.css";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";

// class Recuperacion extends React.Component {
// 	state = {
// 		abierto: true
// 	};

// 	abrirModal = () => {
// 		this.setState({ abierto: !this.state.abierto });
// 	};

// 	render() {
// 		const modalStyles = {
// 			position: "absolute",
// 			top: "50%",
// 			left: "50%",
// 			transform: "translate(-50%, -50%)"
// 		};
// 		return (
// 			<>
// 				{/* <div className="principal">
// 					<div className="secundario">
// 						<Button color="success" onClick={this.abrirModal}>
// 							Recuperar Contraseña
// 						</Button>
// 					</div>
// 				</div> */}

// 				<Modal id="modal" isOpen={this.state.abierto} style={modalStyles}>
// 					<ModalHeader>Recuperar Contraseña</ModalHeader>
// 					<ModalBody>
// 						<FormGroup style={{ width: "400px" }}>
// 							<Label for="email">Email Registrado</Label>
// 							<Input type="text" id="email" />
// 						</FormGroup>
// 					</ModalBody>

// 					<ModalFooter>
// 						<Button color="primary">Recuperar</Button>
// 						<Button color="secondary" onClick={this.abrirModal}>
// 							Cancel
// 						</Button>
// 					</ModalFooter>
// 				</Modal>
// 			</>
// 		);
// 	}
// }

// export default Recuperacion;

import React, { useState } from "react";

export const Recuperacion = () => {
	const [email, setEmail] = useState("");
	// const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email
		};

		fetch("https://3001-brown-vulture-ydybxsfp.ws-us04.gitpod.io/api/forgotpassword", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				// setAuth(true);
				// sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="mx-auto pt-5">
			<h3>Recuperar Contraseña</h3>
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

				<button type="submit" className="btn btn-primary">
					Enviar
				</button>
			</form>
			{/* {auth ? <Redirect to="/login" /> : null} */}
		</div>
	);
};

export default Recuperacion;

// import React, { useState, useContext } from "react";
// import "../../styles/register.css";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
// import "bootstrap/dist/css/bootstrap.css";
// import { Context } from "../store/appContext";

// const Register = () => {
// 	const [abierto, setAbierto] = useState(true);
// 	const [redirect, setRedirect] = useState(false);
// 	//crear estado para el campo email
// 	// const [email, setEmail] = useState("");
// 	// const [rol, setRol] = useState("");
// 	const [data, setData] = useState({
// 		role: false
// 	});
// 	const { store, actions } = useContext(Context);

// 	// console.log(email);
// 	// console.log(rol);

// 	const handleChange = e => {
// 		console.log(e.target.name);
// 		setData({ ...data, [e.target.name]: e.target.value });
// 	};

// 	const onSubmit = e => {
// 		actions.register(data);
// 	};

// 	const modalStyles = {
// 		position: "absolute",
// 		top: "50%",
// 		left: "50%",
// 		transform: "translate(-50%, -50%)"
// 	};

// 	const abrirModal = () => {
// 		setAbierto(!abierto);
// 	};
// 	// const sendForm = () => {
// 	// 	alert(email);
// 	// };
// 	console.log(data);
// 	return (
// 		<Modal id="modal" isOpen={abierto} style={modalStyles}>
// 			<ModalHeader>
// 				{/* // Registro //{" "} */}
// 				<div style={{ fontSize: "16px", float: "right", marginLeft: "150px", marginTop: "5px" }}>
// 					<FormGroup check>
// 						<Label check>
// 							<Input
// 								type="checkbox"
// 								onChange={e => {
// 									console.log(e);
// 									setData({ ...data, role: !e.target.checked ? false : true });
// 								}}
// 							/>{" "}
// 							Registro como proveedor?
// 						</Label>
// 					</FormGroup>
// 				</div>
// 			</ModalHeader>

// 			<ModalBody>
// 				<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
// 					<Label for="email">Email</Label>
// 					<Input type="text" name="email" id="email" onChange={handleChange} />
// 				</FormGroup>

// 				<FormGroup style={{ width: "225px", float: "left" }}>
// 					<Label for="phone">Phone</Label>
// 					<Input type="text" id="phone" name="phone" onChange={handleChange} />
// 				</FormGroup>

// 				<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
// 					<Label for="phone">Nombre</Label>
// 					<Input type="text" id="nombre" name="name" onChange={handleChange} />
// 				</FormGroup>

// 				<FormGroup style={{ width: "225px", float: "left" }}>
// 					<Label for="phone">Apellido</Label>
// 					<Input type="text" id="apellido" name="last_name" onChange={handleChange} />
// 				</FormGroup>

// 				<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
// 					<Label for="password">Password</Label>
// 					<Input type="password" id="password" name="password" onChange={handleChange} />
// 				</FormGroup>

// 				<FormGroup style={{ width: "225px", float: "left" }}>
// 					<Label for="password2">Confirm Password</Label>
// 					<Input type="password" id="password2" name="confirm_password" onChange={handleChange} />
// 				</FormGroup>
// 			</ModalBody>

// 			<ModalFooter>
// 				<Button color="primary" onClick={onSubmit}>
// 					Send
// 				</Button>

// 				<Button color="secondary" onClick={abrirModal}>
// 					Cancel
// 				</Button>
// 			</ModalFooter>
// 		</Modal>
// 	);
// };

// export default Register;

import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/register.css";

export const Register = () => {
	const [role, setRole] = useState(false);
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isProvider, setIsProvider] = useState(false);
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			role: role,
			name: name,
			last_name: lastName,
			phone: phone,
			email: email,
			password: password
		};

		fetch("https://3001-brown-vulture-ydybxsfp.ws-us04.gitpod.io/api/register", {
			method: "POST",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(data => {
				console.log(data);
				setAuth(true);
			})
			.catch(err => console.log(err));
	};

	const handleCheck = e => {
		// e.preventDefault();
		setIsProvider(!isProvider);
		setRole(!role);
	};

	return (
		<div>
			<br />
			<br />
			<div className="register mx-auto py-4 px-4">
				<h3>Registro</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="vendor"> Deseas registrarte como proveedor de servicios?</label>
						<input type="checkbox" name="checkbox" onChange={handleCheck} />
						<p id="text" style={{ display: isProvider ? "block" : "none" }}>
							<small>
								<i>
									Al registrarte como proveedor de servicios, deberás ingresar más datos personales e
									incluso, adjuntar tu hoja de delincuencia. Gracias por querer ser parte de la mejor
									red de profesionales!
								</i>
							</small>
						</p>
					</div>
					<div className="mb-3">
						<label className="form-label">Correo Electrónico</label>
						<input onChange={e => setEmail(e.target.value)} type="email" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Nombre</label>
						<input onChange={e => setName(e.target.value)} type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Apellidos</label>
						<input onChange={e => setLastName(e.target.value)} type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Número de Teléfono</label>
						<input onChange={e => setPhone(e.target.value)} type="text" className="form-control" />
					</div>
					<div className="mb-3">
						<label className="form-label">Contraseña</label>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<div className="mb-3">
						<label className="form-label">Confirmar Contraseña</label>
						<input
							onChange={e => setPassword(e.target.value)}
							type="password"
							className="form-control"
							id="exampleInputPassword1"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Enviar
					</button>
				</form>
				{auth ? <Redirect to="/login" /> : null}
			</div>
		</div>
	);
};

export default Register;

/* <script>
function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
</script> */

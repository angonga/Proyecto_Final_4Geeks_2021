import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../../styles/register.css";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};

		fetch("https://3000-peach-reindeer-5dsbnefl.ws-us03.gitpod.io/register", {
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

	return (
		<div className="mx-auto pt-5">
			<h1>Register</h1>
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
			{auth ? <Redirect to="/login" /> : null}
		</div>
	);
};

export default Register;

// 	<Modal id="modal" isOpen={abierto} style={modalStyles}>
// 		<ModalHeader>
// 			{/* // Registro //{" "} */}
// 			<div style={{ fontSize: "16px", float: "right", marginLeft: "150px", marginTop: "5px" }}>
// 				<FormGroup check>
// 					<Label check>
// 						<Input
// 							type="checkbox"
// 							onChange={e => {
// 								console.log(e);
// 								setData({ ...data, role: !e.target.checked ? false : true });
// 							}}
// 						/>{" "}
// 						Registro como proveedor?
// 					</Label>
// 				</FormGroup>
// 			</div>
// 		</ModalHeader>

// 		<ModalBody>
// 			<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
// 				<Label for="email">Email</Label>
// 				<Input type="text" name="email" id="email" onChange={handleChange} />
// 			</FormGroup>

// 			<FormGroup style={{ width: "225px", float: "left" }}>
// 				<Label for="phone">Phone</Label>
// 				<Input type="text" id="phone" name="phone" onChange={handleChange} />
// 			</FormGroup>

// 			<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
// 				<Label for="phone">Nombre</Label>
// 				<Input type="text" id="nombre" name="name" onChange={handleChange} />
// 			</FormGroup>

// 			<FormGroup style={{ width: "225px", float: "left" }}>
// 				<Label for="phone">Apellido</Label>
// 				<Input type="text" id="apellido" name="last_name" onChange={handleChange} />
// 			</FormGroup>

// 			<FormGroup style={{ width: "225px", float: "left", marginRight: "10px" }}>
// 				<Label for="password">Password</Label>
// 				<Input type="password" id="password" name="password" onChange={handleChange} />
// 			</FormGroup>

// 			<FormGroup style={{ width: "225px", float: "left" }}>
// 				<Label for="password2">Confirm Password</Label>
// 				<Input type="password" id="password2" name="confirm_password" onChange={handleChange} />
// 			</FormGroup>
// 		</ModalBody>

// 		<ModalFooter>
// 			<Button color="primary" onClick={onSubmit}>
// 				Send
// 			</Button>

// 			<Button color="secondary" onClick={abrirModal}>
// 				Cancel
// 			</Button>
// 		</ModalFooter>
// 	</Modal>
// );

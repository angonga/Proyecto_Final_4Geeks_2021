import "../../styles/register.css";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/login.scss";
import swal from "@sweetalert/with-react";
import SweetAlert from "sweetalert2-react";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [auth, setAuth] = useState(false);
	const { store, actions } = useContext(Context);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email,
			password: password
		};
		actions.login(body);
	};

	return (
		<div>
			<div className="text-center mx-auto pt-5">
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="login text-center" style={{ padding: "20px" }}>
					<h3>Inicio de Sesión</h3>

					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="exampleInputEmail1" className="form-label">
								Correo Electrónico
							</label>
							<input
								onChange={e => setEmail(e.target.value)}
								type="email"
								className="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="exampleInputPassword1" className="form-label">
								Contraseña
							</label>
							<input
								onChange={e => setPassword(e.target.value)}
								type="password"
								className="form-control"
								id="exampleInputPassword1"
							/>
						</div>
						<br />
						<div>
							<Link to="/recuperacion">Olvidó su contraseña?</Link>
						</div>
						<br />
						<button type="submit" className="btn btn-dark">
							Enviar
						</button>
					</form>
				</div>
				alert()
				{console.log(store.role)}
				{store.role === "vendor" ? (
					<Redirect to="/editProveedor" />
				) : store.role === "client" ? (
					<Redirect to="/perfilUsuario" />
				) : null}
			</div>
		</div>
	);
};

export default Login;

// { console.log(store.role) }
// {
// store.role === "vendor" ? (
//     <Redirect to="/editProveedor" />
// ) : store.role === "client" ? (
//     <Redirect to="/perfilUsuario" />
// ) : null
// }

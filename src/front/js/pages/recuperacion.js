import React, { useState } from "react";
import "../../styles/recuperacion.scss";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Recuperacion = () => {
	const [email, setEmail] = useState("");
	const MySwal = withReactContent(Swal);

	const handleSubmit = e => {
		e.preventDefault();

		const body = {
			email: email
		};

		fetch("https://3001-maroon-viper-y4y3mj7h.ws-us07.gitpod.io/api/forgotpassword", {
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
					title: <p>Su nueva contraseña ha sido enviada al correo ingreado</p>
				});
			})
			.catch(err => console.log(err));
	};

	return (
		<div
			className="text-center recuperacion"
			style={{ width: "450px", height: "250px", marginTop: "150px", marginBottom: "175px", padding: "15px" }}>
			{" "}
			<h3>Recuperar Contraseña</h3>
			<form onSubmit={handleSubmit}>
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
				<div id="emailHelp" className="form-text">
					Por favor ingrese el correo brindado, y siga las instrucciones.
				</div>
				<br />
				<button type="submit" className="btn btn-dark">
					Enviar
				</button>
			</form>
			{/* {auth ? <Redirect to="/login" /> : null} */}
		</div>
	);
};

export default Recuperacion;

import React, { useState } from "react";

export const Recuperacion = () => {
	const [email, setEmail] = useState("");
	// const [auth, setAuth] = useState(false);

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
				// setAuth(true);
				// sessionStorage.setItem("my_token", data.token);
			})
			.catch(err => console.log(err));
	};

	return (
		<div
			className="container text-center"
			style={{ width: "450px", height: "250px", marginTop: "150px", marginBottom: "175px", padding: "15px" }}>
			{" "}
			<h3>Recuperar Contraseña</h3>
			<form onSubmit={handleSubmit} style={{ width: "350px" }}>
				<div className="">
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
				</div>

				<button type="submit" className="btn btn-dark">
					Enviar
				</button>
			</form>
			{/* {auth ? <Redirect to="/login" /> : null} */}
		</div>
	);
};

export default Recuperacion;

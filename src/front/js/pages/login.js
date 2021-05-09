import React, { useState, useContext } from "react";
//import TextField from '@material-ui/core/TextField';
//import Autocomplete from '@material-ui/lab/Autocomplete';
import "../../styles/register.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Login = () => {
	const [abierto, setAbierto] = useState(true);
	//crear estado para el campo email ??? no deberían de venir vacíos por default
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);
	console.log(email);
	console.log(password);

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

	return (
		<Modal id="modal" isOpen={abierto} style={modalStyles}>
			<ModalHeader>Inicio de Sesión</ModalHeader>
			<ModalBody>
				<FormGroup style={{ width: "225px" }}>
					<Label for="email">Email</Label>
					<Input type="text" id="email" />
				</FormGroup>
				<FormGroup style={{ width: "225px" }}>
					<Label for="password">Contraseña</Label>
					<Input type="text" id="password" />
				</FormGroup>
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={actions.sendForm}>
					Enviar
				</Button>
				<Button color="secondary" onClick={abrirModal}>
					Cancelar
				</Button>
				<Link to="/recuperacion">Olvidó su contraseña?</Link>
			</ModalFooter>
		</Modal>
	);
};

export default Login;

// // class Login extends React.Component {
// // 	state = {
// // 		abierto: true
// // 	};
// // 	abrirModal = () => {
// // 		this.setState({ abierto: !this.state.abierto });
// // 	};
// // 	render() {
// // 		const modalStyles = {
// // 			position: "absolute",
// // 			top: "50%",
// // 			left: "50%",
// // 			transform: "translate(-50%, -50%)"
// // 		};
// // 		return (
// 			<>
// 				{/* <div className="principal">
// 					<div className="secundario">
// 						<Button color="success" onClick={this.abrirModal}>
// 							Registrarse
// 						</Button>
// 					</div>
// 				</div> */}
// 				<Modal id="modal" isOpen={this.state.abierto} style={modalStyles}>
// 					<ModalHeader>Inicio de Sesión</ModalHeader>
// 					<ModalBody>
// 						<FormGroup style={{ width: "225px" }}>
// 							<Label for="email">Email</Label>
// 							<Input type="text" id="email" />
// 						</FormGroup>
// 						<FormGroup style={{ width: "225px" }}>
// 							<Label for="password">Contraseña</Label>
// 							<Input type="text" id="password" />
// 						</FormGroup>
// 					</ModalBody>
// 					<ModalFooter>
// 						<Button color="primary">Enviar</Button>
// 						<Button color="secondary" onClick={this.abrirModal}>
// 							Cancelar
// 						</Button>
// 						<Link>Olvidó su contraseña?</Link>
// 					</ModalFooter>
// 				</Modal>
// 			</>
// 		);
// 	}
// }
// export default Login;

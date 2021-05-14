import React, { useEffect, useContext } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import FileUploader from "../component/FileUploader";
import ImgUploader from "../component/ImgUploader";
import { Context } from "../store/appContext";
import SelectSearch from "react-select-search";

export const EditProveedor = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.loadProvincias();
	}, []);

	const changeProvincia = id => {
		actions.loadCantones(id);
	};

	return (
		<div style={{ marginLeft: "250px" }} className="container-fluid">
			<h1 style={{ float: "left" }}>Mis Datos:</h1>

			<div style={{ float: "left", marginLeft: "50px" }}>
				<ImgUploader />
			</div>

			<div style={{ marginLeft: "100px", marginBottom: "50px", marginTop: "20px", float: "left" }}>
				<button type="button" className="btn btn-info">
					Cambiar Contraseña
				</button>
			</div>

			<div style={{ marginLeft: "50px", marginTop: "250px", width: "800px" }}>
				<form style={{ float: "left", marginRight: "30px" }}>
					<input style={{ width: "350px" }} type="text" name="nombre" placeholder="Nombre" />
				</form>

				<form style={{ float: "left" }}>
					<input style={{ width: "350px" }} type="text" name="apellido" placeholder="Apellido" />
				</form>

				<form style={{ float: "left", marginRight: "30px", marginTop: "25px" }}>
					<input style={{ width: "350px" }} type="text" name="email" placeholder="Email" />
				</form>

				<form style={{ float: "left", marginTop: "25px" }}>
					<input style={{ width: "350px" }} type="text" name="telefono" placeholder="Telefono" />
				</form>

				<SelectSearch
					onChange={changeProvincia}
					options={store.provincias}
					value="value"
					name="name"
					placeholder="Provincia"
				/>
				<SelectSearch options={store.cantones} value="value" name="name" placeholder="Cantón" />
			</div>

			<h3 style={{ marginTop: "425px" }}>Descripción:</h3>

			<div style={{ marginTop: "30px", float: "left", marginRight: "30px" }}>
				<textarea style={{ width: "400px", height: "200px" }} />
			</div>

			<div
				style={{
					marginTop: "30px",
					border: "2px solid black",
					width: "400px",
					height: "200px",
					borderRadius: "10px",
					backgroundColor: "#fa9a41",
					float: "left",
					paddingTop: "30px",
					paddingLeft: "20px"
				}}>
				<FileUploader />
			</div>

			<h1 style={{ marginTop: "275px" }}>Servicios:</h1>

			<div
				style={{
					marginTop: "25px",
					border: "2px solid black",
					width: "800px",
					height: "150px",
					borderRadius: "25px",
					backgroundColor: "RGB(158, 202, 225)"
				}}>
				<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Decoración</h3>

				<div style={{ marginLeft: "200px" }}>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" htmlFor="inlineCheckbox1">
							Exteriores
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
						<label className="form-check-label" htmlFor="inlineCheckbox2">
							Interiores
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">
							Paisajismo
						</label>
					</div>
				</div>
			</div>

			<div
				style={{
					marginTop: "25px",
					border: "2px solid black",
					width: "800px",
					height: "150px",
					borderRadius: "25px",
					backgroundColor: "#6baed6"
				}}>
				<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Remodelaciones</h3>

				<div style={{ marginLeft: "200px" }}>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" htmlFor="inlineCheckbox1">
							Cerrajería
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
						<label className="form-check-label" htmlFor="inlineCheckbox2">
							Pintura
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">
							Electricidad
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">
							Ventanería
						</label>
					</div>
				</div>
			</div>

			<div
				style={{
					marginTop: "25px",
					border: "2px solid black",
					width: "800px",
					height: "150px",
					borderRadius: "25px",
					backgroundColor: "#4292c6"
				}}>
				<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Servicios Domésticos</h3>

				<div style={{ marginLeft: "200px" }}>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" htmlFor="inlineCheckbox1">
							Cocina
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
						<label className="form-check-label" htmlFor="inlineCheckbox2">
							Limpieza General
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">
							Limpieza Vidrios
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">
							Aplanchado
						</label>
					</div>
				</div>
			</div>

			<div
				style={{
					marginTop: "25px",
					border: "2px solid black",
					width: "800px",
					height: "150px",
					borderRadius: "25px",
					backgroundColor: "#2171b5"
				}}>
				<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Otros</h3>

				<div style={{ marginLeft: "200px" }}>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
						<label className="form-check-label" htmlFor="inlineCheckbox1">
							Cuido de Mascotas
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
						<label className="form-check-label" htmlFor="inlineCheckbox2">
							Seguridad Privada
						</label>
					</div>
					<div style={{ marginRight: "45px" }} className="form-check form-check-inline">
						<input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
						<label className="form-check-label" htmlFor="inlineCheckbox3">
							Tapicería
						</label>
					</div>
				</div>
			</div>
			<div style={{ marginTop: "30px", marginLeft: "350px" }}>
				<button type="button" className="btn btn-success">
					Guardar
				</button>
			</div>
		</div>
	);
};

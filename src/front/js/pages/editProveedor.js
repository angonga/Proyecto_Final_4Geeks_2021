import React, { useEffect, useContext } from "react";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import FileUploader from "../component/FileUploader";
import ImgUploader from "../component/ImgUploader";
import { Context } from "../store/appContext";
import SelectSearch from "react-select-search";
import "../../styles/editProveedor.scss";

export const EditProveedor = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.loadProvincias();
	}, []);

	const changeProvincia = id => {
		actions.loadCantones(id);
	};

	return (
		<div
			className="text-center container"
			style={{
				marginTop: "80px",
				marginBottom: "50px",
				padding: "10px"
			}}>
			<h2>Información General:</h2>
			<div style={{ float: "right" }} />
			<div className="row">
				<div className="col-sm-8 text-left">
					<div className="form-group">
						<div style={{ width: "800px" }}>
							<form style={{ float: "left", marginRight: "30px", marginTop: "25px", marginLeft: "30px" }}>
								{/* <label htmlFor="nombre">Nombre: </label> */}
								<input style={{ width: "250px" }} type="text" name="nombre" placeholder="Nombre" />
							</form>

							<form style={{ float: "left", marginRight: "30px", marginLeft: "30px" }}>
								{/* <label htmlFor="apellido">Apellido: </label> */}
								<input
									style={{ width: "350px", marginTop: "25px" }}
									type="text"
									name="apellido"
									placeholder="Apellido"
								/>
							</form>

							<form style={{ float: "left", marginTop: "30px", marginRight: "30px", marginLeft: "30px" }}>
								{/* <label htmlFor="email">Correo electrónico: </label> */}
								<input style={{ width: "250px" }} type="text" name="email" placeholder="Email" />
							</form>

							<form style={{ float: "left", marginTop: "30px", marginLeft: "30px" }}>
								{/* <label htmlFor="telefono">Teléfono: </label> */}
								<input style={{ width: "350px" }} type="text" name="telefono" placeholder="Teléfono" />
							</form>

							<form style={{ float: "left", marginTop: "30px", marginRight: "30px", marginLeft: "30px" }}>
								<SelectSearch
									onChange={changeProvincia}
									options={store.provincias}
									value="value"
									name="name"
									placeholder="Provincia"
									style={{ width: "100px" }}
								/>
							</form>
							<form style={{ float: "left", marginTop: "30px" }}>
								<SelectSearch
									style={{ width: "100px" }}
									options={store.cantones}
									value="value"
									name="name"
									placeholder="Cantón"
								/>
							</form>
							<form style={{ float: "left", marginTop: "30px", marginLeft: "30px" }}>
								{/* <label htmlFor="telefono">Teléfono: </label> */}
								<input
									style={{ width: "350px" }}
									type="text"
									name="Cédula"
									placeholder="Digita su Cédula"
								/>
							</form>
						</div>
					</div>
				</div>
				<div className="col-sm-4 text-center">
					<div>
						<ImgUploader />
					</div>
				</div>
			</div>

			<h3 className="text-left" style={{ marginTop: "25px", marginLeft: "125px" }}>
				Descripción:
			</h3>
			<div className="row">
				<div className="col-sm">
					<div style={{ marginTop: "30px", float: "left", marginRight: "10px" }}>
						<textarea style={{ width: "350px", height: "100px" }} />
					</div>
				</div>
				<div className="col-sm text-center">
					<p>Hoja Delincuencia</p>
					<div
						className="text-center"
						style={{
							width: "250px",
							height: "100px",
							borderRadius: "10px",

							float: "left",

							paddingLeft: "20px"
						}}>
						<FileUploader />
					</div>
				</div>
				<div className="col-sm text-center">
					<p>Cédula</p>
					<div
						className="text-center"
						style={{
							width: "250px",
							height: "100px",
							borderRadius: "10px",

							float: "left",

							paddingLeft: "20px"
						}}>
						<FileUploader />
					</div>
				</div>
			</div>
			<div className="text-center" style={{ marginLeft: "150px" }}>
				<h1 style={{ marginTop: "15px", marginRight: "150px" }}>Servicios:</h1>

				<div
					className="text-center"
					style={{
						marginTop: "25px",
						border: "2px solid black",
						width: "800px",
						height: "150px",
						borderRadius: "25px",
						backgroundColor: "#CBEBE3"
					}}>
					<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Decoración</h3>

					<div className="text-center">
						<div style={{ marginRight: "45px" }} className="form-check form-check-inline text-center">
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
						backgroundColor: "#CBEBE3"
					}}>
					<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Remodelaciones</h3>

					<div>
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
						backgroundColor: "#CBEBE3"
					}}>
					<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>
						Servicios Domésticos
					</h3>

					<div>
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
						backgroundColor: "#CBEBE3"
					}}>
					<h3 style={{ marginTop: "20px", marginBottom: "25px", marginLeft: "50px" }}>Otros</h3>

					<div>
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
			</div>
			<div className="p-2">
				<button type="button" className="btn btn-dark">
					Guardar
				</button>
			</div>
		</div>
	);
};

import React, { useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import iconosprofesionales from "../../img/iconosprofesionales.jpg";
import SelectSearch from "react-select-search";
import { Context } from "../store/appContext";

export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.loadProvincias();
	}, []);

	const changeProvincia = id => {
		actions.loadCantones(id);
	};

	return (
		<div style={{ marginLeft: "250px", marginTop: "100px" }} className="container-fluid">
			<div style={{ width: "350px", float: "left", marginRight: "100px" }} className="input-group">
				<input type="text" className="form-control" placeholder="Qué servicio buscar?" />
				<div className="input-group-append" />
			</div>
			<SelectSearch
				onChange={changeProvincia}
				options={store.provincias}
				value="value"
				name="name"
				placeholder="Provincia"
			/>
			<SelectSearch options={store.cantones} value="value" name="name" placeholder="Canton" />
			<button style={{ marginTop: "25px", marginLeft: "375px" }} type="button" className="btn btn-info">
				Buscar
			</button>
			<div>
				<img style={{ marginTop: "100px", marginRight: "100px", width: "800px" }} src={iconosprofesionales} />
			</div>
		</div>
	);
};

import React, { useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import SelectSearch from "react-select-search";
import { Context } from "../store/appContext";
import { Card, CardGroup } from "react-bootstrap";
import icono_pintura from "../../img/pintura.png";
import icono_cocina from "../../img/cocina.png";
import icono_mantenimiento from "../../img/mantenimiento.png";
import ShowVendorCard from "./showvendorcard";

export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.loadProvincias();
		actions.loadServicios();
	}, []);

	const changeProvincia = id => {
		// actions.loadCantones(id);
	};

	return (
		<div
			className="container"
			style={{
				marginTop: "100px",
				marginBottom: "35px",
				maxwidth: "1140px",
				padding: "25px 50px 75px 50px"
			}}>
			<div className="input-group">
				<SelectSearch
					onChange={changeProvincia}
					options={store.provincias}
					value="value"
					name="name"
					placeholder="Provincia"
				/>
				{/* <SelectSearch options={store.cantones} value="value" name="name" placeholder="Cantón" /> */}
			</div>
			<ShowVendorCard />
		</div>
	);
};

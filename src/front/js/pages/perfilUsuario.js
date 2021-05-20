import React, { useEffect, useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import iconosprofesionales from "../../img/iconosprofesionales.jpg";
import SelectSearch from "react-select-search";
import { Context } from "../store/appContext";
import "../../styles/perfilUsuario.scss";

export const PerfilUsuario = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		// actions.loadProvincias();
		actions.loadServicios();
	}, []);

	const changeProvincia = id => {
		actions.loadCantones(id);
	};

	// const changeServicio = id => {
	// 	actions.loadServicios(id);
	// };

	return (
		<div>
			<br />
			<br />
			<br />
			<div className="row justify-content-around">
				<div className="col-4">
					<div className="input-group">
						<input type="text" className="form-control" placeholder="¿Qué servicio buscar?" />
						<div className="input-group-append">
							<SelectSearch
								// onChange={changeProvincia}
								options={store.servicios}
								value="value"
								name="name"
							/>
						</div>
					</div>
					<button style={{ marginTop: "25px", marginLeft: "375px" }} type="button" className="btn btn-info">
						Buscar
					</button>
				</div>
				<div className="col-4">
					{" "}
					<div className="input-group">
						<SelectSearch
							onChange={changeProvincia}
							options={store.provincias}
							value="value"
							name="name"
							placeholder="Provincia"
						/>
						<SelectSearch options={store.cantones} value="value" name="name" placeholder="Cantón" />
					</div>
				</div>
			</div>

			{/* <div>
				<img style={{ marginTop: "100px", marginRight: "100px", width: "800px" }} src={iconosprofesionales} />
			</div> */}
			<div>
				<div className="row justify-content-md-center">
					<div className="col-lg-3 col-sm-4 col-12 text-center">
						<div className="row main-box-layout img-thumbnail">
							<div className="col-lg-12 col-sm-12 col-12 box-icon-section bg-info">
								<i className="fa fa-magic" aria-hidden="true" />
							</div>
							<div className="col-lg-12 col-sm-12 col-12 box-text-section">
								<p>14</p>
							</div>
							<div className="label">
								<h3>
									<span className="badge badge-pill bg-info">Decoración</span>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-4 col-12 text-center">
						<div className="row main-box-layout img-thumbnail">
							<div className="col-lg-12 col-sm-12 col-12 box-icon-section bg-info">
								<i className="fa fa-star" aria-hidden="true" />
							</div>
							<div className="col-lg-12 col-sm-12 col-12 box-text-section">
								<p>25</p>
							</div>
							<div className="label">
								<h3>
									<span className="badge badge-pill bg-info">Remodelaciones</span>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-4 col-12 text-center">
						<div className="row main-box-layout img-thumbnail">
							<div className="col-lg-12 col-sm-12 col-12 box-icon-section bg-info">
								<i className="fa fa-eye" aria-hidden="true" />
							</div>
							<div className="col-lg-12 col-sm-12 col-12 box-text-section">
								<p>85</p>
							</div>
							<div className="label">
								<h3>
									<span className="badge badge-pill bg-info">Alimentación</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-md-center">
					<div className="col-lg-3 col-sm-4 col-12 text-center">
						<div className="row main-box-layout img-thumbnail">
							<div className="col-lg-12 col-sm-12 col-12 box-icon-section bg-info">
								<i className="fa fa-user-o" aria-hidden="true" />
							</div>
							<div className="col-lg-12 col-sm-12 col-12 box-text-section">
								<p>150</p>
							</div>
							<div className="label">
								<h3>
									<span className="badge badge-pill bg-info">Cerrajería</span>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-4 col-12 text-center">
						<div className="row main-box-layout img-thumbnail">
							<div className="col-lg-12 col-sm-12 col-12 box-icon-section bg-info">
								<i className="fa fa-picture-o" aria-hidden="true" />
							</div>
							<div className="col-lg-12 col-sm-12 col-12 box-text-section">
								<p>45</p>
							</div>
							<div className="label">
								<h3>
									<span className="badge badge-pill bg-info">Limpieza</span>
								</h3>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-sm-4 col-12 text-center">
						<div className="row main-box-layout img-thumbnail">
							<div className="col-lg-12 col-sm-12 col-12 box-icon-section bg-info">
								<i className="fa fa-pencil-square-o" aria-hidden="true" />
							</div>
							<div className="col-lg-12 col-sm-12 col-12 box-text-section">
								<p>20</p>
							</div>
							<div className="label">
								<h3>
									<span className="badge badge-pill btn bg-info">Planchado</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

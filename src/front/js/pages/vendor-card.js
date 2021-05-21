import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import PropTypes from "prop-types";

export default function VendorCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex">
			<div className="card text-center mainCard flex-fill border-0">
				<img className="cardImage" src={props.img} width="100%" height="240px" />
				<div className="card-body">
					<h3 className="card-title">{props.nombre}</h3>
					<p className="card-text text-left m-0" style={{ color: "black" }}>
						{props.servicios}
					</p>
					<p className="card-text text-left m-0" style={{ color: "black" }}>
						{props.area}
					</p>
				</div>
				<div className="card-footer">
					<small className="text-muted">
						<div className="d-flex justify-content-between">
							<div className="col m-0 p-0">
								<Link to="/perfilProveedor">
									<button type="button" className="btn btn-dark">
										Ver Perfil
									</button>
								</Link>
							</div>
							<div className="col m-0 p-0">
								<button type="button" className="btn btn-outline-warning">
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
									<i className="fa fa-star" />
								</button>
							</div>
						</div>
					</small>
				</div>
			</div>
		</div>
	);
}

VendorCard.propTypes = {
	nombre: PropTypes.string,
	servicios: PropTypes.string,
	area: PropTypes.string,
	img: PropTypes.string
};

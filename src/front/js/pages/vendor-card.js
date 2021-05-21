import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.scss";
import JoseAntonio2 from "../../img/JoseAntonio2.png";
// import Isabel2 from "../../img/Isabel2.png";
// import Emanuel2 from "../../img/Emanuel2.png";

export default function VendorCard() {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex">
			<div className="card text-center mainCard flex-fill border-0">
				<img className="cardImage" src={JoseAntonio2} width="100%" height="240px" />
				<div className="card-body">
					<h3 className="card-title">Jose Antonio Rivas</h3>
					<p className="card-text text-left m-0">
						Servicios:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cerrajaería, Pintura, Remodelaciones.
					</p>
					<p className="card-text text-left m-0">
						Área de cobertura:&nbsp;&nbsp; San José, Heredia, Cartado.
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

{
	/* <div className="container">
			<div className="row">
				<div className="col-12">
					<img src={JoseAntonio2} className="rounded-circle" style={{ width: "300px", height: "300px" }} />
				</div>
				<div className="col-12 ">
					<h1> Jose Antonio Rivas </h1>
					<p className="card-text text-left m-0">
						Servicios:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cerrajaería, Pintura, Remodelaciones.
					</p>
					<p className="card-text text-left m-0">
						Área de cobertura:&nbsp;&nbsp; San José, Heredia, Cartado.
					</p>
				</div>
				<div className="col-12">
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
		</div> */
}

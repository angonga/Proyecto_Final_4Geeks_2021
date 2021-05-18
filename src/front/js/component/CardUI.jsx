import React from "react";
import img1 from "../../img/rigo-baby.jpg";

const Card = props => {
	return (
		<div className="row justify-content-center">
			<div className="col-md-4">
				<div className="card text-center tarjeta">
					<div className="overflow">
						<img src={img1} alt="Image1" />
					</div>
					<div className="card-body text-dark cuerpo-tarjeta">
						<h4 className="card-title">Paso 1</h4>
						<p className="card-text texto-tarjeta">
							Dirígite al botón Buscar y filtra según el servicio, y la ubicación en donde requieres la
							reparación
						</p>
						<a href="#" className="btn btn-outline-success">
							Buscar Servicio
						</a>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="card text-center tarjeta">
					<div className="overflow">
						<img src={img1} alt="Image1" />
					</div>
					<div className="card-body text-dark cuerpo-tarjeta">
						<h4 className="card-title">Paso 2</h4>
						<p className="card-text texto-tarjeta">
							Una vez seleccionado el perfil del profesional, se encontrará el botón Contactar,
							presionándolo vas a tener la información del profesional.
						</p>
						<a href="#" className="btn btn-outline-success">
							Contactar
						</a>
					</div>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card text-center tarjeta">
					<div className="overflow">
						<img src={img1} alt="Image1" />
					</div>
					<div className="card-body text-dark cuerpo-tarjeta">
						<h4 className="card-title">Paso 3</h4>
						<p className="card-text texto-tarjeta">
							Para poder Contratar el servicio del profesional, te debes registar en el botón Registro, o
							a su vez Iniciar Sesión. content.
						</p>
						<a href="#" className="btn btn-outline-success">
							Registarse
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;

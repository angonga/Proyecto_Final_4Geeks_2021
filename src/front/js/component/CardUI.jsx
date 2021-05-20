import React from "react";
import step1 from "../../img/step1.png";
import step2 from "../../img/step2.png";
import step3 from "../../img/step3.png";

const Card = props => {
	return (
		<div className="row justify-content-center">
			<div className="col-md-4">
				<div className="card text-center tarjeta">
					<div className="overflow">
						<img src={step1} alt="Image1" />
					</div>
					<div className="card-body text-dark cuerpo-tarjeta">
						<h4 className="card-title">Paso 1</h4>
						<p className="card-text texto-tarjeta">
							Dirígite al botón Buscar y filtra según el servicio, y la ubicación en donde requieres la
							reparación
						</p>
						<a href="/perfilUsuario" className="btn btn-dark">
							Buscar Servicio
						</a>
					</div>
				</div>
			</div>
			<div className="col-md-4">
				<div className="card text-center tarjeta">
					<div className="overflow">
						<img src={step2} alt="Image1" />
					</div>
					<div className="card-body text-dark cuerpo-tarjeta">
						<h4 className="card-title">Paso 2</h4>
						<p className="card-text texto-tarjeta">
							Una vez seleccionado el perfil del profesional, se encontrará el botón Contactar,
							presionándolo vas a tener la información del profesional.
						</p>
						<a href="/perfilProveedor" className="btn btn-dark">
							Contactar
						</a>
					</div>
				</div>
			</div>

			<div className="col-md-4">
				<div className="card text-center tarjeta">
					<div className="overflow">
						<img src={step3} alt="Image1" />
					</div>
					<div className="card-body text-dark cuerpo-tarjeta">
						<h4 className="card-title">Paso 3</h4>
						<p className="card-text texto-tarjeta">
							Para poder Contratar el servicio del profesional, te debes registar en el botón Registro, o
							a su vez Iniciar Sesión. content.
						</p>
						<a href="/register" className="btn btn-dark">
							Registarse
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Card;

import React from "react";
import img1 from "../../img/rigo-baby.jpg";

const Card = props => {
	return (
		<div className="col-md-4">
			<div className="card text-center tarjeta">
				<div className="overflow">
					<img src={img1} alt="Image1" />
				</div>
				<div className="card-body text-dark cuerpo-tarjeta">
					<h4 className="card-title">Paso 1</h4>
					<p className="card-text texto-tarjeta">
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<a href="#" className="btn btn-outline-success">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};
export default Card;

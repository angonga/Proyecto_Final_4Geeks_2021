import React, { useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import JoseAntonio2 from "../../img/JoseAntonio2.png";

export const PerfilProveedor = () => {
	return (
		<div style={{ padding: "30px", marginLeft: "150px", marginTop: "78px" }} className="container">
			<div style={{ float: "left", marginRight: "200px", marginLeft: "35px", marginTop: "50px" }}>
				<div className="input-group">
					<h1>Jose Antonio Rivas</h1>
				</div>
				<div style={{ width: "400px", height: "200px", marginTop: "10px" }}>
					<p>
						Es un profesional de la construcción civil con capacidad creativa para planificar, construir,
						dirigir y fiscalizar obras de construcción y reconstrucción de edificios tanto pública como
						privada, conforme a los proyectos y cálculos desarrollados por arquitectos e ingenieros civiles.
					</p>
				</div>
			</div>
			<div style={{ marginTop: "40px" }}>
				<img src={JoseAntonio2} style={{ width: "150px", height: "150px", float: "left" }} />
			</div>
			<div style={{ marginTop: "220px" }}>
				<div style={{ float: "left", marginLeft: "-40px", marginRight: "10px" }}>
					<h5>Calificación:</h5>
				</div>
				<div style={{ float: "left" }}>
					<img
						src="https://3.bp.blogspot.com/-BQv_gSjB22U/WIRrwg5oM6I/AAAAAAABktM/yNXHpvY5hdscNrnXIIOXYKFskM8x2tN0wCLcB/s1600/3-5-star.png"
						style={{ width: "100px" }}
					/>
				</div>
			</div>
			<div>
				<div style={{ float: "left", marginTop: "40px", marginLeft: "-200px" }}>
					<button type="button" className="btn btn-dark">
						Contratar
					</button>
				</div>
				<div style={{ float: "left", marginTop: "40px", marginLeft: "-90px" }}>
					<button type="button" className="btn btn-dark">
						Contactar
					</button>
				</div>
			</div>
			<div style={{ float: "left", position: "absolute", marginTop: "75px", marginLeft: "65px" }}>
				<div>
					<h3>Mis Servicios</h3>
				</div>
				<div>
					<ul>
						<li>Pintura</li>
						<li>Reparación</li>
						<li>Remodelación</li>
						<li>Pisos y Decks</li>
						<li>Mantenimiento</li>
						<li>Acabados</li>
					</ul>
				</div>
			</div>
			<div style={{ float: "left", marginTop: "30px", marginLeft: "500px" }}>
				<div>
					<h3>Mis Ultimas Reseñas:</h3>
				</div>
				<div style={{ border: "2px solid black", textAlign: "center", padding: "10px", borderRadius: "5px" }}>
					<p>
						Don Jose Antonio, realizó un excelente trabajo de pintura, mantuvo siempre mucha limpieza y fue
						muy amable.
					</p>
					<img
						src="https://3.bp.blogspot.com/-BQv_gSjB22U/WIRrwg5oM6I/AAAAAAABktM/yNXHpvY5hdscNrnXIIOXYKFskM8x2tN0wCLcB/s1600/3-5-star.png"
						style={{ width: "100px" }}
					/>
				</div>
				<div
					style={{
						border: "2px solid black",
						textAlign: "center",
						padding: "10px",
						marginTop: "20px",
						borderRadius: "5px"
					}}>
					<p>
						Jose Antonio, realize un trabajo impecable en la remodelación de mi terraza, entendió muy lo que
						quería, y fue muy efieciente en su trabajo.
					</p>
					<img
						src="https://3.bp.blogspot.com/-BQv_gSjB22U/WIRrwg5oM6I/AAAAAAABktM/yNXHpvY5hdscNrnXIIOXYKFskM8x2tN0wCLcB/s1600/3-5-star.png"
						style={{ width: "100px" }}
					/>
				</div>
			</div>
			<div>
				<img
					src="https://vivehotels.com/cache/map/8375.png"
					style={{ width: "600px", marginTop: "80px", marginLeft: "200px", marginBottom: "50px" }}
				/>
			</div>
		</div>
	);
};

export default PerfilProveedor;

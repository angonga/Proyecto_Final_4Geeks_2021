import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/vendor-card.scss";
import { Context } from "../store/appContext";
import VendorCard from "./vendor-card";
// import JoseAntonio2 from "../../img/JoseAntonio2.png";

export default function ShowVendorCard() {
	const { store, actions } = useContext(Context);
	const [searchVendor, setSearchVendor] = useState("");
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
		actions.loadServicios();
	}, []);

	return (
		<div>
			<div className="container topCardClass" />
			<div className="container mt-3">
				<input
					ref={inputRef}
					onChange={event => {
						setSearchVendor(event.target.value);
					}}
					type="text"
					className="form-control"
					placeholder="¿Qué servicio buscar?"
					aria-label="¿Qué servicio buscar?"
					name="¿Qué servicio buscar?"
					id="¿Qué servicio buscar?"
				/>
				<div className="row d-flex-row flex-nowrap overflow-auto mt-3">
					{store.proveedores
						.filter(value => {
							if (searchVendor === "") {
								return value;
							} else if (value.servicios.toLowerCase().includes(searchVendor.toLowerCase())) {
								return value;
							}
						})
						.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 mb-5">
									<VendorCard
										nombre={item.nombre}
										servicios={item.servicios}
										area={item.area}
										img={item.img}
									/>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

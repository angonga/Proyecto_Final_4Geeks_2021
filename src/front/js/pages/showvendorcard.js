import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/vendor-card.scss";
import { Context } from "../store/appContext";
import VendorCard from "./vendor-card";
import JoseAntonio2 from "../../img/JoseAntonio2.png";

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
					placeholder="Busque su profesional..."
					aria-label="Busque su profesional"
					name="Busque su profesional"
					id="Busque su profesional"
				/>
				<div className="row d-flex-row flex-nowrap overflow-auto mt-3">
					{store.servicios
						.filter(value => {
							if (searchVendor === "") {
								return value;
							} else if (value.name.toLowerCase().includes(searchVendor.toLowerCase())) {
								return value;
							}
						})
						.map((item, index) => {
							return (
								<div key={index} className="col-lg-4 mb-5">
									<VendorCard />
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

import React, { useContext, useState } from "react";
//import logocalle4 from "../../img/logocalle4.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
import logo_navbar from "../../img/logo_navbar.png";

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Dropdown,
	NavbarText,
	Button
} from "reactstrap";

export const Menu = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar fixed="top" className="bg-light" expand="md">
			<NavbarBrand href="/">
				{/* <a className="navbar-brand" href="#"> */}
				<img className="rounded-circle img-fluid" width="50px" height="50px" src={logo_navbar} alt="" />
				{/* </a> */}
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse className="d-flex justify-content-between" isOpen={isOpen} navbar>
				<Nav className="d-flex align-items-center" navbar>
					<NavItem>
						<ul className="dropdown mr-2">
							<li>
								<a href="#">Servicios</a>
								<ul>
									<li>
										<a href="#">Decoración</a>
										<ul>
											<li>
												<a href="">Exteriores</a>
											</li>
											<li>
												<a href="">Interiores</a>
											</li>
											<li>
												<a href="">Paisajismo</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Remodelaciones</a>
										<ul>
											<li>
												<a href="">Cerrajería</a>
											</li>
											<li>
												<a href="">Electricidad</a>
											</li>
											<li>
												<a href="">Pintura</a>
											</li>
											<li>
												<a href="">Ventanería</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Servicios Domésticos</a>
										<ul>
											<li>
												<a href="">Cocina</a>
											</li>
											<li>
												<a href="">Limpieza de Vidrios</a>
											</li>
											<li>
												<a href="">Limpieza General</a>
											</li>
											<li>
												<a href="">Planchado</a>
											</li>
										</ul>
									</li>
									<li>
										<a href="#">Otros</a>
										<ul>
											<li>
												<a href="">Cuido de mascotas</a>
											</li>
											<li>
												<a href="">Seguridad Privada</a>
											</li>
											<li>
												<a href="">Tapicería</a>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</NavItem>
					<NavItem>
						<Link className="mr-2 text-dark" to="/quienes">
							¿Quiénes Somos?
						</Link>
					</NavItem>
					<NavItem>
						<Link className="text-dark" to="/contacto">
							Contáctenos
						</Link>
					</NavItem>
				</Nav>
				<div>
					{" "}
					{sessionStorage.getItem("my_token") ? (
						<Button className="btn btn-dark mr-2" onClick={() => sessionStorage.removeItem("my_token")}>
							Cerrar Sesión
						</Button>
					) : (
						<>
							<Link className="btn btn-dark mr-2" to="/login">
								Inicio de Sesión
							</Link>
							<Link className="btn btn-dark" to="/register">
								Registro
							</Link>
						</>
					)}
				</div>
			</Collapse>
		</Navbar>
	);
};
Menu.propTypes = {
	light: PropTypes.bool,
	dark: PropTypes.bool,
	fixed: PropTypes.string,
	color: PropTypes.string,
	role: PropTypes.string,
	expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	// pass in custom element to use
};

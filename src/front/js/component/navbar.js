import React, { useContext, useState } from "react";
//import logocalle4 from "../../img/logocalle4.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.scss";
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
	NavbarText
} from "reactstrap";

export const Menu = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className="container">
			<Navbar fixed="top" className="container" color="light" light expand="md">
				<NavbarBrand href="/">Calle4!</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<ul className="dropdown">
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
							<NavLink href="/components/">¿Quiénes Somos?</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="https://github.com/reactstrap/reactstrap">Contáctenos</NavLink>
						</NavItem>
					</Nav>
					<Link to="/login">
						<button className="btn btn-outline-dark me-md-2" type="button">
							Inicio de Sesión
						</button>
					</Link>
					<NavbarText />
					<Link to="/register">
						<button className="btn btn-outline-dark" type="button">
							Registro
						</button>
					</Link>
				</Collapse>
			</Navbar>
		</div>
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

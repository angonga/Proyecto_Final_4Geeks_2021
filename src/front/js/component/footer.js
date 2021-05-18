import logo_4geeks from "../../img/4geeks.webp";
import logo_micitt from "../../img/micitt.png";
import logo_pinn from "../../img/pinn.png";
import logo_cinde from "../../img/cinde.png";
import logo_footer from "../../img/logo_navbar.png";
import "../../styles/footer.scss";

import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row">
			<div className="col">
				<img className="footer-logo" src={logo_4geeks} alt="Logo 4geeks" />
			</div>
			<div className="col">
				<img className="footer-logo" src={logo_micitt} alt="Logo micitt" />
			</div>
			<div className="col">
				<img className="footer-logo" src={logo_pinn} alt="Logo pinn" />
			</div>
			<div className="col">
				<img className="footer-logo" src={logo_cinde} alt="Logo cinde" />
			</div>
		</div>
		<br />
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">
				{" "}
				<img className="rounded-circle img-fluid" width="50px" height="50px" src={logo_footer} alt="" />
			</a>
		</p>
	</footer>
);

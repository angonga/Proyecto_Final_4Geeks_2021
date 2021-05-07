import logo_4geeks from "../../img/4geeks.webp";
import logo_micitt from "../../img/micitt.png";
import logo_pinn from "../../img/pinn.png";
import logo_cinde from "../../img/cinde.png";

import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<div className="row">
			<div className="col-3">
				<img src={logo_4geeks} alt="Logo 4geeks" width="100px" height="100px" />
			</div>
			<div className="col-3">
				<img src={logo_micitt} alt="Logo micitt" width="100px" height="100px" />
			</div>
			<div className="col-3">
				<img src={logo_pinn} alt="Logo pinn" width="100px" height="100px" />
			</div>
			<div className="col-3">
				<img src={logo_cinde} alt="Logo cinde" width="100px" height="100px" />
			</div>
		</div>
		<br />
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
	</footer>
);

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import BarChart from "../component/BarChart";
import DoughnutChart from "../component/DoughnutChart";

registerLocale("es", es);

function perfilProveedor() {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	return (
		<div style={{ marginLeft: "350px", marginTop: "25px" }} className="container-fluid">
			<h1 style={{ float: "left" }}>Trabajos pendientes:</h1>
			<div style={{ float: "left", marginLeft: "400px" }}>
				<button type="button" className="btn btn-info">
					Editar Perfil
				</button>
			</div>
			<div style={{ marginTop: "35px", width: "750px" }}>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Cliente</th>
							<th scope="col">Servicio</th>
							<th scope="col">Fecha</th>
							<th scope="col">Hora</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Juan Perez</td>
							<td>Pintar Casa</td>
							<td>30/06/2021</td>
							<td>9:00</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Maria Castro</td>
							<td>Reparar Goteras</td>
							<td>02/07/2021</td>
							<td>10:00</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Julio Sanchez</td>
							<td>Cambiar Vidrios</td>
							<td>12/07/2021</td>
							<td>14:00</td>
						</tr>
						<tr>
							<th scope="row">4</th>
							<td>Raquel Siles</td>
							<td>Reparar Puerta</td>
							<td>13/07/2021</td>
							<td>11:00</td>
						</tr>
					</tbody>
				</table>
			</div>

			<button style={{ marginTop: "50px" }} type="button" className="btn btn-info">
				Buscar trabajos finalizados
			</button>
			<br />
			<div style={{ marginTop: "25px", marginLeft: "100px", marginRight: "100px", float: "left" }}>
				<h5>Fecha Inicio:</h5>

				<DatePicker
					selected={startDate}
					onChange={date => setStartDate(date)}
					selectsStart
					startDate={startDate}
					endDate={endDate}
					locale="es"
					className="pickers"
					dateFormat="dd 'de' MMMM 'de' yyyy"
				/>
			</div>

			<div style={{ marginTop: "25px", marginLeft: "100px" }}>
				<h5>Fecha Final:</h5>
				<DatePicker
					selected={endDate}
					onChange={date => setEndDate(date)}
					selectsEnd
					startDate={startDate}
					endDate={endDate}
					minDate={startDate}
					locale="es"
					className="pickers"
					dateFormat="dd 'de' MMMM 'de' yyyy"
				/>
			</div>

			<div style={{ marginTop: "35px", marginBottom: "50px", width: "750px" }}>
				<table className="table table-striped">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Cliente</th>
							<th scope="col">Servicio</th>
							<th scope="col">Fecha Inicio</th>
							<th scope="col">Fecha Final</th>
						</tr>
					</thead>
					<tr>
						<th scope="row">1</th>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tbody />
				</table>
			</div>

			<h3>Estadísticas</h3>
			<div style={{ marginTop: "50px" }}>
				<div style={{ float: "left", marginRight: "75px" }}>
					<BarChart />
				</div>

				<div style={{ float: "left" }}>
					<DoughnutChart />
				</div>
			</div>
		</div>
	);
}

export default perfilProveedor;

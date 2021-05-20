// You can live edit this code below the import statements
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "../component/Cards.jsx";
import logo from "../../img/07_logo_1000x400.jpg";
import Isabel from "../../img/Isabel.png";
import JoseAntonio from "../../img/JoseAntonio.png";
import Emanuel from "../../img/Emanuel.png";

class CarouselCp extends React.Component {
	render() {
		return (
			<div className="d-flex justify-content-center">
				<Carousel>
					<Carousel.Item interval={3000}>
						<img id="logo" src={Isabel} alt="Logo Calle4" />
						<Carousel.Caption>
							{/* <h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img id="logo" src={JoseAntonio} alt="Logo Calle4" />
						<Carousel.Caption>
							{/* <h3>Second slide label</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img id="logo" src={Emanuel} alt="Logo Calle4" />
						<Carousel.Caption>
							{/* <h3>Third slide label</h3>
							<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	}
}

export default CarouselCp;

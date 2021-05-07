import React, { Component } from "react";
import "../../styles/ImgUploader.css";
export class ImgUploader extends Component {
	state = {
		profileImg: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
	};
	imageHandler = e => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ profileImg: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	render() {
		const { profileImg } = this.state;
		return (
			<div style={{ width: "250px" }} className="page">
				<div style={{ width: "250px" }} className="container">
					<p style={{ width: "150px", marginLeft: "50px" }} className="heading">
						Add your Image
					</p>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div style={{ width: "100px" }} className="label">
						<label
							style={{
								backgroundColor: "black",
								color: "white",
								width: "175px",
								height: "30px",
								borderRadius: "10px",
								textAlign: "center",
								marginTop: "5px",
								marginLeft: "20px"
							}}
							className="image-upload"
							htmlFor="input">
							Choose your Photo
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export default ImgUploader;

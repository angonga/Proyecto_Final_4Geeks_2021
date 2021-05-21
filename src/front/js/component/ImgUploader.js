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
			<div className="text-center">
				<div>
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>

					<div className="label text-center">
						<label
							style={{
								backgroundColor: "black",
								color: "white",
								width: "80px",
								height: "40px",
								borderRadius: "10px",
								textAlign: "center",
								marginTop: "15px"
							}}
							className="text-center"
							htmlFor="input">
							Examinar
						</label>
					</div>

					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />

					<button style={{ marginTop: "5px" }} type="button" className="btn btn-secondary">
						Subir
					</button>
				</div>
			</div>
		);
	}
}

export default ImgUploader;

import axios from "axios";

import React, { Component } from "react";

class FileUploader extends Component {
	state = {
		// Initially, no file is selected
		selectedFile: null
	};

	// On file select (from the pop up)
	onFileChange = event => {
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });
	};

	// On file upload (click the upload button)
	onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);

		// Details of the uploaded file
		// console.log(this.state.selectedFile);

		// Request made to the backend api
		// Send formData object
		axios.post("api/uploadfile", formData);
	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div>
					<p>File Name: {this.state.selectedFile.name}</p>
					<p>File Type: {this.state.selectedFile.type}</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					{/* <h5>Choose before Pressing the Upload button</h5> */}
				</div>
			);
		}
	};

	render() {
		return (
			<div className="text-center">
				<div style={{ marginTop: "25px" }}>
					<input type="file" onChange={this.onFileChange} />
					<button type="button" className="btn btn-primary" onClick={this.onFileUpload}>
						Subir!
					</button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default FileUploader;

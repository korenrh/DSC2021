import axios from 'axios';
import React, { Component } from 'react';
import deepai from 'deepai';
import { Button } from "../Button";


deepai.setApiKey("81e6129f-48af-4363-8b0a-006abbb54271");

(async function() {
    var resp = await deepai.callStandardApi("deepdream", {
            image: "https://content.fortune.com/wp-content/uploads/2020/05/SpaceX-NASA-Launch-04.jpg",
    });
    console.log(resp);
})()

class CreatePage extends Component {
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
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
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
          <h2>File Details:</h2>
           
          <p>File Name: {this.state.selectedFile.name}</p>

           
          <p>File Type: {this.state.selectedFile.type}</p>      
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose, then Upload, then Generate Image!</h4>
        </div>
      );
    }
  };
  constructor () {
    super()
    this.state = {
      username: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  /* handleClick () {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => this.setState({username: response.data.name}))
    }
 */
  handleClick () {
    axios.defaults.headers.common['Authorization'] = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K';
    axios.post('https://api.deepai.org/api/deepdream', {
      image: 'https://cdn.logo.com/hotlink-ok/logo-social.png'
    })
      .then(response => console.log("Success"))
  }

  render() {
    return (
      <div className="App">
            <h3>
              Upload Your Image!
            </h3>
            <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
            </div>
          {this.fileData()}
          <p>{this.state.username}</p>
          <Button onClick={this.handleClick}>
            Generate New Image
          </Button>
      </div>
    );
  }
}
export default CreatePage;
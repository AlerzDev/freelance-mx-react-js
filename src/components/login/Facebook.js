import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import axios from 'axios';
import Configuration from "../../Configuration";

export default class Facebook extends Component {
  constructor(){
    super()
    this.state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
    };
  }
  responseFacebook = response => {
    var user = {fullName: response.name, email: response.email, password: response.userID, username: response.name, idTypeUser: 3}
    
    localStorage.setItem('FreelanceMx:userId', response.userID);
    localStorage.setItem('FreelanceMx:name', response.name);
    localStorage.setItem('FreelanceMx:picture', response.picture.data.url)
    localStorage.setItem('FreelanceMx:email', response.email);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
    this.props.access(true) 

    if(this.props.register === true){
      axios.post(`${Configuration.apiServer}/api_v1/users/insert`,user).then(response => {
          if(response.data.success === true){
            this.props.access(true)
        }
    });
    }

  };

  componentClicked = () => console.log("clicked");

  render() {

    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
          Email: {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          icon={<i className="fab fa-facebook"></i>}
          textButton={this.props.text}
          size={this.props.size}
          cssClass={this.props.css}
          appId="493511694490342"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

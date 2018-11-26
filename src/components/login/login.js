import React, { Component } from 'react';
import axios from 'axios';
import Configuration from '../../Configuration';
import FacebookLogin from './Facebook';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { user: {}, access: false, loginUser:{email:"",password:""},message_error:"" }
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handleUser = this.handleUser.bind(this);
    this.access = this.access.bind(this);
  }

  onChangeEmail = (event) =>{
    this.state.loginUser.email= event.target.value;
  }
  onChangePassword = (event) =>{
    this.state.loginUser.password = event.target.value;
  }
  onClickLogIn = (event) =>{
    if(this.state.loginUser.email == ""){
      this.setState({message_error : "Se necesita el email"});
    }else{
      if(this.state.loginUser.password == ""){
        this.setState({message_error : "Se necesita la contraseña"});
      }else{
        this.setState({message_error : ""});
        axios.get(`${Configuration.apiServer}/api_v1/users/get-where?max=1&where=a.email='`+this.state.loginUser.email+"'").then(resp => {
          if(resp.data.items.length > 0){
            var user = resp.data.items[0];
            if(user.password == this.state.loginUser.password){
                this.setState({access: true})
                localStorage.setItem("user", JSON.stringify(user));
                this.props.initSession();
            }else{
              this.setState({message_error : "Credenciales incorrectas"});
            }
          }else{
            this.setState({message_error : "El usuario no existe"});
          }
        });
      }
    }
  }

  handleName(event) {
    this.setProp('fullName', event.target.value)
  }

  handleEmail(event) {
    this.setProp('email', event.target.value)
  }

  handlePassword(event) {
    this.setProp('password', event.target.value)
  }

  setProp(prop, value) {
    let user = this.state.user;

    user[prop] = value;

    this.setState({ user: user });
  }

  handleType(event){
    this.setProp('idTypeUser', parseInt(event.target.value))
  }

  handleUser(event){
    this.setProp('username', event.target.value)
  }

  handleSave() {
    axios.post(`${Configuration.apiServer}/api_v1/users/insert`, this.state.user).then(resp => {
      console.log(resp)
    })
  }

  access(reason){
    console.log(reason)
    this.setState({access: true})
  }

  render() {
    if(this.state.access) {
      return (
        <Redirect to="/" />
      );
    }
    return (
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image"></div>
          <div className="content">
            <div className="container">
              <div className="row">

                <div className="col-lg-5 col-md-5 offset-lg-0 offset-md-2" >
                  <div id="square7" className="square square-7"></div>
                  <div id="square8" className="square square-8"></div>
                  <div className="card card-register" style={{padding: "10%"}}>
                    <div className="card-header">
                      <img className="card-img" src="assets/img/square1.png" alt="Cards" />
                      <h6 className="card-title" style={{ color: "white" }}>Iniciar sesión</h6>
                    </div>
                    <div className="card-body">
                      <span>{this.state.message_error}</span>
                      <form className="form">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tim-icons icon-email-85"></i>
                            </div>
                          </div>
                          <input type="text" placeholder="Email" className="form-control" onChange={this.onChangeEmail} />
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tim-icons icon-lock-circle"></i>
                            </div>
                          </div>
                          <input type="password" className="form-control" placeholder="Password" onChange={this.onChangePassword} />
                        </div>

                      </form>
                    </div>
                    <div className="card-footer">
                      <div id="square1" className="square square-1"></div>
                      <button onClick={this.onClickLogIn} className="btn btn-primary btn-round btn-lg">Ingresar</button>
                    </div>
                    <FacebookLogin
                      register={false}
                      text=" Conectarse con Facebook"
                      size="small"
                      css="btn btn-info btn-round btn-lg"
                      access = {this.access}
                    />
                  </div>
                </div>

                <div className="col-lg-5 col-md-5 offset-lg-2 offset-md-4">
                  <div id="square7" className="square square-7"></div>
                  <div id="square8" className="square square-8"></div>
                  <div className="card card-register" style={{padding: "10%"}}>
                    <div className="card-header">
                      <img className="card-img" src="assets/img/square1.png" alt="Cards" />
                      <h6 className="card-title" style={{ color: "white" }}>registrate</h6>
                    </div>
                    <div className="card-body">
                      <form className="form">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tim-icons icon-single-02" />
                            </div>
                          </div>
                          <input type="text" className="form-control" placeholder="Nombre completo" onChange={this.handleName} />
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tim-icons icon-email-85"></i>
                            </div>
                          </div>
                          <input type="text" placeholder="Email" className="form-control" onChange={this.handleEmail} />
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tim-icons icon-lock-circle"></i>
                            </div>
                          </div>
                          <input type="text" className="form-control" placeholder="Contraseña" onChange={this.handlePassword} />
                        </div>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="tim-icons icon-single-02"></i>
                            </div>
                          </div>
                          <input type="text" className="form-control" placeholder="Nombre Usuario" onChange={this.handleUser} />
                        </div>
                        <select class="custom-select"  onChange={this.handleType}>
                          <option style={{color: "black"}} value="1">Admin</option>
                          <option style={{color: "black"}} value="3">Freelance</option>
                        </select>
                      </form>
                    </div>
                    <FacebookLogin
                      register = {true}
                      text=" Registrarse con Facebook"
                      size="small"
                      css="btn btn-info btn-round btn-lg"

                    />
                    <div className="card-footer">
                      <div id="square1" className="square square-1"></div>
                      <button href="javascript:void(0)" onClick={this.handleSave} className="btn btn-success btn-round btn-lg">Registrarme</button>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
import React, { Component } from 'react';
import axios from 'axios';
import Configuration from '../../Configuration';

class Perfil extends Component {
  constructor() {
    super()
    this.state = { proyect: {} }
    this.handleName = this.handleName.bind(this);
    this.handleMax = this.handleMax.bind(this);
    this.handleMin = this.handleMin.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleProgram = this.handleProgram.bind(this);
    this.setProp = this.setProp.bind(this);
    this.description = this.description.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleName(event) {
    this.setProp('name', event.target.value)
  }
  handleType(event) {
    this.setProp('idStatus', parseInt(event.target.value))
  }
  handleMin(event) {
    this.setProp('priceMin', parseInt(event.target.value))
  }
  handleMax(event) {
    this.setProp('priceMax', parseInt(event.target.value))
  }
  handleProgram(event) {
    this.setProp('idProgrammingLanguage', parseInt(event.target.value))
  }
  handlePayment(event) {
    this.setProp('idTypePayment', parseInt(event.target.value))
  }
  description(event) {
    this.setProp('description', event.target.value)
    this.setProp('idEmployed', 52)
  }

  handleCreate() {
    axios.post(`${Configuration.apiServer}/api_v1/project/insert`, this.state.proyect).then(resp => {
      if (resp.data.success === true) {
        this.setState({proyect: {}})
      }
    })
  }


  setProp(prop, value) {
    let proyect = this.state.proyect;

    proyect[prop] = value;

    this.setState({ proyect: proyect });
  }


  render() {
    console.log(this.state.proyect)
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div class="wrapper">
          <div class="container align-items-center">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <br />
                <h1 class="profile-title text-left">{localStorage.getItem('FreelanceMx:name')}</h1>
              </div>
            </div>
          </div>
          <section class="section">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div class="card card-plain">
                    <div class="card-body">
                      <form>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Nombre</label>
                              <input type="text" class="form-control" onChange={this.handleName} />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Status</label>
                              <select class="custom-select" onChange={this.handleType}>
                                <option style={{ color: "black" }} value="1">Efectivo</option>
                                <option style={{ color: "black" }} value="1">Credito</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Precio Min</label>
                              <input type="text" class="form-control" onChange={this.handleMin} />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Precio Max</label>
                              <input type="text" class="form-control" onChange={this.handleMax} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div class="col-md-6">
                            <select class="custom-select" onChange={this.handleProgram}>
                              <option style={{ color: "black" }} value="1">Java</option>
                              <option style={{ color: "black" }} value="3">Elixir</option>
                            </select>
                          </div>
                          <div class="col-md-6">
                            <select class="custom-select" onChange={this.handlePayment}>
                              <option style={{ color: "black" }} value="1">Efectivo</option>
                              <option style={{ color: "black" }} value="1">Credito</option>
                            </select>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>Descripcion</label>
                              <input type="text" class="form-control" placeholder="Descripcion del pryecto" onChange={this.description} />
                            </div>
                          </div>
                        </div>
                      </form>
                      <button onClick={this.handleCreate} class="btn btn-primary btn-round " >Enviar Proyecto</button>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <img style={{ width: "40%", height: "40%" }} src={localStorage.getItem('FreelanceMx:picture')} class="img-center img-fluid rounded-circle" />
                  <h3 class="profile-title text-left">{localStorage.getItem('FreelanceMx:email')}</h3>

                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    );
  }
}
export default Perfil;
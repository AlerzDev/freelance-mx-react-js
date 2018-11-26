import React, { Component } from 'react';
import axios from 'axios';
import Configuration from '../../Configuration';
import {  Link } from 'react-router-dom';
class Perfil extends Component {
  constructor() {
    super()
    this.state = { proyect: {},programming_language: []
    ,type_pyment: [],session:{} ,projects: []}
    this.handleName = this.handleName.bind(this);
    this.handleMax = this.handleMax.bind(this);
    this.handleMin = this.handleMin.bind(this);
    this.handleType = this.handleType.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.handleProgram = this.handleProgram.bind(this);
    this.setProp = this.setProp.bind(this);
    this.description = this.description.bind(this);
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

  componentDidMount(){
    this.populateSelects();
  }
  populateSelects(){
    let value = localStorage.getItem("user");
      var json = {};
      try {
          json = JSON.parse(value);
          console.log(json)
      } catch (e) {
          console.log(e);
      }
      this.setState({session:json});
      axios.get(`${Configuration.apiServer}/api_v1/project/get-projects-user/`+json.id).then(resp => {
        this.setState({projects: resp.data.items});
     });
    axios.get(`${Configuration.apiServer}/api_v1/type-pyment/get-all`).then(resp => {
        this.setState({type_pyment: resp.data.items});
    });
    axios.get(`${Configuration.apiServer}/api_v1/programming-language/get-all`).then(resp => {
        this.setState({programming_language: resp.data.items});
    });
  }

  handleCreate() {
    this.state.proyect.idStatus = 1;
    axios.post(`${Configuration.apiServer}/api_v1/project/insert?idUser=`+this.state.session.id, this.state.proyect).then(resp => {
      if (resp.data.success === true) {
        this.setState({proyect: {}})
        this.populateSelects();
      }
    })
  }


  setProp(prop, value) {
    let proyect = this.state.proyect;

    proyect[prop] = value;

    this.setState({ proyect: proyect });
  }


  render() {
    const projects = this.state.projects.map(item => {
      return(
          <div key={item.id} className="col-md-4">
          <div className="card bg-info">
             <div className="card-body text-center"  style={{height:300}}>
                  <h3 style={{color:"white"}}>{item.name}</h3>
                            <p style={{color:"white"}}>Descripcion de proyecto:</p> 
                  <p  style={{color:"white"}}>{item.description}</p>

                  <div className="card-stats text-center">
                      <div className="author">
                          <span style={{color:"white"}}>
                              {this.state.programming_language.map(iteml=>{if(iteml.id === item.idProgrammingLanguage){ return (iteml.description)}})}
                          </span>
                      </div>
                      <div className="stats ml-auto">
                           <span style={{color:"white"}}>Presupuesto de ${item.priceMin} a ${item.priceMax}</span>
                      </div>
                      <Link to={"/detaild-project?Id="+item.id} className="btn btn-success btn-round btn-warning">Ver actividades</Link>
                  </div>
             </div>
         </div>
      </div>
      );
  })
    const payments = this.state.type_pyment.map(item => {
      return(
        <option key={item.id} value={item.id}>{item.description}</option>
      );
  })
  const programmings = this.state.programming_language.map(item => {
      return(
        <option key={item.id} value={item.id}>{item.description}</option>
      );
  })
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <div className="wrapper">
          <div className="container align-items-center">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <br />
                <h1 className="profile-title text-left">{localStorage.getItem('FreelanceMx:name')}</h1>
              </div>
            </div>
          </div>
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="card card-plain">
                    <div className="card-body">
                      <h3 style={{color:"white"}}>Crea un nuevo proyecto</h3>
                      <form>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Nombre</label>
                              <input type="text" className="form-control" onChange={this.handleName} />
                            </div>
                          </div>
                          
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Presupuesto Min</label>
                              <input type="text" className="form-control" onChange={this.handleMin} />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Presupuesto Max</label>
                              <input type="text" className="form-control" onChange={this.handleMax} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                          <label>Tecnologia a implementar</label>
                            <select className="custom-select"  style={{color:"#fd5d93"}} onChange={this.handleProgram}>
                            {programmings}
                            </select>
                          </div>
                          <div className="col-md-6">
                          <label>Tipo de pago</label>
                            <select className="custom-select"  style={{color:"#fd5d93"}} onChange={this.handlePayment}>
                            {payments}
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label>Descripcion</label>
                              <input type="text" className="form-control" placeholder="Descripcion del pryecto" onChange={this.description} />
                            </div>
                          </div>
                        </div>
                      </form>
                      <button onClick={this.props.handleLogout} className="btn btn-primary btn-round " >Enviar Proyecto</button>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 text-center">
                  <img style={{ width: "40%", height: "40%" }} src="https://picsum.photos/g/200/300" className="img-center img-fluid rounded-circle" />
                  <h4 style={{color:"white",marginTop:20}} className="profile-title">{this.state.session.username}</h4>
                  <h4 style={{color:"white"}} className="profile-title">{this.state.session.email}</h4>
                  <Link to={"/"} onClick={this.props.handleLogout} className="btn btn-danger">Cerrar sesión</Link>
                </div>
                
              </div> <div className="container">
              <h3 style={{color:"white"}}>Mis proyectos</h3>
              <div className="row">
                            {projects}
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
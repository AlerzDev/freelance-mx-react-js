import React, { Component } from 'react';
import axios from 'axios';
import Configuration from '../../Configuration';
import {  Link } from 'react-router-dom';

class Proyects extends Component {
    constructor(props){
        super(props);
        this.state = {
            programming_language: []
            ,type_pyment: []
            ,projects: []
            ,aux_projects: []
        };
    }
    componentDidMount(){
        this.populateSelects();
    }
    populateSelects(){
        axios.get(`${Configuration.apiServer}/api_v1/type-pyment/get-all`).then(resp => {
            this.setState({type_pyment: resp.data.items});
        });
        axios.get(`${Configuration.apiServer}/api_v1/programming-language/get-all`).then(resp => {
            this.setState({programming_language: resp.data.items});
        });
        axios.get(`${Configuration.apiServer}/api_v1/project/get-where?max=2000&where=a.idStatus=1&orderBy=a.name`).then(resp => {
            this.setState({projects: resp.data.items});
            this.setState({aux_projects: resp.data.items});
        });
    }
    onChangeSelectLanguage = (event) => {
        var id = event.target.value;
        if(id == 0){
            this.setState({projects: this.state.aux_projects});
        }else{
            this.setState({projects: []});
            var newItems = [];
            this.state.aux_projects.map(item=>{
                if(item.idProgrammingLanguage == id){
                    newItems.push(item);
                }
            });
            this.setState({projects: newItems});
        }
    }
    onChangeSelectPayment = (event) => {
        var id = event.target.value;
        if(id == 0){
            this.setState({projects: this.state.aux_projects});
        }else{
            this.setState({projects: []});
            var newItems = [];
            this.state.aux_projects.map(item=>{
                if(item.idTypePayment == id){
                    newItems.push(item);
                }
            });
            this.setState({projects: newItems});
        }
    }
    render() {
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
        const projects = this.state.projects.map(item => {
            return(
                <div key={item.id} className="col-md-12">
                <div className="card bg-info">
                   <div className="card-body">
                        <h3 style={{color:"white"}}>{item.name}</h3>
                                   Descripcion de proyecto:
                        <p>{item.description}</p>

                        <div className="card-stats">
                            <div className="author">
                                <span>
                                    {this.state.programming_language.map(iteml=>{if(iteml.id === item.idProgrammingLanguage){ return (iteml.description)}})}
                                </span>
                            </div>
                            <div className="stats ml-auto">
                                 Presupuesto de ${item.priceMin} a ${item.priceMax}
                            </div>
                            <Link to={"/detaild-project?Id="+item.id} className="btn btn-success btn-round btn-warning">Ver mas detalles</Link>
                        </div>
                   </div>
               </div>
            </div>
            );
        })
        return (
        <div className="wrapper">
            <div className="page-header" style={{maxHeight:9999999}}>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Proyecto en:</label>
                                        <select onChange={this.onChangeSelectLanguage} style={{color:"#fd5d93"}} className="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect1">
                                            <option value={0}>Todos</option>
                                            {programmings}
                                        </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Forma de pago:</label>
                                    <select onChange={this.onChangeSelectPayment} style={{color:"#fd5d93"}} className="form-control selectpicker" data-style="btn btn-link" id="exampleFormControlSelect1">
                                        <option value={0}>Todos</option>
                                        {payments}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {projects}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Proyects;
import React, { Component } from 'react';
import * as qs from 'query-string';
import axios from 'axios';
import Configuration from '../../Configuration';

class Proyects extends Component {
    constructor(props){
        super(props);
        var id = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        this.state = {
            idProject : id.Id,
            project : {},
            user : {},
            offers:[]
        };
    }
    componentDidMount(){
        this.getProject(this.state.idProject);
    }
    getProject(id)
    {
        axios.get(`${Configuration.apiServer}/api_v1/project/get-by-id/`+id).then(resp => {
            this.setState({project: resp.data.item});
        });
        axios.get(`${Configuration.apiServer}/api_v1/project/user-project/`+id).then(resp => {
            axios.get(`${Configuration.apiServer}/api_v1/users/get-by-id/`+resp.data.idUser).then(resp => {
                this.setState({user: resp.data.item});
            });
        });
        axios.get(`${Configuration.apiServer}/api_v1/offers/get-offer-project?max=20&where=a.idProject=`+id).then(resp => {
            var items = [];
            resp.data.map(item=>{
                axios.get(`${Configuration.apiServer}/api_v1/offers/get-by-id/`+item.idOffer).then(resp => {
                    var offer = resp.data.item;
                    axios.get(`${Configuration.apiServer}/api_v1/users/get-by-id/`+offer.idUser).then(respUser => {
                        console.log(respUser)
                        offer.user = respUser.data.item;
                    });
                    console.log(offer)
                    items.push(offer);
                });
            });
            setTimeout(() => {
                this.setState({
                clicked: false
              })
            }, 1000);
            this.setState({offers: items}); 
        });
    }
    render() {
        const listOffers = this.state.offers.map(item=>{
            return(
                <div key={item.id}  className="row">
                    <div className="col-md-12 ml-auto mr-auto">
                        <div className="card card-coin card-plain">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 text-left">
                                        <strong>Oferta del usuario </strong>{item.user.username}
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <strong>Oferta monetaria: </strong> ${item.price}
                                    </div>
                                </div>
                                <br/>
                                <div className="row">
                                    <div className="col-md-12">
                                        <strong>Descripción</strong><br/> {item.textCommentary}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        })
        return (
        <div key={"id"} className="wrapper">
            <div className="page-header" style={{maxHeight:9999999}}>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-left">
                                <h1 style={{color:"white"}}>{this.state.project.name}</h1>
                            </div>
                            <div className="col-md-6 text-right">
                                 <h1 style={{color:"white"}}> Presupuesto de ${this.state.project.priceMin}-${this.state.project.priceMax}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-register">
                                    <div className="card-header">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h4 style={{marginTop:20}}>Descripción</h4>
                                                    <span>{this.state.project.description}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h4 style={{marginTop:20}}>Tecnología a implementar</h4>
                                                    <span>{this.state.project.description}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12" style={{marginTop:20}}>
                                                    <h4>Acerca del administrador del proyecto</h4>
                                                    <span>Usuario: {this.state.user.username}</span> <br></br>
                                                    <span>Email: {this.state.user.email}</span>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12" style={{marginTop:20}}>
                                                    <span ><strong>Id del Proyecto:</strong> #{this.state.project.id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <h3><span>Envia tu oferta para postularte</span></h3>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlInput1">Tu oferta de pago</label>
                                                <input  className="form-control" id="exampleFormControlInput1" placeholder="$"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleFormControlTextarea1">Describe porque eres el indicado</label>
                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                            <div className="col-md-12 text-center">
                                                <button className="btn btn-success">Enviar oferta</button>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card card-register">
                                    <div className="card-header">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <h3 style={{marginTop:20}}>Ofertas</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        {listOffers}
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

export default Proyects;
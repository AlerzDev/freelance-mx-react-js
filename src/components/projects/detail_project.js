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
            proyect : {}
        };
        
    }
    componentDidMount(){
        this.getProject(this.state.idProject);
    }
    getProject(id)
    {
        axios.get(`${Configuration.apiServer}/api_v1/project/get-by-id/`+id).then(resp => {
            console.log(resp.data.item)
            this.setState({project: resp.data.item});
        });
    }
    render() {
        
        return (
        <div className="wrapper">
            asdasdsa 
        </div>
    );
  }
}

export default Proyects;
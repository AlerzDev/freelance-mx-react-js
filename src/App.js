import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import LProyects from './components/projects/projects';
import Proyects from './components/projects/projects';

class App extends Component {
  acction(){

  }
  render() {
    return (
      <Router>
        <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-transparent " color-on-scroll="100">
        <div className="container">
      <div className="navbar-translate">
        <Link className="navbar-brand" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom" to={"#"}>
          <span>Freelance•</span>MX
        </Link>
        <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse justify-content-end" id="navigation">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <Link to={"#"}>
                Freelance•MX
              </Link>
            </div>
            <div className="col-6 collapse-close text-right">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <i className="tim-icons icon-simple-remove"></i>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item p-0">
            <Link className="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" to={"#"}>
              <i className="fab fa-twitter"></i>
              <p className="d-lg-none d-xl-none">Twitter</p>
            </Link>
          </li>
          <li className="nav-item p-0">
            <Link className="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom" to={"#"}>
              <i className="fab fa-facebook-square"></i>
              <p className="d-lg-none d-xl-none">Facebook</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
               Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
               Iniciar sesión / Registrate
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/proyects"} className="nav-link">
               Proyectos
            </Link>
          </li>
        </ul>
        
      </div>
    </div>
        </nav>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/proyects' component={Proyects} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

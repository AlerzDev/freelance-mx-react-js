import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="wrapper">
      <div className="page-header">
        <div className="page-header-image"></div>
        <div className="content">
          <div className="container">
            <div className="row">

              <div className="col-lg-5 col-md-5 offset-lg-0 offset-md-2">
                <div id="square7" className="square square-7"></div>
                <div id="square8" className="square square-8"></div>
                <div className="card card-register">
                  <div className="card-header">
                    <img className="card-img" src="assets/img/square1.png" alt="Cards"/>
                    <h6 className="card-title" style={{color:"white"}}>Iniciar sesión</h6>
                  </div>
                  <div className="card-body">
                    <form className="form">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tim-icons icon-single-02"/>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Full Name"/>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tim-icons icon-email-85"></i>
                          </div>
                        </div>
                        <input type="text" placeholder="Email" className="form-control"/>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tim-icons icon-lock-circle"></i>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Password"/>
                      </div>
                      
                    </form>
                  </div>
                  <div className="card-footer">
                  <div id="square1" className="square square-1"></div>
                    <a href="javascript:void(0)" className="btn btn-primary btn-round btn-lg">Ingresar</a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 offset-lg-2 offset-md-4">
                <div id="square7" className="square square-7"></div>
                <div id="square8" className="square square-8"></div>
                <div className="card card-register">
                  <div className="card-header">
                    <img className="card-img" src="assets/img/square1.png" alt="Cards"/>
                    <h6 className="card-title" style={{color:"white"}}>registrate</h6>
                  </div>
                  <div className="card-body">
                    <form className="form">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tim-icons icon-single-02"/>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Full Name"/>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tim-icons icon-email-85"></i>
                          </div>
                        </div>
                        <input type="text" placeholder="Email" className="form-control"/>
                      </div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <i className="tim-icons icon-lock-circle"></i>
                          </div>
                        </div>
                        <input type="text" className="form-control" placeholder="Password"/>
                      </div>
                      <div className="form-check text-left">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox"/>
                          <span className="form-check-sign"></span>
                          Acepto los
                          <a href="javascript:void(0)"> terminos y condiciones</a>.
                        </label>
                      </div>
                    </form>
                  </div>
                  <div className="card-footer">
                  <div id="square1" className="square square-1"></div>
                    <a href="javascript:void(0)" className="btn btn-success btn-round btn-lg">Registrarme</a>
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
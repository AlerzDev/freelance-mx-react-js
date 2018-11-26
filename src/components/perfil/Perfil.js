import React, { Component } from 'react';

class Perfil extends Component {
  constructor() {
    super()

  }

  render() {
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
                              <input type="text" class="form-control" value="Mike" />
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>Email </label>
                              <input type="email" class="form-control" placeholder="mike@email.com" />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>Message</label>
                              <input type="text" class="form-control" placeholder="Hello there!" />
                            </div>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-round float-right" rel="tooltip" data-original-title="Can't wait for your message" data-placement="right">Editar</button>
                      </form>
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
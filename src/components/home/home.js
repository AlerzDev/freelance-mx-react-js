import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="page-header">
          <img src="assets/img/blob.png" className="path" alt="blol"/>
          <img src="assets/img/path2.png" className="path2" alt="blol"/>
          <img src="assets/img/triunghiuri.png" className="shapes triangle" alt="blol"/>
          <img src="assets/img/waves.png" className="shapes wave" alt="blol"/>
          <img src="assets/img/patrat.png" className="shapes squares" alt="blol"/>
          <img src="assets/img/cercuri.png" className="shapes circle" alt="blol"/>
          <div className="content-center">
          <div className="row row-grid justify-content-between align-items-center text-left">
            <div className="col-lg-6 col-md-6">
                <h1 className="text-white">¡Un ejército de freelancers disponibles en todo momento!
                </h1>
                <p className="text-white mb-3">Los profesionales aplican a los trabajos freelance que se ajusten a sus habilidades, envían sus propuestas y compiten entre sí.</p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">Más información</p>
                  <a href="#blk" className="btn btn-success btn-link btn-sm"><i className="tim-icons icon-minimal-right"></i></a>
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <button href="javascript:void(0)" className="btn btn-icon btn-simple btn-round btn-neutral">
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button href="javascript:void(0)" className="btn btn-icon btn-simple btn-round btn-neutral">
                      <i className="fab fa-facebook"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 text-center">
                <h1 style={{fontSize:60}}><span>Freelance•</span>MX</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="section section-lg">
        
      <div className="container">
          <img src="assets/img/triunghiuri.png" className="shapes triangle" alt="blol"/>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <h1 className="text-center">Unete a esta gran comunidad</h1>
            <div className="row row-grid justify-content-center">
              <div className="col-lg-3">
                <div className="info">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-money-coins"></i>
                  </div>
                  <h4 className="info-title">Seleccionas la propuesta más conveniente</h4>
                  <hr className="line-primary"/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="info">
                  <div className="icon icon-warning">
                    <i className="tim-icons icon-chart-pie-36"></i>
                  </div>
                  <h4 className="info-title">Pagas y liberas los fondos una vez que estes 100% conforme con el trabajo realizado</h4>
                  <hr className="line-warning"/>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="info">
                  <div className="icon icon-success">
                    <i className="tim-icons icon-single-02"></i>
                  </div>
                  <h4 className="info-title">Una vez publicado tu proyecto te contactarán Freelancers interesados</h4>
                  <hr className="line-success"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="section section-lg section-safe">
      <img src="../assets/img/path5.png" class="path"/>
      <div class="container">
        <div class="row row-grid justify-content-between">
          <div class="col-md-5">
            <img src="../assets/img/chester-wade.jpg" class="img-fluid floating"/>
            <div class="card card-stats bg-danger">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Gratis</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-stats bg-info">
              <div class="card-body">
                <div class="justify-content-center">
                  <div class="numbers">
                    <p class="card-title">100%</p>
                    <p class="card-category text-white">Seguro</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div class="col-md-6">
            <div class="px-md-5">
              <hr class="line-success"/>
              <h3>Es muy fácil concretar tus ideas hoy mismo</h3>
              <p>Año a año cada vez más empresas llevan a cabo sus actividades con la ayuda de un Freelancer</p>
              <ul class="list-unstyled mt-5">
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-success mb-2">
                      <i class="tim-icons icon-vector"></i>
                    </div>
                    <div class="ml-3">
                      <h6>Diseñadores expertos</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-success mb-2">
                      <i class="tim-icons icon-tap-02"></i>
                    </div>
                    <div class="ml-3">
                      <h6>Lanza tu App</h6>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="d-flex align-items-center">
                    <div class="icon icon-success mb-2">
                      <i class="tim-icons icon-single-02"></i>
                    </div>
                    <div class="ml-3">
                      <h6>Redactores y Traductores</h6>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
      </div>
    );
  }
}

export default Home;
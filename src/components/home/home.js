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
          <div class="content-center">
          <div class="row row-grid justify-content-between align-items-center text-left">
            <div class="col-lg-6 col-md-6">
              <h1 class="text-white">We keep your coin
                <br/>
                <span class="text-white">secured</span>
              </h1>
              <p class="text-white mb-3">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel...</p>
              <div class="btn-wrapper mb-3">
                <p class="category text-success d-inline">From 9.99%/mo</p>
                <a href="#blk" class="btn btn-success btn-link btn-sm"><i class="tim-icons icon-minimal-right"></i></a>
              </div>
              <div class="btn-wrapper">
                <div class="button-container">
                  <button href="javascript:void(0)" class="btn btn-icon btn-simple btn-round btn-neutral">
                    <i class="fab fa-twitter"></i>
                  </button>
                  <button href="javascript:void(0)" class="btn btn-icon btn-simple btn-round btn-neutral">
                    <i class="fab fa-dribbble"></i>
                  </button>
                  <button href="javascript:void(0)" class="btn btn-icon btn-simple btn-round btn-neutral">
                    <i class="fab fa-facebook"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-5">
              <h1 ><span>Freelance•</span>MX</h1>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
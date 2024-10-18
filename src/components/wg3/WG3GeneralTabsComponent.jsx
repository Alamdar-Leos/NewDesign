import React, { useState } from "react";
import { Link } from 'react-router-dom';


const WG3GeneralTabsComponent = () => {

  return (
    <>
      <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
        {/* Exteriors Tab Section Start */}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="exteriors-tab"
            data-bs-toggle="tab"
            data-bs-target="#exteriors"
            type="button"
            role="tab"
            aria-controls="exteriors"
            aria-selected="true"
          >
            EXTERIORS 
          </button>
        </li>
        {/* Exteriors Tab Section End */}
        
        {/* Interiors Tab Section Start */}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="interiors-tab"
            data-bs-toggle="tab"
            data-bs-target="#interiors"
            type="button"
            role="tab"
            aria-controls="interiors"
            aria-selected="false"
          >
            INTERIORS
          </button>
        </li>
        {/* Interiors Tab Section End */}

        {/* Amenities Tab Section Start */}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="amenities-tab"
            data-bs-toggle="tab"
            data-bs-target="#amenities"
            type="button"
            role="tab"
            aria-controls="amenities"
            aria-selected="false"
          >
            AMENITIES
          </button>
        </li>
        {/* Amenities Tab Section Start */}

        {/* Location Tab Section Start */}
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="location-tab"
            data-bs-toggle="tab"
            data-bs-target="#location"
            type="button"
            role="tab"
            aria-controls="location"
            aria-selected="false"
          >
            LOCATION
          </button>
        </li>
        {/* Location Tab Section End */}

        {/* Floor Plans Section Start */}
        <li className="nav-item dropdown" role="presentation">
          <button
              className="nav-link dropdown-toggle"
              id="contact-tab"
              data-bs-toggle="dropdown"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false">
              FLOOR PLANS
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
              className="nav-link"
              id="studio-type1-tab"
              data-bs-toggle="tab"
              data-bs-target="#studio-type1"
              type="button"
              role="tab"
              aria-controls="studio-type1"
              aria-selected="true">
              Studio Type 01
            </button>
            </li>
            <li>
              <button
              className="nav-link"
              id="studio-type2-tab"
              data-bs-toggle="tab"
              data-bs-target="#studio-type2"
              type="button"
              role="tab"
              aria-controls="studio-type2"
              aria-selected="false">
              Studio Type 02
            </button>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">1 BR Type 01</a> */}
              <button
              className="nav-link"
              id="1br-type1-tab"
              data-bs-toggle="tab"
              data-bs-target="#1br-type1"
              type="button"
              role="tab"
              aria-controls="1br-type1"
              aria-selected="false"
            >
              1 BR Type 01
            </button>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">1 BR Type 01</a> */}
              <button
              className="nav-link"
              id="1br-type2-tab"
              data-bs-toggle="tab"
              data-bs-target="#1br-type2"
              type="button"
              role="tab"
              aria-controls="1br-type2"
              aria-selected="false"
            >
              1 BR Type 02
            </button>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">3 BR Type 01</a> */}
              <button
              className="nav-link"
              id="3br-type1-tab"
              data-bs-toggle="tab"
              data-bs-target="#3br-type1"
              type="button"
              role="tab"
              aria-controls="3br-type1"
              aria-selected="false"
            >
              3 BR Type 01
            </button>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">3 BR Type 02</a> */}
              <button
              className="nav-link"
              id="3br-type2-tab"
              data-bs-toggle="tab"
              data-bs-target="#3br-type2"
              type="button"
              role="tab"
              aria-controls="3br-type2"
              aria-selected="false">
              3 BR Type 02
              </button>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">3 BR Type 03</a> */}
              <button
              className="nav-link"
              id="3br-type3-tab"
              data-bs-toggle="tab"
              data-bs-target="#3br-type3"
              type="button"
              role="tab"
              aria-controls="3br-type3"
              aria-selected="false">
              3 BR Type 03
              </button>
            </li>
            <li>
              {/* <a className="dropdown-item" href="#">3 BR Type 04</a> */}
              <button
              className="nav-link"
              id="3br-type04-tab"
              data-bs-toggle="tab"
              data-bs-target="#3br-type4"
              type="button"
              role="tab"
              aria-controls="3br-type4"
              aria-selected="false"
            >
              3 BR Type 04
            </button>
            </li>
          </ul>
        </li>
        {/* Floor Plans Section End */}

        {/* Our Stories Section Start */}
        <li className="nav-item dropdown" role="presentation">
          <button
              className="nav-link dropdown-toggle"
              id="contact-tab"
              data-bs-toggle="dropdown"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false">
              OUR STORIES
          </button>
          <ul className="dropdown-menu">
          <li>
            <a 
              href="#small-dialog1" 
              className="popup-with-zoom-anim play-view d-block mt-md-5 mt-4">
              <span className="fa fa-play"></span> 1st Video
            </a>
            <div id="small-dialog1" className="zoom-anim-dialog mfp-hide">
              <iframe 
                src="https://www.youtube.com/embed/WLmXBuS1UHQ?si=XGU8ElyrZXiXpB99" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          </li>

          </ul>
        </li>
        {/* Our Stories Section End */}

        {/* Our Brochures Section Start */}
        <li className="nav-item dropdown" role="presentation">
          <button
              className="nav-link dropdown-toggle"
              id="contact-tab"
              data-bs-toggle="dropdown"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false">
              OUR BROCHURES
          </button>
          <ul className="dropdown-menu">
          <li>
            <a href="../assets/brochures/wg3/WG3_English.pdf" className="mr-2 mb-3 d-block" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-file"></i> English
            </a>
            <a href="../assets/brochures/wg3/WG3_Arabic.pdf" className="mr-2 mb-3 d-block" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-eye"></i> Arabic
            </a>
            <a href="../assets/brochures/wg3/WG3_Russian.pdf" className="mr-2 mb-3 d-block" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-eye"></i> Russian
            </a>
            <a href="../assets/brochures/wg3/WG3_French.pdf" className="mr-2 mb-3 d-block" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-eye"></i> French
            </a>
            <a href="../assets/brochures/wg3/WG3_Mandarin.pdf" className="mr-2 mb-3 d-block" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-eye"></i> Mandarin
            </a>
          </li>
          </ul>
        </li>
        {/* Our Brochures Section End */}

        {/* Amenities Section Start */}
        <li className="nav-item dropdown" role="presentation">
          <button
              className="nav-link dropdown-toggle"
              id="contact-tab"
              data-bs-toggle="dropdown"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false">
              AMENITIES
          </button>
          <ul className="dropdown-menu">
            <li>
            <button
              className="nav-link"
              id="building-amenities-tab"
              data-bs-toggle="tab"
              data-bs-target="#building-amenities"
              type="button"
              role="tab"
              aria-controls="building-amenities"
              aria-selected="true">
              Building Amenities
            </button>
            </li>
            <li>
            <button
              className="nav-link"
              id="community-amenities-tab"
              data-bs-toggle="tab"
              data-bs-target="#community-amenities"
              type="button"
              role="tab"
              aria-controls="community-amenities"
              aria-selected="true">
              Community Amenities
            </button>
            </li>
          </ul>
        </li>
        {/* Amenities Section End */}

      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="exteriors"
          role="tabpanel"
          aria-labelledby="exteriors-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/exterior/1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/exterior/2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="interiors"
          role="tabpanel"
          aria-labelledby="interiors-tab"
        >
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/3.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/4.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/5.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/6.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/interior/7.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="amenities"
          role="tabpanel"
          aria-labelledby="amenities-tab"
        >
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/3.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/4.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/5.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/6.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/7.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/8.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/9.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/10.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/11.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/amenities/12.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="location"
          role="tabpanel"
          aria-labelledby="location-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="card">
                <img
                  src="../assets/images/wg3/wg3-location.jpg"
                  className="img-fluid radius-image"
                  alt="image"
                />
              </div>
              
              {/* <div className="agent-map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" frameborder="0" style={{ border: '0' }} allowfullscreen=""></iframe>
              </div> */}
            </div>
          </div>
        </div>
        {/* Floor Plans Start */}
        <div
          className="tab-pane fade"
          id="studio-type1"
          role="tabpanel"
          aria-labelledby="studio-type1-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/studio-1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="studio-type2"
          role="tabpanel"
          aria-labelledby="studio-type2-tab"
        >
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/studio-2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="1br-type1"
          role="tabpanel"
          aria-labelledby="1br-type1-tab"
        >
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/1br-01.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="1br-type2"
          role="tabpanel"
          aria-labelledby="1br-type2-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/1br-02.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="3br-type1"
          role="tabpanel"
          aria-labelledby="3br-type1-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/3br-01.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="3br-type2"
          role="tabpanel"
          aria-labelledby="3br-type2-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/3br-02.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="3br-type3"
          role="tabpanel"
          aria-labelledby="3br-type3-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/3br-03.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="3br-type4"
          role="tabpanel"
          aria-labelledby="3br-type4-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="../assets/images/wg3/floor-plan/3br-04.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Floor Plans End */}
        <div className="tab-pane fade">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="single-bg-white">
                <ul className="details-list row">
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Air Conditioning" className="icon-img" />
                        <p>Air Conditioning</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Built-In Wardrobes" className="icon-img" />
                        <p>Built-In Wardrobes</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Dishwasher" className="icon-img" />
                        <p>Dishwasher</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Floor Coverings" className="icon-img" />
                        <p>Floor Coverings</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Medical / Clinic" className="icon-img" />
                        <p>Medical / Clinic</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Fencing" className="icon-img" />
                        <p>Fencing</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Internet and wifi" className="icon-img" />
                        <p>Internet and wifi</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="community-amenities"
          role="tabpanel"
          aria-labelledby="community-amenities-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="single-bg-white">
                <ul className="details-list row">
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Air Conditioning" className="icon-img" />
                        <p>Air Conditioning</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Built-In Wardrobes" className="icon-img" />
                        <p>Built-In Wardrobes</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Dishwasher" className="icon-img" />
                        <p>Dishwasher</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Floor Coverings" className="icon-img" />
                        <p>Floor Coverings</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Medical / Clinic" className="icon-img" />
                        <p>Medical / Clinic</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Fencing" className="icon-img" />
                        <p>Fencing</p>
                    </li>
                    <li className="col-md-4 text-center icon-box">
                        <img src="../assets/images/amenities-01.png" alt="Internet and wifi" className="icon-img" />
                        <p>Internet and wifi</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default WG3GeneralTabsComponent;

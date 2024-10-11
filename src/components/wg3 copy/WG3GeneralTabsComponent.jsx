import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const WG3GeneralTabsComponent = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
          >
            EXTERIORS 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            INTERIORS
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#contact"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            AMENITIES
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="location-tab"
            data-bs-toggle="tab"
            data-bs-target="#location"
            type="button"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
          >
            LOCATION
          </button>
        </li>
        <li className="nav-item" role="presentation">
        <div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
    <div class="dropdown-divider"></div>
    <a class="dropdown-item" href="#">Separated link</a>
  </div>
</div>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab">
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p3.jpg"
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
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p3.jpg"
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
          id="contact"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="single-post-image mb-5">
            <div className="owl-blog owl-carousel owl-theme">
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p1.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p2.jpg"
                    className="img-fluid radius-image"
                    alt="image"
                  />
                </div>
              </div>
              <div className="item">
                <div className="card">
                  <img
                    src="/assets/images/p3.jpg"
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
          id="location-tab"
          role="tabpanel"
          aria-labelledby="location">
            <div className="single-post-image mb-5">
              <div className="owl-blog owl-carousel owl-theme">
                <div className="item">
                  <div className="card">
                    <div className="agent-map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2895687731!2d-74.26055986835598!3d40.697668402590374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1562582305883!5m2!1sen!2sin" frameborder="0" style={{ border: '0' }} allowfullscreen=""></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      
    </>
  );
};

export default WG3GeneralTabsComponent;

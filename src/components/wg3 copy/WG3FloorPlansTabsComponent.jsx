import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const WG3FloorPlansTabsComponent = () => {
  return (
    <>
      <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="studio-type1-tab"
            data-bs-toggle="tab"
            data-bs-target="#studio-type1"
            type="button"
            role="tab"
            aria-controls="studio-type1"
            aria-selected="true"
          >
            Studio Type 01 
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="studio-type2-tab"
            data-bs-toggle="tab"
            data-bs-target="#studio-type2"
            type="button"
            role="tab"
            aria-controls="studio-type2"
            aria-selected="false"
          >
            Studio Type 02
          </button>
        </li>
        <li className="nav-item" role="presentation">
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
        <li className="nav-item" role="presentation">
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
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="2br-type1-tab"
            data-bs-toggle="tab"
            data-bs-target="#2br-type1"
            type="button"
            role="tab"
            aria-controls="2br-type1"
            aria-selected="false"
          >
            2 BR Type 01
          </button>
        </li>
        <li className="nav-item" role="presentation">
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
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="3br-type2-tab"
            data-bs-toggle="tab"
            data-bs-target="#3br-type2"
            type="button"
            role="tab"
            aria-controls="3br-type2"
            aria-selected="false"
          >
            3 BR Type 02
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="3br-type3-tab"
            data-bs-toggle="tab"
            data-bs-target="#3br-type3"
            type="button"
            role="tab"
            aria-controls="3br-type3"
            aria-selected="false"
          >
            3 BR Type 03
          </button>
        </li>
        <li className="nav-item" role="presentation">
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

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="studio-type1"
          role="tabpanel"
          aria-labelledby="studio-type1-tab">
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
          id="studio-type2"
          role="tabpanel"
          aria-labelledby="studio-type2-tab"
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
          id="1br-type1"
          role="tabpanel"
          aria-labelledby="1br-type1-tab"
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
          id="1br-type2"
          role="tabpanel"
          aria-labelledby="1br-type2-tab"
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
          id="2br-type1"
          role="tabpanel"
          aria-labelledby="2br-type1-tab"
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
          id="2br-type2"
          role="tabpanel"
          aria-labelledby="2br-type2-tab"
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
          id="3br-type1"
          role="tabpanel"
          aria-labelledby="3br-type1-tab"
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
          id="3br-type2"
          role="tabpanel"
          aria-labelledby="3br-type2-tab"
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
          id="3br-type3"
          role="tabpanel"
          aria-labelledby="3br-type3-tab"
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
          id="3br-type4"
          role="tabpanel"
          aria-labelledby="3br-type4-tab">
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
      </div>
    </>
  );
};

export default WG3FloorPlansTabsComponent;

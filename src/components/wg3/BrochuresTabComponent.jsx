import React, { useState } from "react";

const Brochures = () => {
  const [showModal, setShowModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const openModal = (url) => {
    setPdfUrl(url);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setPdfUrl("");
  };

  return (
    <>
      {/* Our Brochures Section Start */}
      <li className="nav-item dropdown" role="presentation">
        <button
          className="nav-link dropdown-toggle"
          id="contact-tab"
          data-bs-toggle="dropdown"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          OUR BROCHURES
        </button>
        <ul className="dropdown-menu">
          <li>
            <button
              className="mr-2 mb-3 d-block btn btn-link"
              onClick={() =>
                openModal("../assets/brochures/wg3/WG3_English.pdf")
              }
            >
              <i className="fas fa-file"></i> English
            </button>
            <button
              className="mr-2 mb-3 d-block btn btn-link"
              onClick={() =>
                openModal("../assets/brochures/wg3/WG3_Arabic.pdf")
              }
            >
              <i className="fas fa-eye"></i> Arabic
            </button>
            <button
              className="mr-2 mb-3 d-block btn btn-link"
              onClick={() =>
                openModal("../assets/brochures/wg3/WG3_Russian.pdf")
              }
            >
              <i className="fas fa-eye"></i> Russian
            </button>
            <button
              className="mr-2 mb-3 d-block btn btn-link"
              onClick={() =>
                openModal("../assets/brochures/wg3/WG3_French.pdf")
              }
            >
              <i className="fas fa-eye"></i> French
            </button>
            <button
              className="mr-2 mb-3 d-block btn btn-link"
              onClick={() =>
                openModal("../assets/brochures/wg3/WG3_Mandarin.pdf")
              }
            >
              <i className="fas fa-eye"></i> Mandarin
            </button>
          </li>
        </ul>
      </li>
      {/* Our Brochures Section End */}

      {/* Modal to show PDF */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">PDF Viewer</h5>
                <button
                  type="button"
                  className="close"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <iframe
                  src={pdfUrl}
                  style={{ width: "100%", height: "500px" }}
                  title="PDF Viewer"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Brochures;

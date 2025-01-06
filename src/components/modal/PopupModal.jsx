// PopupModel.jsx
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopupModal = ({ show, onHide, title, contentType, file }) => {
    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <Modal show={show} onHide={onHide} centered dialogClassName="custom-modal-80">
            <Modal.Header closeButton className="justify-content-center bg-color">
                <Modal.Title className="w-100 text-center text-uppercase">{title || 'NA'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {contentType === 'brochure' && file ? (
                    <>
                        <iframe
                            src={file}
                            width="100%"
                            height="600px"
                            title={`${title} Brochure`}
                            style={{ border: 'none' }}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                document.getElementById('brochure-download').style.display = 'block';
                            }}
                        />
                        <a
                            id="brochure-download"
                            href={file}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-none text-center"
                            style={{ marginTop: '20px', display: 'none' }}
                        >
                            Download Brochure
                        </a>
                    </>
                ) : (
                    <p>No brochure available.</p>
                )}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
};

export default PopupModal;

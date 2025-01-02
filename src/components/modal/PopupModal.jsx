// PopupModel.js
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
                {contentType === 'brochure' && file && (
                    <iframe
                        src={file}
                        width="100%"
                        height="600px"
                        title={`${title} Brochure`}
                        style={{ border: 'none' }}
                    />
                )}
                {/* {contentType === 'unitDetails' && selectedUnit && (
                    <div className="row">
                        <div className="col-12 col-md-7">
                            <div className="image-container">
                                <img
                                    src={selectedUnit.image || '../assets/images/2d-floor.png'}
                                    alt={selectedUnit.Product_Name}
                                    className="img-fluid rounded"
                                />
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="unit-detail-card">
                                <h3 className="text-center mb-4">{selectedUnit.Product_Name || 'NA'}</h3>
                                <table className="table table-striped table-bordered">
                                    <tbody>
                                        <tr>
                                            <th className="text-start">Unit Type</th>
                                            <td className="text-end">{selectedUnit.Unit_Type || 'NA'}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Availability</th>
                                            <td className="text-end" style={{ color: selectedUnit.Product_Active ? 'green' : 'red' }}>
                                                {selectedUnit.Product_Active ? 'Available' : 'Not Available'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">View</th>
                                            <td className="text-end">{selectedUnit.View || 'NA'}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Floor</th>
                                            <td className="text-end">{selectedUnit.Floor || 'NA'}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Bedroom Type</th>
                                            <td className="text-end">{selectedUnit.Unit_Type || 'NA'}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Balcony Size</th>
                                            <td className="text-end">{selectedUnit.Balcony_Area_Sq_ft ? `${selectedUnit.Balcony_Area_Sq_ft} sq ft` : 'NA'}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Total Area</th>
                                            <td className="text-end">{selectedUnit.Total_Area_Sq_ft ? `${selectedUnit.Total_Area_Sq_ft} sq ft` : 'NA'}</td>
                                        </tr>
                                        <tr>
                                            <th className="text-start">Price</th>
                                            <td className="text-end">{selectedUnit.Unit_Price ? `AED ${formatPrice(selectedUnit.Unit_Price)}` : 'NA'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )} */}
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="primary" onClick={onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
};

export default PopupModal;
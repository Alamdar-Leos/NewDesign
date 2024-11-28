import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SingleProjectTabs.css';
import { useParams } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap/';
import PopupModal from '../modal/PopupModal.jsx';


import { AvailableUnitsAPI } from '../../services/API.jsx';
import {fetchProjectsAPI} from '../../services/API.jsx';
import { fetchProjectMediaFilesAPI } from '../../services/API.jsx';
import { paymentPlanAPI } from '../../services/API.jsx';

const SingleProjectTabs = () => {
    // Tab and Dropdown States
    const [activeTab, setActiveTab] = useState('exteriors-tab');
    const [activeDropdown, setActiveDropdown] = useState('');

    // Modal and Popup States
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalStates, setModalStates] = useState({});
    const [selectedUnit, setSelectedUnit] = useState(null);
    const [modalContentType, setModalContentType] = useState('brochure');
    const [modalTitle, setModalTitle] = useState('');

    // Filter States
    const [floors, setFloors] = useState([]);
    const [unitTypes, setUnitTypes] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedUnitType, setSelectedUnitType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [units, setUnits] = useState([]);
    const [filteredUnits, setFilteredUnits] = useState([]);
    const [isFilterApplied, setIsFilterApplied] = useState(false);    

    // For Project Single Page
    const { id: projectId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [project, setProject] = useState(null);

    // Project Single Page Images
    const [exteriorImages, setExteriorImages] = useState([]);
    const [interiorImages, setInteriorImages] = useState([]);
    const [amenitiesImages, setAmenitiesImages] = useState([]);
    const [constructionImages, setConstructionImages] = useState([]);
    const [locationImage, setLocationImage] = useState([]);

    //Location Url
    const [locationUrl, setLocationUrl] = useState('');

    //
    const [videosUrl, setVideosUrl] = useState([]);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');


    //Project Brochures
    const [brochures, setBrochures] = useState([]);
    const [modalFile, setModalFile] = useState('');

    //Floor Plans
    const [floorPlans, setFloorPlans] = useState([]);

    //Payment Plan
    const [paymentPlans, setPaymentPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    const fetchImages = async () => {
        try {
        const { exteriorImages, interiorImages, amenitiesImages, constructionImages, locationImage, locationUrl, videosUrl, brochures, floorPlans, } = await fetchProjectMediaFilesAPI(projectId);
        //Images
        setExteriorImages(exteriorImages);
        setInteriorImages(interiorImages);
        setAmenitiesImages(amenitiesImages);
        setConstructionImages(constructionImages);
        setLocationImage(locationImage);
        setLocationUrl(locationUrl);

        //Videos
        setVideosUrl(videosUrl);
        
        //Brochures
        setBrochures(brochures);
        //console.log('Brochures fetched:', brochures);

        //Floor Plans
        setFloorPlans(floorPlans);
       // console.log('Fetched Floor Plans:', floorPlans);
        
        } catch (error) {
        console.error(error.message);
        }
    };
    if (projectId) {
        //console.log('Fetching images for projectId:', projectId); // Debug projectId
        fetchImages();
    }
    }, [projectId]);

    // useEffect(() => {
    //     const projectDetails = Projects.data.find((proj) => proj.projectId === projectId);
    //     setProject(projectDetails);
    // }, [projectId]);

    // Fetch units based on the projectId
    const fetchUnits = async (projectId) => {
        try {
        if (!projectId) {
            throw new Error("Project ID is required to fetch units.");
        }

        setLoading(true);
        setError(null); // Clear previous errors

        // Fetching units from the API
        const unitsData = await AvailableUnitsAPI(projectId);

        // Ensure the data is in the expected format (check if 'data' exists and it's an array)
        if (!unitsData || !Array.isArray(unitsData.data)) {
            throw new Error("No valid units data received.");
        }

        setUnits(unitsData.data); // Assuming the units data is inside the 'data' field
        } catch (err) {
        console.error("Error fetching units:", err);
        setError(err.message); // Store error message
        } finally {
        setLoading(false);
        }
    };

    // Fetch units data when the project changes
    useEffect(() => {
        if (projectId) {
          fetchUnits(projectId); // Fetch units when the projectId is available
        } else {
          console.error("No project ID provided");
        }
      }, [projectId]); // Re-run when projectId changes

    //Initialize unique floors, unit types, and price range
    useEffect(() => {
        if (units.length > 0) {
            const uniqueFloors = [...new Set(units.map((unit) => unit.Floor))].filter(Boolean);
            const uniqueUnitTypes = [...new Set(units.map((unit) => unit.Unit_Type))].filter(Boolean);
            const prices = units.map((unit) => unit.Unit_Price).filter(Boolean);

            setFloors(uniqueFloors);
            setUnitTypes(uniqueUnitTypes);

            const minPriceValue = Math.min(...prices);
            const maxPriceValue = Math.max(...prices);
            setPriceRange({ min: minPriceValue, max: maxPriceValue });
            setMinPrice(minPriceValue);
            setMaxPrice(maxPriceValue);

            setFilteredUnits(units);
        }
        // else {
        //     console.log('The units are not fetching');
        // }
    }, [units]);

    // Update filtered units based on selected filters
    useEffect(() => {
        if (units.length > 0) {
            const filtered = units.filter(
                (unit) =>
                    (selectedFloor ? unit.Floor === selectedFloor : true) &&
                    (selectedUnitType ? unit.Unit_Type === selectedUnitType : true) &&
                    (minPrice ? unit.Unit_Price >= minPrice : true) &&
                    (maxPrice ? unit.Unit_Price <= maxPrice : true)
            );
            setFilteredUnits(filtered);
        }
    }, [units, selectedFloor, selectedUnitType, minPrice, maxPrice]);

    // Check if any filter is applied
    useEffect(() => {
        setIsFilterApplied(
            selectedFloor !== '' ||
            selectedUnitType !== '' ||
            minPrice > priceRange.min ||
            maxPrice < priceRange.max
        );
    }, [selectedFloor, selectedUnitType, minPrice, maxPrice, priceRange]);

    // Reset Filter
    const resetFilter = () => {
        setSelectedFloor('');
        setSelectedUnitType('');
        setMinPrice(priceRange.min);
        setMaxPrice(priceRange.max);
        setFilteredUnits(units);
    };

    // Handle modal toggle
    const toggleModal = (modalId) => {
        setModalStates(prevState => ({
            ...prevState,
            [modalId]: !prevState[modalId],
        }));
    };

    // Function of Modal for Brochures
    const showBrochureModal = (language) => {
        console.log('Opening brochure modal for language:', language);
        const selectedBrochure = brochures.find(
          (brochure) => brochure.language === language.toUpperCase()
        );
        if (selectedBrochure) {
          console.log('Selected Brochure:', selectedBrochure);
          setModalTitle(`${language} Brochure`);
          setModalFile(selectedBrochure.url);
          setModalContentType('brochure');
          toggleModal('brochureModal');
        } else {
          console.warn('Brochure not found for language:', language);
        }
      };
    
    // For Available Units Modal Details
    const handleUnitClick = async (unitId) => {
        const fetchunit = await fetch(
          `https://backend.leosdevelopments.com/api/v1/units/unit/${unitId}?device=WEB`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF`,
            },
          }
        );
       console.log(fetchunit);
        if (fetchunit.ok) {
          const response = await fetchunit.json();
          console.log(response);
          setSelectedUnit(response);
        }
        
        setShowModal(true);
      };


    const showUnitModal = (unit) => {
        setSelectedUnit(unit);
        setModalTitle(unit?.Product_Name || 'Unit Details');
        setModalContentType('unitDetails');
        toggleModal('unitDetails');
    };
    const closeModal = () => {
        setShowModal(false);
        setSelectedUnit(null);
    };

    // Handle tab switch and dropdown toggle
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveDropdown('');
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(prevDropdown => (prevDropdown === dropdown ? '' : dropdown));
    };
    const openFullScreenModal = (videoUrl) => {
        setSelectedVideoUrl(videoUrl); // Set the selected video URL
        setIsFullScreenModalOpen(true);
    };

    const closeFullScreenModal = () => {
    setSelectedVideoUrl(''); // Clear the selected video URL
    setIsFullScreenModalOpen(false);
    };

    useEffect(() => {
        const fetchPaymentPlans = async () => {
          setIsLoading(true); // Set loading to true before API call
          setError(null); // Clear any previous errors
    
          try {
            const plans = await paymentPlanAPI(projectId);
            setPaymentPlans(plans); // Set the fetched payment plans
          } catch (err) {
            console.error('Error fetching payment plans:', err.message);
            setError('Failed to fetch payment plans.');
          } finally {
            setIsLoading(false); // Stop loading after API call
          }
        };
    
        if (projectId) {
          fetchPaymentPlans();
        }
    }, [projectId]); // Re-fetch if the project ID changes


    const [activePlan, setActivePlan] = useState(null); // Keeps track of the currently active accordion

    // Toggles the accordion open or closed
    const toggleAccordion = (index) => {
        setActivePlan(activePlan === index ? null : index);
    };

    // Full-screen modal functions
    // const openFullScreenModal = () => //setIsFullScreenModalOpen(true);
    // const closeFullScreenModal = () => //setIsFullScreenModalOpen(false);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setActiveDropdown('');
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);


    const formatPrice = (price) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    // // Open brochure modal
    // const openBrochure = (brochurePath) => {
    //     setBrochureSrc(brochurePath);
    //     setShowModal(true);
    // };

    // Custom slider arrows
    const PrevArrow = ({ className, style, onClick }) => (
        <span className={className} style={{ ...style, display: 'block' }} onClick={onClick}>←</span>
    );

    const NextArrow = ({ className, style, onClick }) => (
        <span className={className} style={{ ...style, display: 'block' }} onClick={onClick}>→</span>
    );

    // Slider settings
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className="wg3-tabs-container">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <div className="tab-buttons">
                    {/* Exteriors Tab Section Start */}
                    <li>
                        <button
                            className={`tab-button ${activeTab === 'exteriors-tab' ? 'active' : ''}`}
                            onClick={() => handleTabClick('exteriors-tab')}>
                            Exteriors
                        </button>
                    </li>
                    {/* Exteriors Tab Section End */}

                    {/* Interiors Tab Section Start */}
                    <li>
                        <button
                            className={`tab-button ${activeTab === 'interiors-tab' ? 'active' : ''}`}
                            onClick={() => handleTabClick('interiors-tab')}>
                            Interiors
                        </button>
                    </li>
                    {/* Interiors Tab Section End */}

                    {/* Amenities Tab Section Start */}
                    <li>
                        <button
                            className={`tab-button ${activeTab === 'amenities-tab' ? 'active' : ''}`}
                            onClick={() => handleTabClick('amenities-tab')}>
                            Amenities
                        </button>
                    </li>
                    {/* Amenities Tab Section End */}

                    {/* Location Tab Section Start */}
                    <li>
                        <button
                            className={`tab-button ${activeTab === 'location-tab' ? 'active' : ''}`}
                            onClick={() => handleTabClick('location-tab')}>
                            Location
                        </button>
                    </li>
                    {/* Location Tab Section End */}

                    {/* Construction Progress Tab Section Start */}
                    <li>
                        <button
                            className={`tab-button ${activeTab === 'construction-progress-tab' ? 'active' : ''}`}
                            onClick={() => handleTabClick('construction-progress-tab')}>
                            Construction Progress
                        </button>
                    </li>
                    {/* Construction Progress Section End */}

                    {/* Dropdown for Floor Plans Start */}
                    <li className="dropdown">
                         <button
                            className={`tab-button dropdown-toggle ${activeDropdown === 'floorPlans' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown('floorPlans');
                            }}>
                            Floor Plans
                        </button>
                        {floorPlans.length > 0 ? (
                                <ul className={`dropdown-menu ${activeDropdown === 'floorPlans' ? 'show' : ''}`}>
                                    {floorPlans.map((plan, index) => (
                                        <li key={index}>
                                            <button
                                                className={`tab-button ${activeTab === plan.Unit_Type ? 'active' : ''}`}
                                                onClick={() => handleTabClick(plan.Unit_Type)}>
                                                {plan.Unit_Type}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="no-data">No floor plans available for this project.</p>
                        )}
                    </li>
                    {/* Dropdown for Floor Plans End */}

                    {/* Dropdown for Videos Start */}
                    <li className="dropdown">
                        <button
                        className={`tab-button dropdown-toggle ${activeDropdown === 'videos' ? 'active' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown('videos');
                        }}>
                        Videos
                        </button>
                        <ul className={`dropdown-menu ${activeDropdown === 'videos' ? 'show' : ''}`}>
                        {videosUrl.length > 0 ? (
                            videosUrl.map((video, index) => (
                            <li key={index}>
                                <button
                                className="tab-button"
                                onClick={() => {
                                    toggleDropdown('videos');
                                    openFullScreenModal(video.url); // Pass the video URL to the modal
                                }}>
                                {video.title || `Video ${index + 1}`}
                                </button>
                            </li>
                            ))
                        ) : (
                            <li>No videos available</li>
                        )}
                        </ul>
                        {isFullScreenModalOpen && selectedVideoUrl && (
                        <div className="video-modal">
                            <div className="video-modal-content">
                            <span className="close-button" onClick={closeFullScreenModal}>
                                &times;
                            </span>
                            <iframe
                                width="100%"
                                height="100%"
                                src={selectedVideoUrl}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            </div>
                        </div>
                        )}
                    </li>
                    {/* Dropdown for Videos End */}

                    {/* Dropdown for Brochures Start */}
                    <li className="dropdown">
                        <button
                            className={`tab-button dropdown-toggle ${
                            activeDropdown === 'brochures' || modalStates['brochures'] ? 'active' : ''
                            }`}
                            onClick={(e) => {
                            e.preventDefault();
                            toggleDropdown('brochures');
                            }}>
                            Brochures
                        </button>
                        <ul className={`dropdown-menu ${activeDropdown === 'brochures' || modalStates['brochures'] ? 'show' : ''}`}>
                            {brochures.length > 0 ? (
                                brochures.map((brochure) => (
                                <li key={brochure.language}>
                                    <button
                                    className="tab-button"
                                    onClick={() => showBrochureModal(brochure.language)}
                                    >
                                    {brochure.language}
                                    </button>
                                </li>
                                ))
                            ) : (
                                <li>No brochures available</li>
                            )}
                        </ul>
                    </li>
                    <PopupModal
                    show={modalStates['brochureModal']}
                    onHide={() => toggleModal('brochureModal')}
                    title={modalTitle}
                    contentType={modalContentType}
                    file={modalFile}
                    />    
                    {/* Dropdown for Brochures End */}

                    {/* Available Units Start */}
                    <li>
                        <button
                        className={`tab-button ${activeTab === 'available-units-tab' ? 'active' : ''}`}
                        onClick={() => setActiveTab('available-units-tab')}>
                        Available Units
                        </button>
                    </li>
                    {/* Available Units End */}
                    
                </div>
            </ul>

            <div className="tab-content">
                {activeTab === 'exteriors-tab' && (
                    <Slider {...sliderSettings}>
                        {exteriorImages.length > 0 ? (
                        exteriorImages.map((image, index) => (
                            <div className="item" key={index}>
                            <div className="card">
                                <img src={image.url} alt={`Exterior ${index + 1}`} />
                            </div>
                            </div>
                        ))
                        ) : (
                        <div className="item">
                            <div className="card">
                            <p>No images available.</p>
                            </div>
                        </div>
                        )}
                    </Slider>
                )}
                {activeTab === 'interiors-tab' && (
                    <Slider {...sliderSettings}>
                        {interiorImages.length > 0 ? (
                        interiorImages.map((image, index) => (
                            <div className="item" key={index}>
                            <div className="card">
                                <img src={image.url} alt={`Exterior ${index + 1}`} />
                            </div>
                            </div>
                        ))
                        ) : (
                        <div className="item">
                            <div className="card">
                            <p>No exterior images available.</p>
                            </div>
                        </div>
                        )}
                    </Slider>

                )}
                {activeTab === 'amenities-tab' && (
                    <Slider {...sliderSettings}>
                        {amenitiesImages.length > 0 ? (
                        amenitiesImages.map((image, index) => (
                            <div className="item" key={index}>
                            <div className="card">
                                <img src={image.url} alt={`Exterior ${index + 1}`} />
                            </div>
                            </div>
                        ))
                        ) : (
                        <div className="item">
                            <div className="card">
                            <p>No images available.</p>
                            </div>
                        </div>
                        )}
                    </Slider>
                )}
                {activeTab === 'location-tab' && (
                    <>
                    {locationImage.length > 0 ? (
                      locationImage.map((image, index) => (
                        <div className="item" key={index}>
                          <div className="card">
                            <img src={image.url} alt={`Exterior ${index + 1}`} />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="item">
                        <div className="card">
                          <p>No images available.</p>
                        </div>
                      </div>
                    )}
                    <div className="button-container text-center">
                        <button className="btn btn-style btn-primary mt-3"
                        onClick={() => window.open(locationUrl, '_blank')}>
                        VIEW ON MAP
                        </button>
                    </div>
                  </>
                )}
                {activeTab === 'construction-progress-tab' && (
                    <Slider {...sliderSettings}>
                        {constructionImages.length > 0 ? (
                        constructionImages.map((image, index) => (
                            <div className="item" key={index}>
                            <div className="card">
                                <img src={image.url} alt={`Exterior ${index + 1}`} />
                            </div>
                            </div>
                        ))
                        ) : (
                        <div className="item">
                            <div className="card">
                            <p>No images available.</p>
                            </div>
                        </div>
                        )}
                    </Slider>
                )}
                {floorPlans.map((plan) =>
                    activeTab === plan.Unit_Type ? (
                        <Slider {...sliderSettings} key={plan.Unit_Type}>
                            {plan.images && plan.images.length > 0 ? (
                                plan.images.map((image, index) => (
                                    <div className="item" key={index}>
                                        <div className="card">
                                            <img
                                                src={image.url}
                                                className="img-fluid radius-image"
                                                alt={image.alt} // Use alt text from the image object
                                                onError={(e) => {
                                                    e.target.src = "/assets/images/default.jpg"; // Fallback image
                                                    e.target.alt = "Image not found";
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No images available for this floor plan.</p>
                            )}
                        </Slider>
                    ) : null
                )}
                {activeTab === 'available-units-tab' && (
                    <div className="single-bg-white">
                        {/* Search Filter for Available Units */}
                        <div className="filter-form text-center mb-5">
                            <div className="row">
                                <div className="col-10">
                                    <select
                                    className="tab-button text-center"
                                    value={selectedFloor}
                                    onChange={(e) => setSelectedFloor(e.target.value)}>
                                    <option value="">Select Floor</option>
                                    {floors
                                        .sort((a, b) => a - b)  // Sort floors in ascending order
                                        .map((floor, index) => (
                                        <option key={index} value={floor}>{floor}</option>
                                    ))}
                                    </select>
                                    <select
                                        className="tab-button text-center"
                                        value={selectedUnitType}
                                        onChange={(e) => setSelectedUnitType(e.target.value)}>
                                        <option value="">Select Unit Type</option>
                                        {unitTypes
                                            .sort((a, b) => a.localeCompare(b))  // Sort unit types in ascending order (alphabetically)
                                            .map((type, index) => (
                                            <option key={index} value={type}>{type}</option>
                                        ))}
                                    </select>
                                    {/* Price Range Filter */}
                                    <span className="price-filter-color"> AED {formatPrice(minPrice)} </span>
                                    <input
                                        type="range"
                                        min={priceRange.min}
                                        max={priceRange.max}
                                        value={maxPrice}
                                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                                        className="price-range"
                                    /> 
                                    <span className="price-filter-color"> AED {formatPrice(maxPrice)} </span>
                                </div>
                                <div className="col-2">
                                    {isFilterApplied && (
                                        <button className="reset-button tab-button" onClick={resetFilter}>RESET FILTER</button>
                                    )}
                                </div>
                            </div>    
                        </div>

                        {/* Available Units Grid */}
                        <div className="unit-grid row">
                            {filteredUnits.length > 0 ? (
                                filteredUnits.map((unit, index) => (
                                <div key={index} className="col-12 col-sm-4 col-md-3 custom-col-lg mb-4">
                                    <div 
                                    className="unit-card text-center" 
                                    onClick={() => handleUnitClick(unit._id)} 
                                    style={{ cursor: 'pointer' }}
                                    >
                                    <div className="unit-icon">
                                        <i className="fas fa-bed"></i>
                                    </div>
                                    <p className="unit-name">{unit.Product_Name}</p>
                                    <p className="unit-type">{unit.Bedroom}</p>
                                    <p className="unit-price">AED {formatPrice(unit.Unit_Price)}</p>
                                    </div>
                                </div>
                                ))
                            ) : (
                                <p>No units available for the selected criteria.</p>
                            )}
                        </div>

                        {/* Modal for Unit Details */}
                        <Modal show={showModal} onHide={closeModal} centered dialogClassName="custom-modal-80">
                            <Modal.Header closeButton className="justify-content-center bg-color">
                                <Modal.Title className="w-100 text-center text-uppercase">
                                    {selectedUnit?.Projects?.name || 'NA'}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Tab.Container defaultActiveKey="unit-details">
                                    {/* Tabs Navigation */}
                                    <Nav variant="tabs" className="justify-content-center mb-4">
                                        <Nav.Item>
                                            <Nav.Link eventKey="unit-details">UNIT DETAILS</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="payment-plan">PAYMENT PLANS</Nav.Link>
                                        </Nav.Item>
                                    </Nav>

                                    {/* Tabs Content */}
                                    <Tab.Content>
                                        {/* Unit Details Tab */}
                                        <Tab.Pane eventKey="unit-details">
                                            {selectedUnit && (
                                                <div className="row">
                                                    {/* Left Column: Image */}
                                                    <div className="col-12 col-md-7">
                                                        <div className="image-container">
                                                            <img
                                                                src={selectedUnit?.image || '../assets/images/2d-floor.png'}
                                                                alt={selectedUnit?.Product_Name}
                                                                className="unit-2d-img rounded"
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Right Column: Unit Details */}
                                                    <div className="col-12 col-md-5">
                                                        <div className="unit-detail-card">
                                                            <h3 className="text-center mb-4">{selectedUnit?.Product_Name || 'NA'}</h3>
                                                            <table className="table table-striped table-bordered">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="text-start">Unit Type</th>
                                                                        <td className="text-end">{selectedUnit?.Unit_Type || 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Availability</th>
                                                                        <td className="text-end" style={{ color: selectedUnit?.Unit_Status ? 'green' : 'red' }}>
                                                                            {selectedUnit?.Unit_Status ? 'Available' : 'Not Available'}
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">View</th>
                                                                        <td className="text-end">{selectedUnit?.View || 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Floor</th>
                                                                        <td className="text-end">{selectedUnit?.Floor || 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Bedroom</th>
                                                                        <td className="text-end">{selectedUnit?.Bedroom || 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Suite Area</th>
                                                                        <td className="text-end">{selectedUnit?.Suite_Area_Sq_ft ? `${selectedUnit?.Suite_Area_Sq_ft} sq ft` : 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Balcony Size</th>
                                                                        <td className="text-end">{selectedUnit?.Balcony_Area_Sq_ft ? `${selectedUnit?.Balcony_Area_Sq_ft} sq ft` : 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Total Area</th>
                                                                        <td className="text-end">{selectedUnit?.Total_Area_Sq_ft ? `${selectedUnit?.Total_Area_Sq_ft} sq ft` : 'NA'}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="text-start">Price</th>
                                                                        <td className="text-end">{selectedUnit?.Unit_Price ? `AED ${formatPrice(selectedUnit?.Unit_Price)}` : 'NA'}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Tab.Pane>

                                        {/* Payment Plan Tab */}
                                        <Tab.Pane eventKey="payment-plan">
                                        <div className="payment-plan-container">
                                            {isLoading ? (
                                                <p className="text-center">Loading payment plans...</p>
                                            ) : paymentPlans.length > 0 ? (
                                                paymentPlans.map((plan, index) => (
                                                <div key={plan.id} className="payment-plan">
                                                    {/* Accordion Header */}
                                                    <div
                                                    className="payment-plan-header"
                                                    onClick={() => toggleAccordion(index)}
                                                    >
                                                    <h4>{plan.name}</h4>
                                                    <span>{activePlan === index ? '-' : '+'}</span>
                                                    </div>

                                                    {/* Accordion Content (Only shown if active) */}
                                                    {activePlan === index && (
                                                        <div className="row">
                                                            {/* Payment Plan Details */}
                                                            <div className="col-12">
                                                            <div className="payment-plan-detail-card">
                                                            <table className="table table-striped table-bordered">
                                                                <tbody>
                                                                    {/* Payment Plan General Details */}
                                                                    <tr>
                                                                        <th className="text-start">Booking Deposit</th>
                                                                        <th className="text-start">On Completion</th>
                                                                        <th className="text-start">Reservation</th>
                                                                        <th className="text-start">Payment Plan Method</th>
                                                                    </tr>
                                                                    <tr>
                                                                        <td className="text-end">{plan.bookingDeposit || 'NA'}%</td>
                                                                        <td className="text-end">{plan.onCompletion || 'NA'}%</td>
                                                                        <td className="text-end">{plan.Percentage_from_Reservation || 'NA'}</td>
                                                                        <td className="text-end">{plan.paymentPlanMethod || 'NA'}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                ))
                                            ) : (
                                                <p className="text-center">No Payment Plan available.</p>
                                            )}
                                        </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </Modal.Body>
                        </Modal>
                    </div>
                )}
            
            </div>
        </div>
    );
};

export default SingleProjectTabs;
import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SingleProjectTabs.css';
import { Link, useParams } from 'react-router-dom';
import { Modal, Tab, Nav } from 'react-bootstrap/';
import PopupModal from '../modal/PopupModal.jsx';
import { FaYoutube } from 'react-icons/fa';

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

    // const [projectTitle, setProjectTitle] = useState('');
    const [projectName, setProjectName] = useState("Loading...");

    // Project Single Page Images
    const [exteriorImages, setExteriorImages] = useState([]);
    const [interiorImages, setInteriorImages] = useState([]);
    const [amenitiesImages, setAmenitiesImages] = useState([]);
    const [constructionImages, setConstructionImages] = useState([]);

    // Master Plan Image
    const [masterPlanImage, setMasterPlanImage] = useState([]);

    // Location Image and URL
    const [locationImage, setLocationImage] = useState([]);
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

    // State to store the unit price
    const [unitPrice, setUnitPrice] = useState(null);

    // For Image Lightbox(Image Zoom-in)
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");
    const [zoomLevel, setZoomLevel] = useState(1);


    useEffect(() => {
    const fetchImages = async () => {
        try {
        const { exteriorImages, interiorImages, amenitiesImages, constructionImages, masterPlanImage, locationImage, locationUrl, videosUrl, brochures, floorPlans, } = await fetchProjectMediaFilesAPI(projectId);
        //Images
        setExteriorImages(exteriorImages);
        setInteriorImages(interiorImages);
        setAmenitiesImages(amenitiesImages);
        setConstructionImages(constructionImages);

        //Master Plan
        setMasterPlanImage(masterPlanImage);
        
        //Location
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

    // Fetch Current Project Name
    useEffect(() => {
        const fetchProjectName = async () => {
          try {
            // Fetch all projects
            const projects = await fetchProjectsAPI();
            // Find the project matching the current ID
            const currentProject = projects.find(
              (project) => project._id === projectId
            );
            // Set the project name or fallback to "Not Found"
            setProjectName(currentProject?.Project_Name_Marketing || "Project Not Found");
          } catch (error) {
            console.error("Error fetching project name:", error);
            setProjectName("Error loading project");
          }
        };
    
        fetchProjectName();
    }, [projectId]);

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
    const toggleModal = (modal) => {
        setModalStates((prev) => ({
            ...prev,
            [modal]: !prev[modal],
        }));
    };


    // For Available Units Modal Details
    const handleUnitClick = async (unitId) => {
        try {
        const fetchunit = await fetch(
            `https://backend.leosdevelopments.com/api/v1/units/unit/${unitId}?device=WEB`,
            {
            method: "GET",
            headers: {
                Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF`,
            },
            }
        );
    
        if (fetchunit.ok) {
            const response = await fetchunit.json();
            //console.log(response);
            setSelectedUnit(response);
    
            // Ensure unit price is retrieved and stored in state
            const price = response?.Unit_Price || null; // Use `Unit_Price` from API response
            setUnitPrice(price);
        }
    
        setShowModal(true);
        } catch (error) {
        console.error("Error fetching unit details:", error);
        }
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
        setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
    };
    const openFullScreenModal = (videoUrl) => {
        setSelectedVideoUrl(videoUrl); // Set the selected video URL
        setIsFullScreenModalOpen(true);
    };

    const closeFullScreenModal = () => {
    setSelectedVideoUrl(''); // Clear the selected video URL
    setIsFullScreenModalOpen(false);
    };

    // Function to detect if the user is on a mobile device
    const isMobileDevice = () => {
        return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    // Function of Modal for Brochures
    const showBrochureModal = (language) => {
        const selectedBrochure = brochures.find(
            (brochure) => brochure.language === language.toUpperCase()
        );
        if (selectedBrochure) {
            const fileUrl = selectedBrochure.url;

            if (isMobileDevice()) {
                // Open PDF in a new tab on mobile devices
                window.open(fileUrl, '_blank', 'noopener,noreferrer');
            } else {
                // Show modal on desktop devices
                setModalTitle(`${language} Brochure`);
                setModalFile(fileUrl);
                setModalContentType('brochure');
                toggleModal('brochureModal');
            }
        } else {
            console.warn('Brochure not found for language:', language);
        }
    };

    
    // Function to calculate percentage-based amounts
    const calculatePercentageAmount = (percentage) => {
        if (!unitPrice) {
          console.warn("Unit price is not available");
          return "N/A";
        }
        const amount = unitPrice * (parseFloat(percentage) / 100);
        return amount.toFixed(2);
    };
      
    // For Displaying the Payment Plans 
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

    // State to manage sharing options visibility for each image
    const [shareOptionsVisible, setShareOptionsVisible] = React.useState(
        new Array(exteriorImages.length).fill(false) // Initialize with false for all images
    );

    const toggleShareOptions = (index) => {
        setShareOptionsVisible((prevState) =>
            prevState.map((visible, i) => (i === index ? !visible : visible))
        );
    };

    // Open Lightbox
    const openLightbox = (imageUrl) => {
        setCurrentImage(imageUrl);
        setIsLightboxOpen(true);
        setZoomLevel(1);
    };
    // Close Lightbox
    const closeLightbox = () => {
        setIsLightboxOpen(false);
        setCurrentImage(null);
        setZoomLevel(1);
    };
    // Double-click to zoom in/out
    const handleDoubleClick = () => {
        setZoomLevel((prevZoom) => (prevZoom === 1 ? 2 : 1));
    };
    // Zoom in/out buttons
    const zoomIn = () => setZoomLevel((prevZoom) => Math.min(prevZoom * 1.1, 5));
    const zoomOut = () => setZoomLevel((prevZoom) => Math.max(prevZoom / 1.1, 1));

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
        <>
        {/* Header Section Start */}
        <header id="site-header" className="single-property">
            <div className="container">
            <div className="row d-flex align-items-center">
                {/* Header Left Sidebar Section Start */}
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <Link to="/">
                    <img src="/assets/images/logo.png" alt="Logo" className="headerLogo" />
                </Link>
                </div>
                {/* Header Left Sidebar Section End */}

                {/* Header Middle Section */}
                <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center mb-3 mb-md-0">
                <div className="post-content text-center">
                    <h1 className="singlePage-title title-medium heading-gold text-uppercase">{projectName}</h1>
                </div>
                </div>
                {/* Header Middle Section End */}

                {/* Header Right Section */}
                <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center justify-content-lg-end justify-content-sm-end">
                    <div className="social-icon d-flex justify-content-center mx-5">
                        <Link
                        className="pt-md-2 pt-0 px-2"
                        to="https://www.youtube.com/@leosinternational"
                        target="_blank"
                        >
                        <FaYoutube size={30} color="##d0a85f" />
                        </Link>
                    </div>
                    <div className="post-content text-center text-md-right">
                        <Link to="/" className="btn btn-style btn-primary">
                        <span className="fa fa-home"></span> HOME
                        </Link>
                    </div>
                </div>
                {/* Header Right Section End */}
            </div>
            </div>
        </header>
        {/* Header Section End */}

        <div className="wg3-tabs-container">
            <ul className="nav nav-tabs mb-4" id="myTab" role="tablist">
                <div className="tab-buttons">
                    {/* Exteriors Tab Section Start */}
                    {exteriorImages.length > 0 && (
                        <li>
                            <button
                                className={`tab-button ${activeTab === 'exteriors-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('exteriors-tab')}>
                                Exteriors
                            </button>
                        </li>
                    )}
                    {/* Exteriors Tab Section End */}

                    {/* Interiors Tab Section Start */}
                    {interiorImages.length > 0 && (
                        <li>
                            <button
                                className={`tab-button ${activeTab === 'interiors-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('interiors-tab')}>
                                Interiors
                            </button>
                        </li>
                    )}
                    {/* Interiors Tab Section End */}

                    {/* Amenities Tab Section Start */}
                    {amenitiesImages.length > 0 && (
                        <li>
                            <button
                                className={`tab-button ${activeTab === 'amenities-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('amenities-tab')}>
                                Amenities
                            </button>
                        </li>
                    )}
                    {/* Amenities Tab Section End */}

                    {/* Master Plan Tab Section Start */}
                    {masterPlanImage.length > 0 && (
                        <li>
                            <button
                                className={`tab-button ${activeTab === 'masterPlan-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('masterPlan-tab')}>
                                Master Plan
                            </button>
                        </li>
                    )}
                    {/* Master Plan Tab Section End */}

                    {/* Location Tab Section Start */}
                    {locationImage.length > 0 && (
                        <li>
                            <button
                                className={`tab-button ${activeTab === 'location-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('location-tab')}>
                                Location
                            </button>
                        </li>
                    )}
                    {/* Location Tab Section End */}

                    {/* Construction Progress Tab Section Start */}
                    {constructionImages.length > 0 && (
                        <li>
                            <button
                                className={`tab-button ${activeTab === 'construction-progress-tab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('construction-progress-tab')}>
                                Construction Progress
                            </button>
                        </li>
                    )}
                    {/* Construction Progress Section End */}

                    {/* Dropdown for Floor Plans Start */}
                    {floorPlans.length > 0 && (
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
                    )}
                    {/* Dropdown for Floor Plans End */}

                    {/* Dropdown for Videos Start */}
                    {videosUrl.length > 0 && (
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
                    )}
                    {/* Dropdown for Videos End */}

                    {/* Dropdown for Brochures Start */}
                    {brochures.length > 0 && (
                        <>
                            <li className="dropdown">
                                <button
                                    className={`tab-button dropdown-toggle ${
                                        activeDropdown === 'brochures' ? 'active' : ''
                                    }`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleDropdown('brochures');
                                    }}
                                >
                                    Brochures
                                </button>
                                <ul
                                    className={`dropdown-menu ${
                                        activeDropdown === 'brochures' ? 'show' : ''
                                    }`}
                                >
                                    {brochures.map((brochure) => (
                                        <li key={brochure.language}>
                                            <button
                                                className="tab-button"
                                                onClick={() => {
                                                    toggleDropdown(null); // Close dropdown
                                                    showBrochureModal(brochure.language);
                                                }}
                                            >
                                                {brochure.language}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            {/* Modal for Desktop */}
                            <PopupModal
                                show={modalStates['brochureModal']}
                                onHide={() => toggleModal('brochureModal')}
                                title={modalTitle}
                                contentType={modalContentType}
                                file={modalFile}
                            />
                        </>
                    )}
                    {/* Dropdown for Brochures End */}

                    {/* Available Units Start */}
                    {filteredUnits.length > 0 && (
                        <li>
                            <button
                            className={`tab-button ${activeTab === 'available-units-tab' ? 'active' : ''}`}
                            onClick={() => setActiveTab('available-units-tab')}>
                            Available Units
                            </button>
                        </li>
                    )}
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
                                <img src={image.url} alt={`Exterior ${index + 1}`} class="img-fluid radius-image" onClick={() => openLightbox(image.url)} />
                                {/* Share Buttons */}
                                <div className="share-buttons">
                                    <a
                                        href={`https://wa.me/?text=${encodeURIComponent(image.url)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="share-icon whatsapp"
                                        title="Share on WhatsApp"
                                    >
                                    <i className="fab fa-whatsapp"></i> 
                                    </a>
                                    <a
                                        href={`mailto:?subject=Check this image&body=${encodeURIComponent(
                                            `Take a look at this image: ${image.url}`
                                        )}`}
                                        className="share-icon email"
                                        title="Share via Email"
                                    >
                                        <i className="fas fa-envelope"></i>
                                    </a>
                                </div>
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
                                <img src={image.url} alt={`Exterior ${index + 1}`} class="img-fluid radius-image" onClick={() => openLightbox(image.url)}/>
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
                                <img src={image.url} alt={`Exterior ${index + 1}`} class="img-fluid radius-image" onClick={() => openLightbox(image.url)} />
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
                {activeTab === 'masterPlan-tab' && (
                    <Slider {...sliderSettings}>
                        {masterPlanImage.length > 0 ? (
                        masterPlanImage.map((image, index) => (
                            <div className="item" key={index}>
                            <div className="card">
                                <img src={image.url} alt={`Exterior ${index + 1}`} class="img-fluid radius-image" onClick={() => openLightbox(image.url)} />
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
                    <div className="slider-container position-relative">
                        <Slider {...sliderSettings}>
                            {locationImage.length > 0 ? (
                            locationImage.map((image, index) => (
                                <div className="item" key={index}>
                                <div className="card position-relative">
                                    <img src={image.url} alt={`Exterior ${index + 1}`} className="img-fluid radius-image" onClick={() => openLightbox(image.url)} />
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
                        {/* VIEW ON MAP Button */}
                        {!isMobileDevice() && (
                            <button
                            className="btn btn-style btn-primary view-on-map-button"
                            onClick={() => window.open(locationUrl, '_blank')}
                            >
                            VIEW ON MAP
                            </button>
                        )}
                        {/* <button
                            className="btn btn-style btn-primary view-on-map-button"
                            onClick={() => window.open(locationUrl, '_blank')}>
                            VIEW ON MAP
                        </button> */}
                    </div>
                    </>
                )}
                {activeTab === 'construction-progress-tab' && (
                    <Slider {...sliderSettings}>
                        {constructionImages.length > 0 ? (
                        constructionImages.map((image, index) => (
                            <div className="item" key={index}>
                            <div className="card">
                                <img src={image.url} alt={`Exterior ${index + 1}`} class="img-fluid radius-image" onClick={() => openLightbox(image.url)} />
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
                                        <div className="card floor-plan-card">
                                            <img
                                                src={image.url}
                                                className="floorPlan-img img-fluid radius-image"
                                                alt={image.alt} // Use alt text from the image object
                                                onError={(e) => {
                                                    e.target.src = "/assets/images/default.jpg"; // Fallback image
                                                    e.target.alt = "Image not found";
                                                }}
                                                onClick={() => openLightbox(image.url)}
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
                                <div className="col-12 col-md-10 col-sm-12 col-xs-12">
                                    {floors.length > 0 && ( 
                                        <select
                                        className="singlePage-filterBtn tab-button text-center"
                                        value={selectedFloor}
                                        onChange={(e) => setSelectedFloor(e.target.value)}>
                                        <option value="">Select Floor</option>
                                        {floors
                                            .sort((a, b) => a - b)  // Sort floors in ascending order
                                            .map((floor, index) => (
                                            <option key={index} value={floor}>{floor}</option>
                                        ))}
                                        </select>
                                    )}
                                    <select
                                        className="singlePage-filterBtn tab-button text-center"
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
                                <div className="col-12 col-md-2 col-sm-12 col-xs-12">
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
                                                    
                                                    {/* Table: Unit Details */}
                                                    <div className="col-12 col-md-12">
                                                    <div className="unit-detail-card">
                                                        {/* <h3 className="text-center mb-4">{selectedUnit?.Product_Name || 'NA'}</h3> */}
                                                        <div className="table-responsive"> {/* Add a wrapper div for responsiveness */}
                                                            <table className="table table-striped table-bordered">
                                                                <tbody>
                                                                    <tr className="text-center">
                                                                        <th className="text-start">Unit Name</th>
                                                                        <th className="text-start">Floor</th>
                                                                        <th className="text-start">Unit Type</th>
                                                                        <th className="text-start">Suite Area</th>
                                                                        <th className="text-start">Balcony Size</th>
                                                                        <th className="text-start">Total Area</th>
                                                                        <th className="text-start">Price</th>
                                                                        <th className="text-start">View</th>
                                                                    </tr>
                                                                    <tr className="text-center">
                                                                        <td className="text-end font-weight-bold">{selectedUnit?.Product_Name || 'NA'}</td>
                                                                        <td className="text-end">{selectedUnit?.Floor || 'NA'}</td>
                                                                        <td className="text-end">{selectedUnit?.Unit_Type || 'NA'}</td>
                                                                        <td className="text-end">{selectedUnit?.Internal_Area_Sq_ft ? `${selectedUnit?.Internal_Area_Sq_ft} sq ft` : 'NA'}</td>
                                                                        <td className="text-end">{selectedUnit?.Balcony_Area_Sq_ft ? `${selectedUnit?.Balcony_Area_Sq_ft} sq ft` : 'NA'}</td>
                                                                        <td className="text-end">{selectedUnit?.Total_Area_Sq_ft ? `${selectedUnit?.Total_Area_Sq_ft} sq ft` : 'NA'}</td>
                                                                        <td className="text-end font-weight-bold">{selectedUnit?.Unit_Price ? `AED ${formatPrice(selectedUnit?.Unit_Price)}` : 'NA'}</td>
                                                                        <td className="text-end">{selectedUnit?.View || 'NA'}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                    </div>

                                                    {/* Selected Unit Image */}
                                                    <div className="col-12 col-md-12">
                                                        <div className="image-container selected-floor-unit-img">
                                                            {floorPlans.some((plan) => plan.Unit_Type === selectedUnit?.Unit_Type && plan.images?.length > 0) ? (
                                                                floorPlans
                                                                    .filter((plan) => plan.Unit_Type === selectedUnit?.Unit_Type) // Filter floor plans by Unit_Type
                                                                    .flatMap((plan) => plan.images.slice(0, 1)) // Select only the first image of the matching floor plan
                                                                    .map((image, index) => (
                                                                        <img
                                                                            key={index}
                                                                            src={image.url}
                                                                            alt={image.alt || "Floor Plan"} // Use alt text or fallback
                                                                            className="unit-2d-img rounded img-fluid"
                                                                            onError={(e) => {
                                                                                e.target.src = "/assets/images/default.jpg"; // Fallback image
                                                                                e.target.alt = "Image not found";
                                                                            }}
                                                                            onClick={() => openLightbox(image.url)}
                                                                        />
                                                                    ))
                                                            ) : (
                                                                <img
                                                                    src={selectedUnit?.image || "../assets/images/default.jpg"}
                                                                    alt={selectedUnit?.Product_Name || "Default Image"}
                                                                    className="unit-2d-img rounded img-fluid"
                                                                />
                                                            )}
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
                                                ) : error ? (
                                                    <p className="text-center text-danger">{error}</p>
                                                ) : paymentPlans.length > 0 ? (
                                                    paymentPlans.map((plan, index) => (
                                                        <div key={plan.id} className="payment-plan">
                                                            {/* Accordion Header */}
                                                            <div
                                                                className="payment-plan-header"
                                                                onClick={() => toggleAccordion(index)}
                                                            >
                                                                <h4>{plan.name}</h4>
                                                                <span>{activePlan === index ? "-" : "+"}</span>
                                                            </div>

                                                            {/* Accordion Content (Only shown if active) */}
                                                            {activePlan === index && (
                                                                <div className="row">
                                                                    {/* Payment Plan Details */}
                                                                    <div className="col-12">
                                                                        <div className="payment-plan-detail-card">
                                                                        <table className="table table-striped table-bordered">
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th>Unit Price</th>
                                                                                    <th>Booking Deposit</th>
                                                                                    <th>DLD</th>
                                                                                    <th>Admin Fee</th>
                                                                                    <th>On Completion</th>
                                                                                    <th>Payment Plan Method</th>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td>AED {formatPrice(unitPrice)}</td>
                                                                                    <td>
                                                                                    {plan.bookingDeposit || "NA"}% (
                                                                                    AED {formatPrice(calculatePercentageAmount(plan.bookingDeposit || 0))}
                                                                                    )
                                                                                    </td>
                                                                                    <td>
                                                                                    4% (AED {formatPrice((unitPrice || 0) * 0.04)})
                                                                                    </td>
                                                                                    <td>AED 5,250</td>
                                                                                    <td>
                                                                                    {plan.onCompletion || "NA"}% (
                                                                                    AED {formatPrice(calculatePercentageAmount(plan.onCompletion || 0))}
                                                                                    )
                                                                                    </td>
                                                                                    <td>{plan.paymentPlanMethod || "NA"}</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                            <h5>Before Completion</h5>
                                                                            {plan.beforeCompletion.length > 0 ? (
                                                                                <table className="table table-striped table-bordered">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>#</th>
                                                                                            <th>Months from Reservation</th>
                                                                                            <th>Percentage from Reservation</th>
                                                                                            <th>Price</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {plan.beforeCompletion.map((stage, idx) => (
                                                                                            <tr key={idx}>
                                                                                                <td>{idx + 1}</td>
                                                                                                <td>
                                                                                                    {stage.No_of_Months_from_Reservation} Months
                                                                                                </td>
                                                                                                <td>{stage.Percentage_from_Reservation}%</td>
                                                                                                <td>
                                                                                                    AED {formatPrice(calculatePercentageAmount(stage.Percentage_from_Reservation))}
                                                                                                </td>
                                                                                            </tr>
                                                                                        ))}
                                                                                    </tbody>
                                                                                </table>
                                                                            ) : (
                                                                                <p>No stages before completion.</p>
                                                                            )}

                                                                            
                                                                            {plan.afterCompletion.length > 0 && (
                                                                                <>
                                                                                <h5>After Completion</h5>
                                                                                <table className="table table-striped table-bordered">
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <th>#</th>
                                                                                            <th>Months from Completion</th>
                                                                                            <th>Percentage from Completion</th>
                                                                                            <th>Price</th>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                        {plan.afterCompletion.map((stage, idx) => (
                                                                                            <tr key={idx}>
                                                                                                <td>{idx + 1}</td>
                                                                                                <td>{stage.No_of_Months_after_Completion || "N/A"} Months</td>
                                                                                                <td>{stage.Percentage_after_Completion || "N/A"}%</td>
                                                                                                <td>
                                                                                                    AED {formatPrice(calculatePercentageAmount(stage.Percentage_after_Completion || 0))}
                                                                                                </td>
                                                                                            </tr>
                                                                                        ))}
                                                                                    </tbody>
                                                                                </table>
                                                                                </>
                                                                            )}

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p className="text-center color-white">No Payment Plan available.</p>
                                                )}
                                            </div>
                                        </Tab.Pane>

                                    </Tab.Content>
                                </Tab.Container>
                            </Modal.Body>
                        </Modal>
                    </div>
                )}


                {/* Lightbox */}
                {isLightboxOpen && (
                    <div className="lightbox">
                        <div className="lightbox-content">
                            <img
                                src={currentImage}
                                alt="Lightbox"
                                className="lightbox-image"
                                onDoubleClick={handleDoubleClick}
                                style={{
                                    transform: `scale(${zoomLevel})`,
                                    cursor: zoomLevel > 1 ? "zoom-out" : "zoom-in",
                                }}
                            />
                            <button className="zoom-in" onClick={zoomIn}>+</button>
                            <button className="zoom-out" onClick={zoomOut}>-</button>
                            <span className="close" onClick={closeLightbox}>&times;</span>
                        </div>
                    </div>
                )}

            
            </div>
        </div>
        </>
    );
};

export default SingleProjectTabs;
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/singleProject/SingleProjectTabs.css';
import { Link, useParams } from 'react-router-dom';
import Units from '../json/Units.json';
import Projects from '../json/Projects.json';
import { Modal } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';
import PopupModal from '../components/modal/PopupModal';

const TestPage = () => {
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
    const [brochureSrc, setBrochureSrc] = useState('');

    // Filter States
    const [floors, setFloors] = useState([]);
    const [unitTypes, setUnitTypes] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedUnitType, setSelectedUnitType] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [filteredUnits, setFilteredUnits] = useState([]);
    const [isFilterApplied, setIsFilterApplied] = useState(false);

    //For Project Single Page
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const projectDetails = Projects.data.find((proj) => proj.id === id);
        setProject(projectDetails);
    }, [id]);

    // Initialize unique floors, unit types, and price range
    useEffect(() => {
      if (project) {
          const projectUnits = Units.data.filter(unit => unit.projectId === id);

          const uniqueFloors = [...new Set(projectUnits.map(unit => unit.Floor))].filter(Boolean);
          const uniqueUnitTypes = [...new Set(projectUnits.map(unit => unit.Unit_Type))].filter(Boolean);
          const prices = projectUnits.map(unit => unit.Unit_Price).filter(Boolean);

          setFloors(uniqueFloors);
          setUnitTypes(uniqueUnitTypes);

          const minPriceValue = Math.min(...prices);
          const maxPriceValue = Math.max(...prices);
          setPriceRange({ min: minPriceValue, max: maxPriceValue });
          setMinPrice(minPriceValue);
          setMaxPrice(maxPriceValue);

          setFilteredUnits(projectUnits);
      }
    }, [project]);

    // Update filtered units based on selected filters
    useEffect(() => {
      const filtered = Units.data.filter(unit => unit.projectId === id &&
          (selectedFloor ? unit.Floor === selectedFloor : true) &&
          (selectedUnitType ? unit.Unit_Type === selectedUnitType : true) &&
          (minPrice ? unit.Unit_Price >= minPrice : true) &&
          (maxPrice ? unit.Unit_Price <= maxPrice : true)
      );
        setFilteredUnits(filtered);
    },  [id, selectedFloor, selectedUnitType, minPrice, maxPrice]);

    // Check if any filter is applied
    useEffect(() => {
      setIsFilterApplied(
        selectedFloor !== '' || 
        selectedUnitType !== '' || 
        minPrice > priceRange.min || 
        maxPrice < priceRange.max
      );
    }, [selectedFloor, selectedUnitType, minPrice, maxPrice, priceRange]);

    // Handle Reset Filter
    const resetFilter = () => {
      setSelectedFloor('');
      setSelectedUnitType('');
      setMinPrice(priceRange.min);
      setMaxPrice(priceRange.max);
      //setFilteredUnits(Units.data);
    };

    const handleUnitClick = (unit) => {
      setSelectedUnit(unit);
      setShowModal(true);
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

    const showBrochureModal = (language) => {
        setModalTitle(language);
        setModalContentType('brochure');
        toggleModal('brochureModal');
    };

    const showUnitModal = (unit) => {
        setSelectedUnit(unit);
        setModalTitle(unit?.Product_Name || 'Unit Details');
        setModalContentType('unitDetails');
        toggleModal('unitDetails');
    };

    // Handle modal toggle
    const toggleModal = (modalId) => {
      setModalStates(prevState => ({
          ...prevState,
          [modalId]: !prevState[modalId],
      }));
    };

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(prevDropdown => (prevDropdown === dropdown ? '' : dropdown));
    };

    // Full-screen modal functions
    const openFullScreenModal = () => setIsFullScreenModalOpen(true);
    const closeFullScreenModal = () => setIsFullScreenModalOpen(false);

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
                        <ul className={`dropdown-menu ${activeDropdown === 'floorPlans' ? 'show' : ''}`}>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === 'studio-type1-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('studio-type1-tab')}>
                                    Studio Type 01
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === 'studio-type2-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('studio-type2-tab')}>
                                    Studio Type 02
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === '1br-type1-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('1br-type1-tab')}>
                                    1 BR Type 01
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === '1br-type2-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('1br-type2-tab')}>
                                    1 BR Type 02
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === '3br-type1-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('3br-type1-tab')}>
                                    3 BR Type 01
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === '3br-type2-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('3br-type2-tab')}>
                                    3 BR Type 02
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === '3br-type3-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('3br-type3-tab')}>
                                    3 BR Type 03
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === '3br-type4-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('3br-type4-tab')}>
                                    3 BR Type 04
                                </button>
                            </li>
                        </ul>
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
                            <li>
                                <button
                                    className="tab-button"
                                    onClick={() => {
                                        toggleDropdown('videos');
                                        openFullScreenModal();
                                    }}>
                                    First Video
                                </button>
                            </li>
                        </ul>
                        {isFullScreenModalOpen && (
                            <div className="video-modal">
                                <div className="video-modal-content">
                                    <span className="close-button" onClick={closeFullScreenModal}>&times;</span>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/WLmXBuS1UHQ?si=XGU8ElyrZXiXpB99"
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
                            className={`tab-button dropdown-toggle ${activeDropdown === 'brochures' || modalStates['brochures'] ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown('brochures');
                            }}>
                            Brochures
                        </button>
                        <ul className={`dropdown-menu ${activeDropdown === 'brochures' || modalStates['brochures'] ? 'show' : ''}`}>
                            {['English', 'Arabic', 'Russian', 'French', 'Mandarin'].map((language) => (
                                <li key={language}>
                                    <button className="tab-button" onClick={() => showBrochureModal(language)}>
                                        {language}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <PopupModal
                        show={modalStates['brochureModal']}
                        onHide={() => toggleModal('brochureModal')}
                        title={modalTitle}
                        contentType={modalContentType}
                    />  
                    {/* Dropdown for Brochures End */}

                    {/* Dropdown for Features Start */}
                    <li className="dropdown">
                        <button
                            className={`tab-button dropdown-toggle ${activeDropdown === 'features' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown('features');
                            }}>
                            Features
                        </button>
                        <ul className={`dropdown-menu ${activeDropdown === 'features' ? 'show' : ''}`}>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === 'building-features-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('building-features-tab')}>
                                    Building Features
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === 'community-features-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('community-features-tab')}>
                                    Community Features
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/* Dropdown for Features End */}

                    {/* Dropdown for Available Units Start */}
                    <li>
                      <button
                        className={`tab-button ${activeTab === 'available-units-tab' ? 'active' : ''}`}
                        onClick={() => setActiveTab('available-units-tab')}>
                        Available Units
                      </button>
                    </li>
                    {/* Dropdown for Available Units End */}
                    
                </div>
            </ul>

            <div className="tab-content">
                {activeTab === 'exteriors-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/exterior/1.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/exterior/2.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'interiors-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                    <img src="../assets/images/wg3/interior/1.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/interior/2.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/interior/3.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/interior/4.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/interior/5.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/interior/6.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/interior/7.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'amenities-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/1.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/2.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/3.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/4.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/5.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/6.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/7.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/8.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/9.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/10.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/11.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/amenities/12.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'location-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/wg3-location.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'studio-type1-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/studio-1.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'studio-type2-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/studio-2.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '1br-type1-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/1br-01.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '1br-type2-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/1br-02.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type1-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-01.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type2-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-02.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type3-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-03.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type4-tab' && (
                    <Slider {...sliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-04.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'building-features-tab' && (
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
                )}
                {activeTab === 'community-features-tab' && (
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
                )}
                {activeTab === 'available-units-tab' && (
                <div className="single-bg-white">
                    <div className="filter-form text-center mb-5">
                        <div className="row">
                            <div className="col-10">
                                <select
                                className="tab-button text-center"
                                value={selectedFloor}
                                onChange={(e) => setSelectedFloor(e.target.value)}>
                                <option value="">Select Floor</option>
                                {floors.map((floor, index) => (
                                    <option key={index} value={floor}>{floor}</option>
                                ))}
                                </select>
                                <select
                                    className="tab-button text-center"
                                    value={selectedUnitType}
                                    onChange={(e) => setSelectedUnitType(e.target.value)}>
                                    <option value="">Select Unit Type</option>
                                    {unitTypes.map((type, index) => (
                                        <option key={index} value={type}>{type}</option>
                                    ))}
                                </select>
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
                    <div className="unit-grid row">
                        {filteredUnits.length > 0 ? (
                            filteredUnits.map((unit, index) => (
                                <div key={index} className="col-12 col-sm-4 col-md-3 custom-col-lg mb-4">
                                    <div 
                                        className="unit-card text-center" 
                                        onClick={() => handleUnitClick(unit)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <p className="unit-name">{unit.Product_Name}</p>
                                        <p className="unit-type">{unit.Unit_Type}</p>
                                        <p className="unit-price">AED {formatPrice(unit.Unit_Price)}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No units available for the selected criteria.</p>
                        )}
                    </div>

                    <Modal show={showModal} onHide={closeModal} centered dialogClassName="custom-modal-80">
                        <Modal.Header closeButton className="text-center" />
                        <PopupModal
                            contentType="unitDetails"
                            isOpen={showModal}
                            onClose={closeModal}
                            unit={selectedUnit}
                        />
                    </Modal>
                </div>
                )}
                
                
            
            </div>
        </div>
  );
};

export default TestPage;
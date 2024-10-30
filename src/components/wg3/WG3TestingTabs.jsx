import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WG3TestingTabs.css'; // Custom styles for dark mode and responsiveness
import { Link } from 'react-router-dom';
import Units from '../../json/Units.json';
import Projects from '../../json/Projects.json';
import { Modal } from 'react-bootstrap';

const WG3TestingTabs = () => {
    const [activeTab, setActiveTab] = useState('exteriors-tab');
    const [activeDropdown, setActiveDropdown] = useState(''); // General state for active dropdown
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);  // For Popup View
    const [floors, setFloors] = useState([]); // State for floors
    const [unitTypes, setUnitTypes] = useState([]); // State for unit types
    const [prices, setPrices] = useState([]); // State for price
    const [filteredUnits, setFilteredUnits] = useState([]); // State to store filtered units
    const [selectedFloor, setSelectedFloor] = useState('');
    const [selectedUnitType, setSelectedUnitType] = useState('');
    const [minPrice, setMinPrice] = useState(''); // Minimum price state
    const [maxPrice, setMaxPrice] = useState(''); // Maximum price state
    const [showPriceRange, setShowPriceRange] = useState(false); // Toggle price range input

    const [showModal, setShowModal] = useState(false);
    const [selectedUnit, setSelectedUnit] = useState(null);


    const handleUnitClick = (unit) => {
        setSelectedUnit(unit);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedUnit(null);
    };

    // Handle tab click and close dropdowns when switching tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveDropdown(''); // Close all dropdowns when switching tabs
    };
    // General toggle function for dropdowns
    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? '' : dropdown));
    };

    //Full Screen Popup Model
    const openFullScreenModal = () => {
        setIsFullScreenModalOpen(true);
    };  
    const closeFullScreenModal = () => {
        setIsFullScreenModalOpen(false);
    };

    // Close dropdowns if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown')) {
                setActiveDropdown(''); // Close all dropdowns if clicked outside
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Toggle function to show/hide price range inputs
    const togglePriceRange = () => {
        setShowPriceRange(!showPriceRange);
    };

    // Extract unique floor and unit type values from JSON data
    useEffect(() => {
        const uniqueFloors = [...new Set(Units.data.map(unit => unit.Floor))];
        const uniqueUnitTypes = [...new Set(Units.data.map(unit => unit.Unit_Type))];
        const uniquePrice = [...new Set(Units.data.map(unit => unit.Unit_Price))];
        setFloors(uniqueFloors.filter(floor => floor)); // filter out null/undefined values
        setUnitTypes(uniqueUnitTypes.filter(type => type));
        setPrices(uniquePrice.filter(price => price));
    }, []);

    // Filter units when the selectedFloor or selectedUnitType changes
    useEffect(() => {
        handleFilterChange();
    }, [selectedFloor, selectedUnitType, minPrice, maxPrice]);

    const handleFilterChange = () => {
        const units = Units.data.filter(unit =>
            (selectedFloor ? unit.Floor === selectedFloor : true) &&
            (selectedUnitType ? unit.Unit_Type === selectedUnitType : true) &&
            (minPrice ? unit.Unit_Price >= minPrice : true) &&
            (maxPrice ? unit.Unit_Price <= maxPrice : true)
        );
    
        setFilteredUnits(units);
    };

    const PrevArrow = ({ className, style, onClick }) => {
        return (
            <span
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}>←
            </span>
        );
    };
    const NextArrow = ({ className, style, onClick }) => {
        return (
            <span
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}>→
            </span>
        );
    };

    // Slider Settings
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />, // Custom prev arrow component
        nextArrow: <NextArrow />, // Custom next arrow component
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
                            className={`tab-button dropdown-toggle ${activeDropdown === 'brochures' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown('brochures');
                            }}>
                            Brochures
                        </button>
                        <ul className={`dropdown-menu ${activeDropdown === 'brochures' ? 'show' : ''}`}>
                            <li>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_English.pdf', '_blank')}>
                                    English
                                </button>
                            </li>
                            <li>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Arabic.pdf', '_blank')}>
                                    Arabic
                                </button>
                            </li>
                            <li>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Russian.pdf', '_blank')}>
                                    Russian
                                </button>
                            </li>
                            <li>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_French.pdf', '_blank')}>
                                    French
                                </button>
                            </li>
                            <li>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Mandarin.pdf', '_blank')}>
                                    Mandarin
                                </button>
                            </li>
                        </ul>
                    </li>
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
                        {/* Search Filter for Available Units */}
                        <div className="filter-form text-center mb-5">
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
                            {/* Price Range Filter */}
                                <button className="tab-button text-center" onClick={togglePriceRange}>
                                    Select Price Range
                                </button>
                                {showPriceRange && (
                                    <div className="price-range-inputs">
                                        <input
                                            type="number"
                                            className="tab-button"
                                            placeholder="Min Price"
                                            value={minPrice}
                                            onChange={(e) => setMinPrice(e.target.value)}
                                        />
                                        <input
                                            type="number"
                                            className="tab-button"
                                            placeholder="Max Price"
                                            value={maxPrice}
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                        />
                                    </div>
                                )}
                        </div>

                        {/* Available Units Grid */}
                        <div className="unit-grid row">
                            {filteredUnits.length > 0 ? (
                                filteredUnits.map((unit, index) => (
                                    <div key={index} className="col-12 col-sm-4 col-md-3 col-lg-2 mb-4">
                                        <div 
                                            className="unit-card text-center" 
                                            onClick={() => handleUnitClick(unit)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div className="unit-icon">
                                                <i className="fas fa-bed"></i>
                                            </div>
                                            <p className="unit-name">{unit.Product_Name}</p>
                                            <p className="unit-type">{unit.Unit_Type}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No units available for the selected criteria.</p>
                            )}
                        </div>

                        {/* Modal for Unit Details */}
                        <Modal show={showModal} onHide={closeModal} centered dialogClassName="custom-modal-80">
                            <Modal.Header closeButton className="justify-content-center">
                                <Modal.Title className="text-primary w-100 text-center">
                                    {selectedUnit?.Projects?.name || 'NA'}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {selectedUnit && (
                                    <div className="row">
                                        {/* Left Column: Image */}
                                        <div className="col-12 col-md-7">
                                            <div className="image-container">
                                                <img
                                                    src={selectedUnit.image || '../assets/images/2d-floor.png'} // Placeholder or dynamic image source
                                                    alt={selectedUnit.Product_Name}
                                                    className="img-fluid rounded"
                                                />
                                            </div>
                                        </div>

                                        {/* Right Column: Unit Details */}
                                        <div className="col-12 col-md-5">
                                            <div className="unit-detail-card">
                                                <h3 className="text-center mb-4 text-primary">{selectedUnit.Product_Name || 'NA'}</h3>
                                                <table className="table table-striped table-bordered">
                                                    <tbody>
                                                        <tr>
                                                            <th className="text-start">Flat Number</th>
                                                            <td className="text-end">{selectedUnit.Flat_No || 'NA'}</td>
                                                        </tr>
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
                                                            <td className="text-end">{selectedUnit.Unit_Price ? `AED ${selectedUnit.Unit_Price}` : 'NA'}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Modal.Body>
                        </Modal>

                    </div>
                )}
            
            </div>
        </div>
    );
};

export default WG3TestingTabs;
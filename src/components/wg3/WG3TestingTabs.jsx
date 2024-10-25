import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WG3TestingTabs.css'; // Custom styles for dark mode and responsiveness
import { Link } from 'react-router-dom';

const WG3TestingTabs = () => {
    const [activeTab, setActiveTab] = useState('exteriors-tab');
    const [activeDropdown, setActiveDropdown] = useState(''); // General state for active dropdown
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);  // For Videos Popup

    // Handle tab click and close dropdowns when switching tabs
    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveDropdown(''); // Close all dropdowns when switching tabs
    };

    // General toggle function for dropdowns
    const toggleDropdown = (dropdown) => {
        setActiveDropdown((prevDropdown) => (prevDropdown === dropdown ? '' : dropdown));
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

    const openFullScreenModal = () => {
        setIsFullScreenModalOpen(true);
    };  
    const closeFullScreenModal = () => {
        setIsFullScreenModalOpen(false);
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
    const singleImageSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />, // Custom prev arrow component
        nextArrow: <NextArrow />, // Custom next arrow component
    };

    // Slider settings for multiple images
    const multipleImagesSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <PrevArrow />, // Custom prev arrow component
        nextArrow: <NextArrow />, // Custom next arrow component
    };


    const [showForm, setShowForm] = useState(false); // State to manage form visibility

    // Function to toggle form visibility
    const toggleForm = () => {
        setShowForm(!showForm);
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
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Arabic.pdf', '_blank')}>
                                    Arabic
                                </button>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Russian.pdf', '_blank')}>
                                    Russian
                                </button>
                                <button
                                    className="tab-button"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_French.pdf', '_blank')}>
                                    French
                                </button>
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
                    <li className="dropdown">
                        <button
                            className={`tab-button dropdown-toggle ${activeDropdown === 'available-units' ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown('available-units');
                            }}>
                            Available Units
                        </button>
                        <ul className={`dropdown-menu available-units ${activeDropdown === 'available-units' ? 'show' : ''}`}>
                            <section className="w3l-cover-3">
                                {/* Search Icon (only visible on smaller screens) */}
                                <div className="search-icon" onClick={toggleForm}>
                                <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                                </div>
                                {/* Search Form (conditionally rendered) */}
                                <form className={`w3l-cover-3-gd search-form ${showForm ? 'show' : ''}`} method="GET" onClick={toggleForm}>
                                <span className="input-group-btn">
                                    <select className="btn btn-default" name="unitType" required>
                                    <option value="" selected>Floor</option>
                                    <option>201 Studio</option>
                                    <option>202 1 Bedroom</option>
                                    <option>203 3 Bedroom</option>
                                    <option>204 4 Bedroom</option>
                                    <option>205 2 Bedroom</option>
                                    <option>206 6 Bedroom</option>
                                    <option>207 5 Bedroom</option>
                                    </select>
                                </span>
                                <span className="input-group-btn">
                                    <select className="btn btn-default" name="community" required>
                                    <option value="" selected>Product Type</option>
                                    <option>Studio</option>
                                    <option>1 Bedroom</option>
                                    <option>2 Bedroom</option>
                                    <option>3 Bedroom</option>
                                    <option>4 Bedroom</option>
                                    <option>5 Bedroom</option>
                                    <option>6 Bedroom</option>
                                    </select>
                                </span>
                                <span className="input-group-btn">
                                    <select className="btn btn-default" name="country" required>
                                    <option value="" selected>Price</option>
                                    <option>United Arab Emirates</option>
                                    <option>United Kingdom</option>
                                    <option>New Zealand</option>
                                    <option>China</option>
                                    </select>
                                </span>
                                <button type="submit" className="btn-primary">Search</button>
                                </form>
                            </section>
                        </ul>
                    </li>
                    {/* Dropdown for Available Units End */}
                    
                </div>
            </ul>

            <div className="tab-content">
                {activeTab === 'exteriors-tab' && (
                    <Slider {...multipleImagesSliderSettings}>
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
                    <Slider {...multipleImagesSliderSettings}>
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
                    <Slider {...multipleImagesSliderSettings}>
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
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/wg3-location.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'studio-type1-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/studio-1.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === 'studio-type2-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/studio-2.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '1br-type1-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/1br-01.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '1br-type2-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/1br-02.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type1-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-01.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type2-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-02.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type3-tab' && (
                    <Slider {...singleImageSliderSettings}>
                        <div className="item">
                            <div className="card">
                                <img src="../assets/images/wg3/floor-plan/3br-03.jpg" className="img-fluid radius-image" alt="image" />
                            </div>
                        </div>
                    </Slider>
                )}
                {activeTab === '3br-type4-tab' && (
                    <Slider {...singleImageSliderSettings}>
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
            </div>
        </div>
    );
};

export default WG3TestingTabs;
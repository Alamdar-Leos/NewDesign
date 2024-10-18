import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WG3TestingTabs.css'; // Custom styles for dark mode and responsiveness
import { Link } from 'react-router-dom';

const WG3TestingTabs = () => {
    const [activeTab, setActiveTab] = useState('exteriors-tab');
    const [isFloorPlansDropdownOpen, setIsFloorPlansDropdownOpen] = useState(false); // For Floor Plans dropdown toggle
    const [isBrochuresDropdownOpen, SetIsBrochuresDropdownOpen] = useState(false); // For Brochures dropdown toggle
    const [isVideosDropdownOpen, setIsVideosDropdownOpen] = useState(false); // For Videos dropdown toggle
    const [isFullScreenModalOpen, setIsFullScreenModalOpen] = useState(false);  // For Videos Popup
    const [isAmenitiesDropdownOpen, setIsAmenitiesDropdownOpen] = useState(false); // For Videos dropdown toggle

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        // Close the dropdowns when switching to other tabs
        setIsFloorPlansDropdownOpen(false);
        SetIsBrochuresDropdownOpen(false);
        setIsVideosDropdownOpen(false);
        setIsAmenitiesDropdownOpen(false);
    };

    const toggleFloorPlansDropdown = () => {
        setIsFloorPlansDropdownOpen(!isFloorPlansDropdownOpen); // Toggle Floor Plans dropdown visibility
        SetIsBrochuresDropdownOpen(false); // Toggle Brochures dropdown visibility
        setIsVideosDropdownOpen(false); // Close Videos dropdown if open
        setIsAmenitiesDropdownOpen(false); // Close Amenities dropdown if open
    };

    const toggleVideosDropdown = () => {
        setIsVideosDropdownOpen(!isVideosDropdownOpen); // Toggle Videos dropdown visibility
        setIsFloorPlansDropdownOpen(false); // Close Floor Plans dropdown if open
        SetIsBrochuresDropdownOpen(false); // Close Brochures dropdown if open
        setIsAmenitiesDropdownOpen(false); // Close Amenities dropdown if open

    };
    const openFullScreenModal = () => {
        setIsFullScreenModalOpen(true);
    };
    
    const closeFullScreenModal = () => {
        setIsFullScreenModalOpen(false);
    };

    const toggleBrochuresDropdown = () => {
        SetIsBrochuresDropdownOpen(!isBrochuresDropdownOpen); // Toggle Brochures dropdown visibility
        setIsFloorPlansDropdownOpen(false); // Close Floor Plans dropdown if open
        setIsVideosDropdownOpen(false); // Close Videos dropdown if open
        setIsAmenitiesDropdownOpen(false); // Close Amenities dropdown if open
    };
    const toggleAmenitiesDropdown = () => {
        setIsAmenitiesDropdownOpen(!isAmenitiesDropdownOpen); // Toggle Brochures dropdown visibility
        SetIsBrochuresDropdownOpen(false); // Toggle Brochures dropdown visibility
        setIsFloorPlansDropdownOpen(false); // Close Floor Plans dropdown if open
        setIsVideosDropdownOpen(false); // Close Videos dropdown if open
    };

    const singleImageSliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <span className="custom-prev">←</span>,
        nextArrow: <span className="custom-next">→</span>,
    };

    // Slider settings for multiple images
    const multipleImagesSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        prevArrow: <span className="custom-prev">←</span>,
        nextArrow: <span className="custom-next">→</span>,
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
                            className={`tab-button dropdown-toggle ${isFloorPlansDropdownOpen ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent tab activation
                                toggleFloorPlansDropdown(); // Toggle Floor Plans dropdown
                            }}
                            aria-expanded={isFloorPlansDropdownOpen}>
                            Floor Plans
                        </button>
                        <ul className={`dropdown-menu ${isFloorPlansDropdownOpen ? 'show' : ''}`}>
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
                            className={`tab-button dropdown-toggle ${isVideosDropdownOpen ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                toggleVideosDropdown(); // Toggle Videos dropdown
                            }}
                            aria-expanded={isVideosDropdownOpen}>
                            Videos
                        </button>
                        <ul className={`dropdown-menu ${isVideosDropdownOpen ? 'show' : ''}`}>
                            <li>
                                <button
                                    className={`tab-button ${isVideosDropdownOpen ? 'active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleVideosDropdown(); // Toggle Videos dropdown
                                        openFullScreenModal();  // Open full-screen modal
                                    }}
                                    aria-expanded={isVideosDropdownOpen}>
                                    First Video
                                </button>
                            </li>
                        </ul>

                        {isFullScreenModalOpen && (
                            <div className="video-modal">
                                <div className="video-modal-content">
                                    {/* Close button */}
                                    <span className="close-button" onClick={closeFullScreenModal}>&times;</span>
                                    {/* Video iframe */}
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
                            className={`tab-button dropdown-toggle ${isBrochuresDropdownOpen ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent tab activation
                                toggleBrochuresDropdown(); // Toggle Floor Plans dropdown
                            }}
                            aria-expanded={isBrochuresDropdownOpen}>
                            Brochures
                        </button>
                        <ul className={`dropdown-menu ${isBrochuresDropdownOpen ? 'show' : ''}`}>
                            <li>
                                <button
                                    className="tab-button mr-2 mb-3 d-block"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_English.pdf', '_blank')}
                                    aria-label="Open English Brochure">
                                    English
                                </button>
                                <button
                                    className="tab-button mr-2 mb-3 d-block"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Arabic.pdf', '_blank')}
                                    aria-label="Open English Brochure">
                                    Arabic
                                </button>
                                <button
                                    className="tab-button mr-2 mb-3 d-block"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Russian.pdf', '_blank')}
                                    aria-label="Open English Brochure">
                                    Russian
                                </button>
                                <button
                                    className="tab-button mr-2 mb-3 d-block"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_French.pdf', '_blank')}
                                    aria-label="Open English Brochure">
                                    French
                                </button>
                                <button
                                    className="tab-button mr-2 mb-3 d-block"
                                    onClick={() => window.open('../assets/brochures/wg3/WG3_Mandarin.pdf', '_blank')}
                                    aria-label="Open English Brochure">
                                    Mandarin
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/* Dropdown for Brochures End */}

                    {/* Dropdown for Amenities Start */}
                    <li className="dropdown">
                        <button
                            className={`tab-button dropdown-toggle ${isAmenitiesDropdownOpen ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault(); // Prevent tab activation
                                toggleAmenitiesDropdown(); // Toggle Floor Plans dropdown
                            }}
                            aria-expanded={isAmenitiesDropdownOpen}>
                            Features
                        </button>
                        <ul className={`dropdown-menu ${isAmenitiesDropdownOpen ? 'show' : ''}`}>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === 'building-amenities-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('building-amenities-tab')}>
                                    Building Features
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`tab-button ${activeTab === 'community-amenities-tab' ? 'active' : ''}`}
                                    onClick={() => handleTabClick('community-amenities-tab')}>
                                    Community Features
                                </button>
                            </li>
                        </ul>
                    </li>
                    {/* Dropdown for Amenities End */}
                    
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
                {activeTab === 'building-amenities-tab' && (
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
                {activeTab === 'community-amenities-tab' && (
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

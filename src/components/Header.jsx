import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  // Function to toggle form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  
  return (
    <>

    {/* Header Background Design Start */}
    <section className="w3l-about-breadcrumb">
      <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
        <div className="container pt-lg-5 py-3">
          {/* You can add some breadcrumb content here if needed */}
        </div>
      </div>
    </section>
    {/* Header Background Design End */}

    {/* Header Section Start */}
    <header id="site-header" className="fixed-top">
      <div className="container">
        <div className="row">
          {/* Header Left Sidebar Section Start */}
          <div className="col-lg-4 d-flex align-items-center">
              <Link to="/">
                  <img src="../assets/images/logo.png" alt="Logo" />
              </Link>
          </div>
          {/* Header Left Sidebar Section End */}

          {/* Header Right Sidebar Section Start */}
          <div className="col-lg-8 text-right">
            <section className="w3l-cover-3">
                {/* Search Icon (only visible on smaller screens) */}
                <div className="search-icon" onClick={toggleForm}>
                  <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </div>
                {/* Search Form (conditionally rendered) */}
                <form className={`w3l-cover-3-gd search-form ${showForm ? 'show' : ''}`} method="GET">
                  <span className="input-group-btn">
                    <select className="btn btn-default" name="unitType" required>
                      <option value="" selected>Units Type</option>
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
                      <option value="" selected>Community</option>
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
                      <option value="" selected>Country</option>
                      <option>United Arab Emirates</option>
                      <option>United Kingdom</option>
                      <option>New Zealand</option>
                      <option>China</option>
                    </select>
                  </span>
                  <span className="input-group-btn">
                    <select className="btn btn-default" name="units" required>
                      <option value="" selected>Units</option>
                      <option>Available Units</option>
                      <option>Sold Units</option>
                    </select>
                  </span>
                  <button type="submit" className="btn-primary">Search</button>
                </form>
            </section>
          </div>
          {/* Header Right Sidebar Section End */}
        </div>
      </div>
    </header>
    {/* Header Section End */}
    
    </>
  );
};

export default Header;

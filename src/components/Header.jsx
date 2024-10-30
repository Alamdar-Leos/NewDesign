import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import Units from '../json/Units.json';
import Projects from '../json/Projects.json';

const Header = () => {
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const [unitTypes, setUnitTypes] = useState([]);
  const [communities, setCommunities] = useState([]);
  const [selectedFilters, setSelectedFilters] = useContext(FilterContext);
  const [countries] = useState(["United Arab Emirates", "United Kingdom", "New Zealand", "China"]);

  const toggleForm = () => setShowForm(!showForm);

  useEffect(() => {
    const unitTypes = [...new Set(Units.data.map(item => item.Unit_Type))];
    setUnitTypes(unitTypes);

    const communityNames = [...new Set(Projects.data.map(item => item.Master_Community))];
    setCommunities(communityNames);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const filters = {
      unitType: form.unitType.value,
      community: form.community.value,
      country: form.country.value,
    };
    setSelectedFilters(filters);
  };

  return (
    <>
      {/* Header Home Start */}
      {location.pathname === '/' && (
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

          <header id="site-header" className="fixed-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 d-flex justify-content-md-start justify-content-sm-end mb-3 mb-md-0">
                  <Link to="/">
                    <img src="../assets/images/logo.png" alt="Logo" />
                  </Link>
                </div>
                
                <div className="col-lg-8 col-md-9 col-sm-9 d-flex justify-content-md-end justify-content-sm-end">
                  <section className="w3l-cover-3">
                    <div className="search-icon" onClick={toggleForm}>
                      <i className="fas fa-search"></i>
                    </div>
                    <form className={`w3l-cover-3-gd search-form ${showForm ? 'show' : ''}`} onSubmit={handleSearch}>
                      <span className="input-group-btn">
                        <select className="btn btn-default" name="unitType">
                          <option value="">Units Type</option>
                          {unitTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </span>
                      <span className="input-group-btn">
                        <select className="btn btn-default" name="community">
                          <option value="">Community</option>
                          {communities.map((community, index) => (
                            <option key={index} value={community}>{community}</option>
                          ))}
                        </select>
                      </span>
                      <span className="input-group-btn">
                        <select className="btn btn-default" name="country">
                          <option value="">Country</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country}>{country}</option>
                          ))}
                        </select>
                      </span>
                      <button type="submit" className="btn-primary">Search</button>
                    </form>
                  </section>
                </div>
              </div>
            </div>
          </header>
        </>
      )}
      {/* Header Home End */}

      {/* Header Single Property Start */}
      {location.pathname === '/single-property' && (
        <header id="site-header" className="single-property">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* Header Left Sidebar Section Start */}
              <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <Link to="/">
                  <img src="../assets/images/logo.png" alt="Logo" />
                </Link>
              </div>
              {/* Header Left Sidebar Section End */}

              {/* Header Middle Section */}
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center mb-3 mb-md-0">
                <div className="post-content text-center">
                  <h1 className="title-medium heading-gold">WEYBRIDGE GARDENS 3</h1>
                </div>
              </div>
              {/* Header Middle Section End */}

              {/* Header Right Section */}
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center justify-content-lg-end justify-content-sm-end">
                <div className="post-content text-center text-md-right">
                    <Link to="/" className="btn btn-style btn-primary">
                      <span className="fa fa-home"></span> Back to Home
                    </Link>
                </div>
              </div>
              {/* Header Right Section End */}
            </div>
          </div>
        </header>
      )}
      {/* Header Single Property End */}
      
    </>
  );
};

export default Header;

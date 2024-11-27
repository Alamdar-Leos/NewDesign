import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import { fetchProjectsAPI } from '../services/API.jsx';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = ({ selectedUnit }) => {
  const location = useLocation();
  const { projectId } = useParams(); // Gets the project ID from the URL
  const [showForm, setShowForm] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [selectedFilters, setSelectedFilters] = useContext(FilterContext);
  const [projectTitle, setProjectTitle] = useState('');

  const toggleForm = () => setShowForm(!showForm);

  // Fetch Communities from API
  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const projects = await fetchProjectsAPI();
        const communityNames = [
          ...new Set(projects.map((item) => item.Master_Community_Marketing).filter(Boolean)),
        ];
        setCommunities(communityNames);
      } catch (error) {
        console.error('Error fetching communities:', error);
      }
    };
    fetchCommunities();
  }, []);

  // Fetch project title for a specific project (if projectId exists)
  useEffect(() => {
    if (selectedUnit?.Projects?.name) {
      setProjectTitle(selectedUnit.Projects.name);
      console.log(setProjectTitle);
    } else {
      setProjectTitle('Project Title'); // Default title if no project name exists
    }
  }, [selectedUnit]);

  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const filters = {
      community: form.community?.value || '',
    };
    setSelectedFilters(filters);
  };

  
  return (
    <>
      {/* Header Home Start */}
      {location.pathname === '/' && (
        <>
          <section className="w3l-about-breadcrumb">
            <div className="breadcrumb-bg breadcrumb-bg-about pt-5">
              <div className="container pt-lg-5 py-3">
                {/* Add optional breadcrumb content here */}
              </div>
            </div>
          </section>

          <header id="site-header" className="fixed-top" selectedUnit={selectedUnit} >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-3 col-sm-2 d-flex justify-content-md-start justify-content-sm-end mb-3 mb-md-0">
                  <Link to="/">
                    <img src="/assets/images/logo.png" alt="Logo" />
                  </Link>
                </div>

                <div className="col-lg-8 col-md-9 col-sm-9 d-flex justify-content-md-end justify-content-sm-end">
                  <section className="w3l-cover-3">
                    <div className="search-icon" onClick={toggleForm}>
                      <i className="fas fa-search"></i>
                    </div>

                    <form
                      className={`w3l-cover-3-gd search-form ${showForm ? 'show' : ''}`}
                      onSubmit={handleSearch}
                    >
                      <span className="input-group-btn">
                        <select className="btn btn-default" name="community">
                          <option value="">All Communities</option>
                          {communities.length > 0 ? (
                            communities.map((community, index) => (
                              <option key={index} value={community}>
                                {community}
                              </option>
                            ))
                          ) : (
                            <option disabled>Loading...</option>
                          )}
                        </select>
                      </span>
                      <button type="submit" className="btn-primary">
                        Search
                      </button>
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
      {/^\/\w+/.test(location.pathname) && (
        <header id="site-header" className="single-property">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* Header Left Sidebar Section Start */}
              <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                <Link to="/">
                  <img src="/assets/images/logo.png" alt="Logo" />
                </Link>
              </div>
              {/* Header Left Sidebar Section End */}

              {/* Header Middle Section */}
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center mb-3 mb-md-0">
                <div className="post-content text-center">
                  {/* <h1 className="title-medium heading-gold">{projectTitle || 'Project Title Alamdar'}</h1> */}
                  {/* Dynamically set project title */}
                </div>
              </div>
              {/* Header Middle Section End */}

              {/* Header Right Section */}
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex justify-content-center justify-content-lg-end justify-content-sm-end">
                <div className="social-icon d-flex justify-content-center mx-5">
                  <Link className="pt-md-2 pt-0 px-2" to="https://www.instagram.com/leosinternational/" target="_blank">
                    <FaInstagram size={30} color="##d0a85f" />
                  </Link>
                  <Link className="pt-md-2 pt-0 px-2" to="https://www.youtube.com/@leosinternational" target="_blank">
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
      )}
      {/* Header Single Property End */}
    </>
  );
};

export default Header;

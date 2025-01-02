import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import { fetchProjectsAPI } from '../services/API';

// Project Banner Image
const getProjectImage = (media) => {
  if (!media || !Array.isArray(media) || media.length === 0) {
    return '/assets/images/default.jpg'; // Fallback image
  }

  const preferredMedia =
    media.find((item) => item.subType === 'PROJECT_BANNER') ||
    media.find((item) => item.class === 'MAIN') ||
    media[0]; // Fallback to the first media item

  return preferredMedia?.filePath || '/assets/images/default.jpg';
};

const Home = () => {
  // const [groupedProjects, setGroupedProjects] = useState({});
  // const [selectedFilters] = useContext(FilterContext);
  const [projects, setProjects] = useState([]);
  const [selectedFilters] = useContext(FilterContext);

  useEffect(() => {
    const fetchAndFilterProjects = async () => {
      try {
        const projects = await fetchProjectsAPI();

        // Sort projects in descending order based on creation date
        const sortedProjects = projects.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );

        // Apply filters if any
        const filteredProjects = sortedProjects.filter((project) => {
          return (
            !selectedFilters.community || project.Master_Community_Marketing === selectedFilters.community
          );
        });

        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching and filtering projects:', error);
      }
    };

    fetchAndFilterProjects();
  }, [selectedFilters]);

  return (
    <section className="locations-1" id="locations">
      <div className="locations py-2">
        <div className="container py-lg-5 py-md-4 py-2">
          <div className="heading text-center mx-auto">
            {/* <h3 className="title-big heading-gold">OUR PROJECTS</h3> */}
            <img src="/assets/images/brand-partner.png" className="home-partnerImage" />
          </div>

          {projects.length > 0 ? (
            <div className="row pt-4">
              {projects.map((project) => (
                <div key={project._id} className="col-lg-3 col-md-6 my-4">
                  <Link to={`/${project._id}`}>
                    <div className="box16">
                      <img
                        className="img-fluid"
                        src={getProjectImage(project.media)}
                        alt={project.name || 'Project Image'}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/images/default.jpg';
                        }}
                      />
                      <div className="box-content">
                        {/* <h3 className="title">{project.name}</h3> */}
                        <span className="post">{project.Master_Community_Marketing}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              <h4>No Projects Available</h4>
            </div>
          )}
        </div>
      </div>
    </section>

  );
};

export default Home;

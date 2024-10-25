import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Data from '../json/Data.json'; // Adjust the path if necessary

const Home = () => {
  const [groupedProjects, setGroupedProjects] = useState({});

  useEffect(() => {
    // Group projects by Master_Community
    const groupByCommunity = (projects) => {
      return projects.reduce((acc, project) => {
        const community = project.Master_Community || 'Unspecified Location';
        if (!acc[community]) {
          acc[community] = [];
        }
        acc[community].push(project);
        return acc;
      }, {});
    };

    // Fetching data from the static import
    const fetchProjects = async () => {
      try {
        const grouped = groupByCommunity(Data.data); // Assuming the "data" key holds the projects array
        setGroupedProjects(grouped);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      {/* Projects Listing Start */}
      <section className="locations-1" id="locations">
        <div className="locations py-2">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="heading text-center mx-auto">
              <h3 className="title-big heading-gold">OUR PROJECTS</h3>
            </div>

            {/* Loop through grouped projects by Master_Community */}
            {Object.keys(groupedProjects).map((community) => (
              <div key={community}>
                <div className="heading mx-auto mt-5">
                  <h4 className="title-medium heading-gold">{community}</h4>
                </div>
                <div className="row pt-md-3 pt-3">
                  {groupedProjects[community].map((project) => (
                    <div key={project.id} className="col-lg-4 col-md-6 mt-4">
                      <Link to="/single-property">
                        <div className="box16">
                          <img className="img-fluid" src="/assets/images/p1.jpg" alt={project.Name || 'Project Image'} />
                          <div className="box-content">
                            <h3 className="title">{project.Name}</h3>
                            <span className="post">{`${project.Master_Community || ''}`}</span>
                            {/* <span className="post">Anticipated Completion: {project.Anticipated_Completion_Date || 'TBD'}</span> */}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Fallback if no projects found */}
            {Object.keys(groupedProjects).length === 0 && (
              <div className="text-center">
                <h4>No Projects Available</h4>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Project Listing End */}
    </>
  );
};

export default Home;

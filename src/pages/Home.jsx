import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FilterContext } from '../context/FilterContext';
import Projects from '../json/Projects.json';

const Home = () => {
  const [groupedProjects, setGroupedProjects] = useState({});
  const [selectedFilters] = useContext(FilterContext);

  useEffect(() => {
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

    const fetchProjects = () => {
      const filteredProjects = Projects.data.filter((project) => {
        return (
          (!selectedFilters.unitType || project.Unit_Type === selectedFilters.unitType) &&
          (!selectedFilters.community || project.Master_Community === selectedFilters.community) &&
          (!selectedFilters.country || project.Country === selectedFilters.country)
        );
      });
      const grouped = groupByCommunity(filteredProjects);
      setGroupedProjects(grouped);
    };

    fetchProjects();
  }, [selectedFilters]);

  return (
    <>
      <section className="locations-1" id="locations">
        <div className="locations py-2">
          <div className="container py-lg-5 py-md-4 py-2">
            <div className="heading text-center mx-auto">
              <h3 className="title-big heading-gold">OUR PROJECTS</h3>
            </div>

            {Object.keys(groupedProjects).map((community) => (
              <div key={community}>
                <div className="heading mx-auto mt-5">
                  <h4 className="title-medium heading-gold">{community}</h4>
                </div>
                <div className="row pt-md-1 pt-1">
                  {groupedProjects[community].map((project) => (
                    <div key={project.id} className="col-lg-4 col-md-6 mt-4">
                      {/* <Link to="/single-property"> */}
                      <Link to={`/${project.id}`}>
                        <div className="box16">
                          <img className="img-fluid" src="/assets/images/p1.jpg" alt={project.Name || 'Project Image'} />
                          <div className="box-content">
                            <h3 className="title">{project.Name}</h3>
                            <span className="post">{`${project.Type} - ${project.Record_Status__s || ''}`}</span>
                          </div>
                        </div>
                      </Link>
                      {/* <Link to={`/${project.id}`}>
                        <div className="box16">
                          <img className="img-fluid" src="/assets/images/p1.jpg" alt={project.Name || 'Project Image'} />
                          <div className="box-content">
                            <h3 className="title">{project.Name}</h3>
                            <span className="post">{`${project.Type} - ${project.Record_Status__s || ''}`}</span>
                          </div>
                        </div>
                      </Link> */}

                    </div>
                  ))}
                </div>
              </div>
            ))}

            {Object.keys(groupedProjects).length === 0 && (
              <div className="text-center">
                <h4>No Projects Available</h4>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );

  <></>
};

export default Home;

import React, { useEffect, useState } from 'react';
import data from '../Json/Data.json'; // Adjust the path based on your folder structure

const FetchDataComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetching data from the static import
        const fetchProjects = async () => {
            try {
                console.log('Data from JSON:', data); // Debugging
                setProjects(data.projects); // Assuming the structure of Data.json contains a "projects" key
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        
        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects List</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default FetchDataComponent;

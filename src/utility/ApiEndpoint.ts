// Base URL for the API
export const BaseUrl = 'https://backend.leosdevelopments.com/api/v1';

// API Endpoints
export const Endpoints = {
  getProjects: 'projects',
  getUnits: 'units',
  createProject: 'projects/create',
  updateProject: (id: string) => `projects/update/${id}`, // Dynamic endpoint example
};
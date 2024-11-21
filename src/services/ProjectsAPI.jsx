import axios from 'axios';

const API_URL = 'https://backend.leosdevelopments.com/api/v1/projects/all';
const API_TOKEN = '5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF';  // Replace with the actual token

export const ProjectsAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}?page=1&limit=100&device=WEB`, {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    return response.data.projects;
  } catch (error) {
    console.error("Error fetching projects. Please check the API Authentication:", error);
    return [];
  }
};

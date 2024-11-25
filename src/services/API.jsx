import axios from 'axios';

const BASE_URL = 'https://backend.leosdevelopments.com/api/v1';

// Fetch all projects
export const fetchProjectsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/projects/all`, {
      headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
      params: { device: 'WEB' },
    });
    return response.data.projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw new Error('Failed to fetch projects.');
  }
};

// Fetch available units for a specific project
export const AvailableUnitsAPI = async (projectId) => {
  if (!projectId) {
    throw new Error('Project ID is required to fetch units.');
  }

  try {
    const response = await axios.get(`${BASE_URL}/units/units/${projectId}`, {
      params: {
        page: 1,
        limit: 50,
      },
      headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching available units:', error);
    throw new Error('Failed to fetch available units.');
  }
};

// Fetch Images for Project Single Page Tabs
export const fetchProjectImagesAPI = async (projectId) => {
  if (!projectId) {
    throw new Error('Project ID is required to fetch images.');
  }

  try {
    const response = await axios.get(`${BASE_URL}/projects/project/${projectId}`, {
      params: { device: 'WEB' },
      headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
    });

    const media = response.data.media || [];

    // Filter images based on subType
    const exteriorImages = media
      .filter((item) => item.fileType === 'IMAGE' && item.subType === 'EXTERIOR_DESKTOP')
      .map((item) => ({ url: item.filePath }));

    const interiorImages = media
      .filter((item) => item.fileType === 'IMAGE' && item.subType === 'INTERIOR_DESKTOP')
      .map((item) => ({ url: item.filePath }));

    const amenitiesImages = media
      .filter((item) => item.fileType === 'IMAGE' && item.subType === 'AMENITIES_DESKTOP')
      .map((item) => ({ url: item.filePath }));
    
    const locationImage = media
      .filter((item) => item.fileType === 'IMAGE' && item.subType === 'LOCATIONS_DESKTOP')
      .map((item) => ({ url: item.filePath }));
    

    // Brochures Files
    const Brochure_ENGLISH = media
      .filter((item) => item.fileType === 'PDF' && item.subType === 'BROCHURE_EN')
      .map((item) => ({ url: item.filePath }));
    const Brochure_ARABIC = media
      .filter((item) => item.fileType === 'PDF' && item.subType === 'BROCHURE_AR')
      .map((item) => ({ url: item.filePath }));
    const Brochure_RUSSIAN = media
      .filter((item) => item.fileType === 'PDF' && item.subType === 'BROCHURE_RUS')
      .map((item) => ({ url: item.filePath }));
    const Brochur_FRENCH = media
      .filter((item) => item.fileType === 'PDF' && item.subType === 'BROCHURE_EN')
      .map((item) => ({ url: item.filePath }));
    const Brochure_MANDARIN = media
      .filter((item) => item.fileType === 'PDF' && item.subType === 'BROCHURE_EN')
      .map((item) => ({ url: item.filePath }));

    console.log('Exterior Images:', exteriorImages);
    console.log('Interior Images:', interiorImages);
    console.log('Amenities Images:', amenitiesImages);
    console.log('Location Images:', locationImage);

    console.log('English Brochures:', Brochure_ENGLISH);
    console.log('Arabic Brochures:', Brochure_ARABIC);
    console.log('Russian Brochures:', Brochure_RUSSIAN);
    console.log('French Brochures:', Brochur_FRENCH);
    console.log('Madarin Brochures:', Brochure_MANDARIN);

    return {
      exteriorImages,
      interiorImages,
      amenitiesImages,
      locationImage,
      Brochure_ENGLISH,
      Brochure_ARABIC,
      Brochure_RUSSIAN,
      Brochur_FRENCH,
      Brochure_MANDARIN,

    };
  } catch (error) {
    console.error('Error fetching project images:', error);
    throw new Error('Failed to fetch project images.');
  }
};


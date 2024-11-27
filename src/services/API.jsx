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

    //console.log('API Response:', response.data); // Log full API response for debugging

    const media = response.data.media || [];
    const rawFloorPlans = response.data.floor_plans || [];
    const locationUrl = response.data.location_url || '';

    // Parse and filter floor plans
    let floorPlans = [];
    if (rawFloorPlans.length > 0) {
      try {
        // Parse the stringified JSON inside the array
        const parsedPlans = JSON.parse(rawFloorPlans[0] || '[]');
        //console.log('Parsed Floor Plans (Before Filter):', parsedPlans);

        // Filter active plans and map images
        floorPlans = parsedPlans
          .filter((plan) => plan.Active)
          .map((plan) => {
            const images = media
              .filter(
                (item) =>
                  item.fileType === 'IMAGE' &&
                  item.subType === 'FLOOR_PLAN' &&
                  item.Unit_Type === plan.Unit_Type
              )
              .map((item) => ({ url: item.filePath }));

            return { ...plan, images };
          });
      } catch (err) {
        console.error('Error parsing floor plans:', err.message);
      }
    }

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
    const constructionImages = media
      .filter((item) => item.fileType === 'IMAGE' && item.subType === 'CONSTRUCTION_PROGRESS_DESKTOP')
      .map((item) => ({ url: item.filePath }));
    const locationImage = media
      .filter((item) => item.fileType === 'IMAGE' && item.subType === 'LOCATIONS_DESKTOP')
      .map((item) => ({ url: item.filePath }));

    // Filter and Display Brochures 
    const brochures = media
    .filter((item) => item.fileType === 'PDF' && item.class.startsWith('BROCHURE_'))
    .map((item) => {
      const language = item.class.replace('BROCHURE_', '').toUpperCase(); // Extract language from the class
      return { language, url: item.filePath };
    });
    //console.log('Filtered Brochures:', brochures);
    
    return {
      exteriorImages,
      interiorImages,
      amenitiesImages,
      constructionImages,
      locationImage,
      locationUrl,
      brochures,
      floorPlans, 
    };
  } catch (error) {
    console.error('Error fetching project images:', error);
    throw new Error('Failed to fetch project images.');
  }
};

// Fetch Payment Plans for a Project
export const paymentPlanAPI = async (projectId) => {
  if (!projectId) {
    throw new Error('Project ID is required to fetch payment plans.');
  }

  try {
    const response = await axios.get(`${BASE_URL}/projects/project/payment_plans/${projectId}`, {
      headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
    });

    const paymentPlans = response.data.data.map((plan) => {
      let afterCompletion = [];
      let beforeCompletion = [];

      // Parse 'After_Completion' if available
      if (plan.After_Completion?.length > 0) {
        try {
          afterCompletion = JSON.parse(plan.After_Completion[0] || '[]');
        } catch (err) {
          console.error('Error parsing After_Completion:', err.message);
        }
      }

      // Parse 'Before_Completion' if available
      if (plan.Before_Completion?.length > 0) {
        try {
          beforeCompletion = JSON.parse(plan.Before_Completion[0] || '[]');
        } catch (err) {
          console.error('Error parsing Before_Completion:', err.message);
        }
      }

      return {
        id: plan._id,
        name: plan.Name,
        project: plan.Project,
        bookingDeposit: plan.Booking_Deposit,
        onCompletion: plan.On_Completion,
        paymentPlanMethod: plan.Payment_Plan_Method,
        status: plan.Status,
        afterCompletion,
        beforeCompletion,
      };
    });

    console.log('Payment plans are here Alamdar : ', paymentPlans);

    return paymentPlans;
  } catch (error) {
    console.error('Error fetching payment plans:', error);
    throw new Error('Failed to fetch payment plans.');
  }
};



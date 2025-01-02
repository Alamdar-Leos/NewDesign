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
        device: 'WEB',
      },
      headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching available units:', error);
    throw new Error('Failed to fetch available units.');
  }
};

// Fetch Project Media(Images, Videos and Brochures)
export const fetchProjectMediaFilesAPI = async (projectId) => {
  if (!projectId) {
    throw new Error('Project ID is required to fetch media files.');
  }

  try {
    // Make the API call
    const response = await axios.get(`${BASE_URL}/projects/project/${projectId}`, {
      params: { device: 'WEB' },
      headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
    });

    // Log the complete response for debugging
    //console.log('API Response:', response.data);

    // Extract media and other data
    const media = response.data.media || [];
    const rawFloorPlans = response.data.floor_plans || [];
    const locationUrl = response.data.location_url || '';

    // Parse and process floor plans
    let floorPlans = [];
    if (rawFloorPlans.length > 0) {
      try {
        // Parse the outer string to extract the JSON array
        const parsedOuter = JSON.parse(rawFloorPlans[0]);

        // Ensure it's an array and process
        floorPlans = parsedOuter
          .filter((plan) => plan.Active)
          .map((plan) => {
            // Filter media to get the relevant images for this unit type
            const images = media
              .filter(
                (item) =>
                  item.fileType === 'IMAGE' &&
                  item.subType === 'FLOOR_PLANS_DESKTOP' &&
                  item.class === plan.Unit_Type
              )
              .map((item) => ({
                url: item.filePath, // Add the URL of the image
                alt: `${plan.Unit_Type} Floor Plan`, // Add an alt text
              }));

            // Return the floor plan along with the relevant images
            return { ...plan, images };
          });
      } catch (err) {
        console.error('Error parsing floor plans:', err.message);
      }
    }


    // Filter media by type and subtype
    const filterMediaByTypeAndSubType = (fileType, subType) =>
      media
        .filter((item) => item.fileType === fileType && item.subType === subType)
        .map((item) => ({ url: item.filePath }));

    const exteriorImages = filterMediaByTypeAndSubType('IMAGE', 'EXTERIOR_DESKTOP');
    const interiorImages = filterMediaByTypeAndSubType('IMAGE', 'INTERIOR_DESKTOP');
    const amenitiesImages = filterMediaByTypeAndSubType('IMAGE', 'AMENITIES_DESKTOP');
    const constructionImages = filterMediaByTypeAndSubType('IMAGE', 'CONSTRUCTION_PROGRESS_DESKTOP');
    const masterPlanImage = filterMediaByTypeAndSubType('IMAGE', 'MASTERPLAN_DESKTOP');
    const locationImage = filterMediaByTypeAndSubType('IMAGE', 'LOCATIONS_DESKTOP');

    // Filter and extract videos
    const videosUrl = media
      .filter((item) => item.fileType === 'VIDEO' && item.subType === 'VIDEOS')
      .map((item) => ({
        url: item.filePath,
        title: item.title.replace(/\.[^/.]+$/, ''), // Remove the file extension
      }));

    if (videosUrl.length === 0) {
      console.warn('No videos found for the project.');
    }

    // Filter and extract brochures
    const brochures = media
      .filter((item) => item.fileType === 'PDF' && item.class?.startsWith('BROCHURE_'))
      .map((item) => {
        const language = item.class.replace('BROCHURE_', '').toUpperCase();
        return { language, url: item.filePath };
      });

    return {
      exteriorImages,
      interiorImages,
      amenitiesImages,
      constructionImages,
      masterPlanImage,
      locationImage,
      locationUrl,
      videosUrl,
      brochures,
      floorPlans,
    };
  } catch (error) {
    console.error('Error fetching project media files:', error.message);
    throw new Error('Failed to fetch project media files.');
  }
};

// // Fetch Payment Plans for a Project
// export const paymentPlanAPI = async (projectId) => {
//   if (!projectId) {
//     throw new Error("Project ID is required to fetch payment plans.");
//   }

//   try {
//     const response = await axios.get(
//       `${BASE_URL}/projects/project/payment_plans/${projectId}`,
//       {
//         headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
//         params: { device: 'WEB' },
//       }
//     );

//     const paymentPlans = (response.data.data || [])
//       .filter((plan) => plan.Project === projectId)
//       .map((plan) => {
//         // Log raw payment plan data
//         console.log("Raw Payment Plan:", plan);

//         // Parse afterCompletion and beforeCompletion fields
//         const afterCompletion = plan.After_Completion?.length
//           ? JSON.parse(plan.After_Completion[0] || "[]")
//           : [];
//         const beforeCompletion = plan.Before_Completion?.length
//           ? JSON.parse(plan.Before_Completion[0] || "[]")
//           : [];

//         return {
//           id: plan._id,
//           name: plan.Name,
//           bookingDeposit: plan.Booking_Deposit,
//           onCompletion: plan.On_Completion,
//           paymentPlanMethod: plan.Payment_Plan_Method,
//           unitPrice: plan.Unit_Price, // Ensure unitPrice is included
//           beforeCompletion,
//           afterCompletion,
//         };
//       });

//     console.log("Processed Payment Plans:", paymentPlans);
//     return paymentPlans;
//   } catch (error) {
//     console.error("Error fetching payment plans:", error);
//     throw new Error("Failed to fetch payment plans.");
//   }
// };

// Fetch Payment Plans for a Project
export const paymentPlanAPI = async (projectId) => {
  if (!projectId) {
    throw new Error("Project ID is required to fetch payment plans.");
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/projects/project/payment_plans/${projectId}`,
      {
        headers: { Authorization: `Bearer 5ATh6co8WUuhaWp4_$45FGFGDFK%44*&23DF` },
        params: { device: "WEB" },
      }
    );

    const paymentPlans = (response.data.data || []).map((plan) => {
      // console.log("Raw Payment Plan:", plan);

      const afterCompletion = plan.After_Completion?.length
        ? JSON.parse(plan.After_Completion[0] || "[]")
        : [];
      const beforeCompletion = plan.Before_Completion?.length
        ? JSON.parse(plan.Before_Completion[0] || "[]")
        : [];

      return {
        id: plan._id,
        name: plan.Name,
        bookingDeposit: plan.Booking_Deposit || "N/A",
        onCompletion: plan.On_Completion || "N/A",
        paymentPlanMethod: plan.Payment_Plan_Method || "N/A",
        unitPrice: plan.Unit_Price != null ? plan.Unit_Price : "N/A", // Updated field extraction
        beforeCompletion,
        afterCompletion,
      };
    });

    return paymentPlans;
  } catch (error) {
    console.error("Error fetching payment plans:", error);
    throw new Error("Failed to fetch payment plans.");
  }
};


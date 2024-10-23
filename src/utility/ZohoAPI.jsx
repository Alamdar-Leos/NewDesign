export const getAccessToken = async () => {
    const url = "https://accounts.zoho.com/oauth/v2/token";
    const params = new URLSearchParams({
        client_id: "1000.ZMAEDOV6KY3P9HKJAR9MONAEE83KWD",
        client_secret: "9e4117654c3e174609ef0e418db0bec612279bd03e",
        grant_type: "refresh_token",
        refresh_token: "1000.ede775c99609dd9b3edce2224e186178.bdd554d8b59a6f7d8815eb8bc741543d",
    });

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow"
    };

    try {
        const response = await fetch(`${url}?${params}`, requestOptions);
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Error ${response.status}: ${errorData.error || 'Failed to fetch access token'}`);
        }

        const data = await response.json();
        console.log('Access token:', data.access_token);
        return data.access_token;
        } catch (error) {
            console.error('Error fetching access token:', error);
            throw error;
        }
};
export const fetchProjects = async () => {
    const accessToken = await getAccessToken(); // Assuming getAccessToken gets a valid token
    const url = 'https://www.zohoapis.com/crm/v2/Project'; // Use the correct endpoint for the "Leads" module
  
    // Define the headers and request body as in your Postman example
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(`Authorization`, `Zoho-oauthtoken ${accessToken}`);
    myHeaders.append(
      "Cookie",
      "_zcsr_tmp=16bd059d-070e-4fb2-a4cd-1fe4aa0d9397; crmcsr=16bd059d-070e-4fb2-a4cd-1fe4aa0d9397; zalb_1a99390653=3053fcfa2eedaefed51c1ef267ca1ed2"
    );
  
    // Request body (you can customize this based on what you're sending)
    const raw = JSON.stringify({
      data: [
        {
          Ad_Account: "Example Ad Account",
          Ad_Account_ID: "12345",
          Ad_Campaign: "Example Campaign",
          Ad_Campaign_ID: "67890",
          Last_Name: "Doe", // Make sure to include required fields
        },
      ],
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(url, requestOptions);
  
      // Check for errors
      if (!response.ok) {
        throw new Error(`API error: ${response.status} - ${response.statusText}`);
      }
  
      // Parse and return the response
      const data = await response.json();
      console.log('Fetched Data:', data); // Debugging
      return data; // Adjust this based on the actual response structure
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  };
  
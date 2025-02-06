import ReactGA from "react-ga4";

const TRACKING_ID = "G-CPM0LTDFSB"; //Measurement ID
ReactGA.initialize(TRACKING_ID);

// Function to get device and browser details
const getUserDeviceDetails = () => {
  const userAgent = navigator.userAgent;
  let deviceType = "Unknown Device";

  if (/Mobi|Android/i.test(userAgent)) {
    deviceType = "Mobile";
  } else if (/iPad|Tablet/i.test(userAgent)) {
    deviceType = "Tablet";
  } else {
    deviceType = "Desktop";
  }

  return {
    browser: navigator.appName,
    device: deviceType,
    userAgent,
  };
};

// Function to fetch user location (IP-based)
const getUserLocation = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    return {
      city: data.city,
      region: data.region,
      country: data.country_name,
      ip: data.ip,
    };
  } catch (error) {
    console.error("Error fetching location:", error);
    return null;
  }
};

// Track user details and send them to Google Analytics
export const trackUserVisit = async () => {
    const deviceDetails = getUserDeviceDetails();
    const locationDetails = await getUserLocation();
  
    // Set user properties (this makes them available under "User Properties")
    ReactGA.set({
      device: deviceDetails.device,
      browser: deviceDetails.browser,
      city: locationDetails?.city || "Unknown",
      country: locationDetails?.country || "Unknown",
    });
  
    // Send the event to Google Analytics
    ReactGA.event("portfolio_visit", {
      category: "User Visit",
      action: "Viewed Portfolio",
      label: `Location: ${locationDetails ? `${locationDetails.city}, ${locationDetails.country}` : "Unknown"}`,
      value: 1,
    });
  
    console.log("User Visit Tracked:", { deviceDetails, locationDetails });
  };
  

export default ReactGA;

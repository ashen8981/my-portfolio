import * as Sentry from '@sentry/react';
import { v4 as uuidv4 } from 'uuid';  // Import UUID to generate unique user IDs
import { sha256 } from 'js-sha256'; // Import SHA-256 for hashing (or use any other hashing function)

const getUserId = () => {
  let userId = localStorage.getItem("user_id");
  if (!userId) {
    userId = uuidv4(); // Generate a new UUID
    localStorage.setItem("user_id", userId);
  }
  return sha256(userId);  // Hash the user ID for security
};

const getNetworkProvider = async () => {
  try {
    const response = await fetch(`https://ipinfo.io/json?token=${process.env.REACT_APP_IPINFO_API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch network provider');
    }

    const data = await response.json();
    return data.org || "Unknown Provider";  // Returns network provider or 'Unknown Provider'
  } catch (error) {
    console.error("Failed to fetch network provider:", error);
    return "Unknown Provider";  // Default value in case of an error
  }
};

export const initializeSentry = () => {
  Sentry.init({ 
    dsn: process.env.REACT_APP_SENTRY_DSN,
  });  
  
  const userId = getUserId();  // Assign hashed user ID

  // Identify the user in Sentry without geo-related info
  Sentry.setUser({
    id: userId,
    userAgent: navigator.userAgent,
    language: navigator.language
  });

  // Log the user visit
  logUserVisit(userId);
};

export const logUserVisit = async (userId) => {
  // Get the current time in Sri Lanka (UTC+5:30)
  const sriLankaTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Colombo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(new Date());

  // Fetch network provider information
  const networkProvider = await getNetworkProvider();

  // Capture event in Sentry
  Sentry.captureEvent({
    message: `User visited the website at ${sriLankaTime} ${networkProvider}(Sri Lanka Time)`,
    level: "info",
    extra: {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      networkProvider,  
    }
  });
};

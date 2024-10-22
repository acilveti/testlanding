// services/logService.js
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL; // Get the base URL from environment variables

// Function to log 404 page visit
export const logPageVisit = async (attemptedRoute: string) => {
  try {
    console.log(API_BASE_URL);
    console.log(`visited: ${attemptedRoute}`);

    const response = await axios.post(`${API_BASE_URL}/WebTrack/PostVisitorLink`, {
      route: attemptedRoute,
    });

    return response.data;
  } catch (error) {
    console.error('Error logging page visit:', error);
  }
};

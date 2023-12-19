// Axios Instance for API calls

import axios from 'axios';

// Create a new Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost/api/v1',
  timeout: 5000, // Set your preferred timeout
});

// Add a request interceptor to attach the Keycloak token as an authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const setAuthToken = (token: string) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Delete auth header
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

export default axiosInstance;

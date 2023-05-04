
import axios from 'axios';

// Avoid hardcoding the backend URL in every request is to set a global default base URL for Axios.

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with the actual base URL of your backend server
});

export default axiosInstance;

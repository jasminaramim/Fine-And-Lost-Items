import axios from 'axios';
import useAuth from './useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => res, // Simply return the response
      async error => {
        // Check if error.response exists
        if (error.response) {
          console.log('Error caught from Axios interceptor', error.response);
          if (error.response.status === 401 || error.response.status === 403) {
            logOut();
            navigate('/login');
          }
        } else {
          // Handle network errors or server issues here (no response available)
          console.error('Network or server error:', error.message);
        }
        return Promise.reject(error); // Reject the promise to propagate the error
      }
    );
  }, [logOut, navigate]);

  return axiosSecure; // Return the axiosSecure instance
};

export default useAxiosSecure;

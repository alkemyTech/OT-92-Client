import axios from 'axios';

const config = {
  headers: {
    Group: 92,
    Authorization: null,
  },
};

//function that gets the token from local storage and returns a headers with authorization object
export const getAuthorization = () => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

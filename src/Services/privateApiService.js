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

export const privateGet = async (url, id) => {
  try {
    const endPointId = id ? `/${id}` : '';
    const resp = await axios.get(url + endPointId, getAuthorization());
    return resp;
  } catch (error) {
    console.log(error);
  }
};

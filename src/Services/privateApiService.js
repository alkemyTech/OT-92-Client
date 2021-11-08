import axios from 'axios';

const config = {
  headers: {
    Group: 92,
    Authorization: null,
  },
};

//function that gets the token from local storage and returns a headers with authorization object
export const getAuthorization = () => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};


// function that makes a post request to the api obtaining an authentication from the getAuthorization function

const ServicePostPrivate = async (section, id) => {
  const url = `http://ongapi.alkemy.org/api/${section}/${id}`;
  const configuration = getAuthorization();
  /* This getAuthorization () method was developed in ticket 69
  by Facundo Delavalle */
  let res = await axios.post(url, configuration);
  try {
    console.log(`The request was successful`);
    console.log(res.status);
  } catch (error) {
    console.log("Something went wrong: " + error)
  }
}

export { ServicePostPrivate }
import axios from 'axios';

const config = {
    headers: {
        Group: 92,
        Authorization: null,
    },
};

//Función que elimina un item mediante su sección y su Id
export const queryDeleteById = async (section, id) => {
    const url = `http://ongapi.alkemy.org/api/${section}/${id}`;
    const configuration = getAuthorization();
    /* Este metodo getAuthorization() fue desarrollado en el ticket 69
    por Facundo Delavalle */
    let res = await axios.delete(url, configuration);
    try {
        console.log(`Deleted succesfully`);
        console.log(res.status);
    } catch (error) {
        console.log("Something went wrong: " + error)
    }
};

// service for activities
export const activitiesService = {
  //fetch all activities
  getActivities: async () => {
    const data = await axios.get('http://ongapi.alkemy.org/api/activities');
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //fetch one activity
  getActivity: async (id) => {
    const data = await axios.get(
      `http://ongapi.alkemy.org/api/activities/${id}`
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //create activity
  createActivity: async (activity) => {
    const data = await axios.post(
      `http://ongapi.alkemy.org/api/activities/create`,
      activity
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //update activity
  updateActivity: async (activity) => {
    const data = await axios.put(
      `http://ongapi.alkemy.org/api/activities/${activity.id}`,
      activity
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //delete activity
  deleteActivity: async (id) => {
    const data = await axios.delete(
      `http://ongapi.alkemy.org/api/activities/${id}`
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },

    Authorization: null,
  },
};

export const queryPutData = async (section, queryObject) => {
    const url = `http://ongapi.alkemy.org/api/${section}/${queryObject.id}`
    const axiosPut = await axios.put(url, queryObject, config)
    console.log("asdss")
    try {
        console.log(axiosPut.data)
    } catch (error) {
        console.log(error)
    }
}

//function that gets the token from local storage and returns a headers with authorization object
export const getAuthorization = () => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

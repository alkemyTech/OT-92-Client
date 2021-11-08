const config = {
  headers: {
    Group: 92,

  },
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

//function that gets the token from local storage and returns a headers with authorization object
export const getAuthorization = () => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;

};

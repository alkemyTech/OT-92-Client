import axios from "axios";

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
    console.log("Deleted succesfully");
    console.log(res.status);
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
};

export const getOrganization = async () => {
  const url = `http://ongapi.alkemy.org/api/organization`;
  let res = await axios.get(url, config);
  try {
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// service for activities
export const activitiesService = {
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
      "http://ongapi.alkemy.org/api/activities/create",
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
};

// service for members
export const membersService = {
  //fetch all members
  getMembers: async () => {
    const url = process.env.REACT_APP_API_URL_GET_MEMBERS;
    const data = await axios.get(url);
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //fetch one member
  getMember: async (id) => {
    const url = process.env.REACT_APP_API_URL_GET_MEMBERS + '/' + id;
    const data = await axios.get(url);
    
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //create member
  createMember: async (member) => {
    const data = await axios.post(
      "http://ongapi.alkemy.org/api/members/create",
      member
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //update member
  updateMember: async (member) => {
    const data = await axios.put(
      `http://ongapi.alkemy.org/api/members/${member.id}`,
      member
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //delete member
  deleteMember: async (id) => {
    const data = await axios.delete(
      `http://ongapi.alkemy.org/api/members/${id}`
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

// service for categories
export const categoriesService = {
  //fetch all categories
  getCategories: async () => {
    const data = await axios.get("http://ongapi.alkemy.org/api/categories");
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //fetch one category
  getCategory: async (id) => {
    const data = await axios.get(
      `http://ongapi.alkemy.org/api/categories/${id}`
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //create category
  createCategory: async (category) => {
    const data = await axios.post(
      "http://ongapi.alkemy.org/api/categories",
      category
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //update category
  updateCategory: async (category) => {
    const data = await axios.put(
      `http://ongapi.alkemy.org/api/categories/${category.id}`,
      category
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  //delete category
  deleteCategory: async (id) => {
    const data = await axios.delete(
      `http://ongapi.alkemy.org/api/categories/${id}`
    );
    try {
      return data;
    } catch (error) {
      console.log(error);
    }
  }
};


export const queryPutData = async (section, queryObject) => {
  const url = `http://ongapi.alkemy.org/api/${section}/${queryObject.id}`;
  const axiosPut = await axios.put(url, queryObject, config);
  console.log("asdss");
  try {
    console.log(axiosPut.data);
  } catch (error) {
    console.log(error);
  }
};

//function that gets the token from local storage and returns a headers with authorization object
export const getAuthorization = () => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const privateGet = async (url, id) => {
  try {
    const endPointId = id ? `/${id}` : "";
    const resp = await axios.get(url + endPointId, getAuthorization());
    return resp;
  } catch (error) {
    console.log(error);
  }
};

// function that makes a post request to the api obtaining an authentication from the getAuthorization function

export const ServicePostPrivate = async (section, id) => {
  const url = `http://ongapi.alkemy.org/api/${section}/${id}`;
  const configuration = getAuthorization();
  /* This getAuthorization () method was developed in ticket 69
  by Facundo Delavalle */
  let res = await axios.post(url, configuration);
  try {
    console.log("The request was successful");
    console.log(res.status);
  } catch (error) {
    console.log("Something went wrong: " + error);
  }
};

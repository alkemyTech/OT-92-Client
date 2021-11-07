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
}

//function that gets the token from local storage and returns a headers with authorization object
export const getAuthorization = () => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};

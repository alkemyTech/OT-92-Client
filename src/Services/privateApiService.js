import axios from 'axios';

const config = {
    headers: {
        Group: 92             //Aqui va el ID del equipo!!
    }
}

const queryPutData = (queryObject) => {
    const url = "http://ongapi.alkemy.org/api/"
    const axiosPut = axios.put(url, queryObject, config)
    try {
        console.log(axiosPut.data)
    } catch (error) {
        console.log(error)
    }
}

export { queryPutData }
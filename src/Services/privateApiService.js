import axios from 'axios';

const config = {
    headers: {
        Group: 92                //Aqui va el ID del equipo!!
    }
}

const queryPutData = async (section, queryObject) => {
    const url = `http://ongapi.alkemy.org/api/${section}/${queryObject.id}`
    const axiosPut = await axios.put(url, queryObject, config)
    console.log("asdss")
    try {
        console.log(axiosPut.data)
    } catch (error) {
        console.log(error)
    }
}

export { queryPutData }
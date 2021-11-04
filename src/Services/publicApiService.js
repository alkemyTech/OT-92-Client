import axios from 'axios';


const config = {
    headers: {
        Group: 92                //Aqui va el ID del equipo!!
    }
}


const queryGetData = async (section, id) => {
    const url = `http://ongapi.alkemy.org/api/${section}/${id}`
    let res = await axios.get(url, config);
    try {
        return res.data
    } catch (error) {
        console.log(error)
    }
}


const queryPostCreateData = async (section, queryObject) => {
    const url = `http://ongapi.alkemy.org/api/${section}`
    const data = await axios.post(url, queryObject, config)
    try {

        console.log(data)
        console.log(queryObject)
    }
    catch (error) {
        console.log(error)
    }
}
const queryPostEditData = async (section, queryObject) => {
    const url = `http://ongapi.alkemy.org/api/${section}/${queryObject.id}`
    const data = await axios.post(url, queryObject, config)
    try {

        console.log(data)
        console.log(queryObject)
    }
    catch (error) {
        console.log(error)
    }
}

const queryGetObjectData = async (section, ID) => {

    const url = `http://ongapi.alkemy.org/api/${section}/${ID}`
    let res = await axios.get(url, config);
    try {
        return res.data
    } catch (error) {
        console.log(error)
    }
}
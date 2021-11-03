import axios from 'axios';


const config = {
    headers: {
        Group: 92                //Aqui va el ID del equipo!!
    }
}


const queryGetData = async (section) => {
    const url = `http://ongapi.alkemy.org/api/${section}`
    let res = await axios.get(url, config);
    try {
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export { queryGetData };
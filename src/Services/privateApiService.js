import axios from 'axios';

const config = {
    headers: {
        Group: 92,
        Authorization: null,
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

export default Get

const queryDeleteById = async (section, id) => {
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
export { queryDeleteById };
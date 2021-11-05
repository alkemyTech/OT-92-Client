import axios from 'axios';

const config = {
    headers: {
        Group: 92,                //Aqui va el ID del equipo!!
    }
}

export const GetWithId = async (link, id) => {
 const pageId = id ? id : '';
    await axios.get(`${link}/${pageId}`).then(res => console.log(res))
    .catch(err => console.log(err))
}


export const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

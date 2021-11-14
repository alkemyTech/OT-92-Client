import axios from 'axios';
import httpClient from './httpClient';


const config = {
  headers: {
    Group: 92, //Aqui va el ID del equipo!!
  },
};

export const queryGetData = async (section, id) => {
    const url = `http://ongapi.alkemy.org/api/${section}/${id}`
    let res = await axios.get(url, config);
    try {
        return res.data
    } catch (error) {
        console.log(error)
    }
}


export const queryPostCreateData = async (section, queryObject) => {
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
export const queryPostEditData = async (section, queryObject) => {
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

export const queryGetObjectData = async (section, ID) => {

    const url = `http://ongapi.alkemy.org/api/${section}/${ID}`
    let res = await axios.get(url, config);
    try {
        return res.data
    } catch (error) {
        console.log(error)
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
    .catch(err => console.log(err));
};

const publicPost = async (url, body) => {
  //creamos un método POST para que pueda ser utilizado
  //en toda la app
  try {
    const response = await axios({
      method: 'POST',
      url: url,
      data: body,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const newsCreate = body => httpClient.post('/news', body);
const newsUpdate = body => httpClient.put(`/news/${body.id}`, body);
const newsDelete = body => httpClient.delete(`/news/${body.id}`, body);
const newsGet = body => {
  const newsId = body.id ? `/${body.id}` : '';
  const resp = axios.get('/news' + newsId);
  return resp;
};


export {
    newsCreate,
    newsUpdate,
    newsDelete,
    newsGet
}

export default publicPost
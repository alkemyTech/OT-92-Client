import axios from 'axios';
import httpClient from './httpClient';

const config = {
  headers: {
    Group: 92, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/users', config)
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
export default publicPost;

const newsCreate = body => httpClient.post('/news', body);
const newsUpdate = body => httpClient.put(`/news/${body.id}`, body);
const newsDelete = body => httpClient.delete(`/news/${body.id}`, body);
const newsGet = body => {
  const newsId = body.id ? `/${body.id}` : '';
  const resp = axios.get('/news' + newsId);
  return resp;
};


export default {
    newsCreate,
    newsUpdate,
    newsDelete,
    newsGet
}


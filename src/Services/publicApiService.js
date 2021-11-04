import axios from 'axios';

const config = {
    headers: {
        Group: 92               //Aqui va el ID del equipo!!
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const publicPost = async (url, body) => {
     try{
       const response = await axios({
           method: 'POST',
           url: url,
           data: body
       })
       console.log(response)
       return response
     }catch (err){
         console.log(err)
     }
}
export default publicPost


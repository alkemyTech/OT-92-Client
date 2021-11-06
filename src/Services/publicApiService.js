import axios from 'axios';

const config = {
    headers: {
<<<<<<< HEAD
        Group: 92               //Aqui va el ID del equipo!!
=======
        Group: 92                //Aqui va el ID del equipo!!
>>>>>>> 7f3bc0072470029179aae502e49c1753b1481993
    }
}

const Get = () => {
    axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

const publicPost = async (url, body) => {    //creamos un método POST para que pueda ser utilizado
                                            //en toda la app
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


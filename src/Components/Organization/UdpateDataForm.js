import React, { useState, useEffect } from 'react';
import '../FormStyles.css';

//se puede hacer con formik esto? preguntar

/*
Criterios de aceptacion: Al ingresar a la ruta /backoffice/organization/edit se mostará el formulario para editar los campos name, logo, shortDescription, longDescription y links de redes sociales. El campo shortDescription debe poder editarse con CKEditor. Todos los campos son obligatorios, y deben validarse al hacer submit. En el caso de que todos estén completados, dejar el método vacío, ya que posteriormente se realizará una petición a la API

Validaciones:

Los campos name, logo, shortDescription y longDescription son obligatorios

Logo deberá tener un formato .png o .jpg

Los links de redes sociales deberán tener un formato de URL válido

*/

const UpdateDataForm = (props) => {
  //const fileInputRef = useRef()
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      console.log(image);
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);

  return (
    <div className='mt-5'>
      <h1 className='text-center'>Update Data Form</h1>
      <form action='' className='form-container mt-5 form-group'>
        <label htmlFor='name' className=''>
          Name
        </label>
        <input type='text' name='name' id='name' className='form-control' />
        <label htmlFor='logo'>Logo</label>
        <input
          type='file'
          accept='image/png, image/jpeg'
          name='logo'
          id='logo'
          className='form-control'
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substring(0, 5) === 'image') {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
        {imagePreview && <img src={imagePreview} alt='organization logo' />}

        <label htmlFor='shortDescription'>Short Description</label>
        <input
          type='text'
          name='shortDescription'
          id='shortDescription'
          className='form-control'
        />
        <label htmlFor='longDescription'>Long Description</label>
        <input
          type='text'
          name='longDescription'
          id='longDescription'
          className='form-control'
        />
        <label htmlFor='links'>Link de Instagram</label>
        <input
          type='text'
          name='linkInstagram'
          id='linkInstagram'
          className='form-control'
        />
        <label htmlFor='links'>Link de Facebook</label>
        <input
          type='text'
          name='linkFacebook'
          id='linkInstagram'
          className='form-control'
        />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateDataForm;

import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../FormStyles.css';

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
  const [shortDescription, setShortDescription] = useState();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setImagePreview(null);
    }
  }, [image]);

  const onEditorChange = (event, editor) => {
    const data = editor.getData();
    //setShortDescription(data);
    formik.values.shortDescription = data;
  };

  const formik = useFormik({
    initialValues: {
      name: props.organization ? props.organization.name : '',
      logo: props.organization ? props.organization.logo : '',
      shortDescription: props.organization
        ? props.organization.shortDescription
        : '',
      longDescription: props.organization
        ? props.organization.longDescription
        : '',
      linkInstagram: props.organization ? props.organization.linkInstagram : '',
      linkFacebook: props.organization ? props.organization.linkFacebook : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      logo: Yup.string().required('El logo es obligatorio'),
      shortDescription: Yup.string().required(
        'La descripción corta es obligatoria'
      ),
      longDescription: Yup.string().required(
        'La descripción larga es obligatoria'
      ),
      linkInstagram: Yup.string().url('El link debe ser una URL válida'),
      linkFacebook: Yup.string().url('El link debe ser una URL válida'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='mt-5'>
      <h1 className='text-center'>Update Data Form</h1>
      <form
        onSubmit={formik.handleSubmit}
        className='form-container form-group'
      >
        <label htmlFor='name' className=''>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='form-control mt-2'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor='logo'>Logo</label>
        <div className='d-flex justify-content-between'>
          <input
            style={image && { height: '2.4rem', width: '55rem' }}
            type='file'
            accept='image/png, image/jpeg'
            name='logo'
            id='logo'
            className='form-control'
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substring(0, 5) === 'image') {
                setImage(file);
                formik.values.logo = file;
              } else {
                setImage(null);
              }
            }}
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt='organization logo'
              style={{ width: '200px', height: '100px' }}
            />
          )}
        </div>
        <label>Short Description</label>
        <CKEditor
          name='shortDescription'
          id='shortDescription'
          editor={ClassicEditor}
          data={shortDescription}
          onChange={onEditorChange}
        />

        <label htmlFor='longDescription'>Long Description</label>
        <input
          type='text'
          name='longDescription'
          id='longDescription'
          className='form-control'
          value={formik.values.longDescription}
          onChange={formik.handleChange}
        />
        <label htmlFor='linkInstragram'>Link de Instagram</label>
        <input
          type='text'
          name='linkInstagram'
          id='linkInstagram'
          className='form-control'
          value={formik.values.linkInstagram}
          onChange={formik.handleChange}
        />
        <label htmlFor='linkFacebook'>Link de Facebook</label>
        <input
          type='text'
          name='linkFacebook'
          id='linkFacebook'
          className='form-control'
          value={formik.values.linkFacebook}
          onChange={formik.handleChange}
        />

        {shortDescription && <h1> {shortDescription} </h1>}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateDataForm;

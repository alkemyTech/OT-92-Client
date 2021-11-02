import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../FormStyles.css';

const UpdateDataForm = (props) => {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState();

  //image preview
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
    formik.values.shortDescription = data.replace(/<[^>]*>?/gm, '');
  };

  //function that converts image to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: props.organization ? props.organization.name : '',
      logo: props.organization ? props.organization.logo : null,
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
      linkInstagram: Yup.string()
        .url('El link debe ser una URL válida')
        .required('El link de Instagram es obligatorio'),
      linkFacebook: Yup.string()
        .url('El link debe ser una URL válida')
        .required('El link de Facebook es obligatorio'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className='mt-5'>
      <h1 className='text-center'>Editar datos de la organizacion</h1>
      <form
        onSubmit={formik.handleSubmit}
        className='form-container form-group mt-5'
      >
        <label htmlFor='name' className=''>
          Nombre
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className={
            formik.touched.name && formik.errors.name
              ? 'mt-2 form-control is-invalid'
              : 'mt-2 form-control'
          }
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className='text-danger'>{formik.errors.name}</div>
        ) : null}
        <label htmlFor='logo'>Logo</label>
        <div className='d-flex justify-content-between'>
          <input
            required
            style={image && { height: '2.4rem', width: '45rem' }}
            type='file'
            accept='image/png, image/jpeg'
            name='logo'
            id='logo'
            className={
              formik.touched.logo && formik.errors.logo
                ? 'form-control is-invalid'
                : 'form-control'
            }
            onBlur={formik.handleBlur}
            onChange={async (event) => {
              const file = event.target.files[0];
              if (file) {
                setImage(file);
                const logo = await convertToBase64(file);
                formik.setFieldValue('logo', logo);
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
        {formik.errors.logo && formik.touched.logo ? (
          <div className='text-danger'>{formik.errors.logo}</div>
        ) : null}
        <label>Descripcion corta</label>
        <CKEditor
          name='shortDescription'
          id='shortDescription'
          editor={ClassicEditor}
          data={formik.values.shortDescription}
          onChange={onEditorChange}
        />
        {formik.errors.shortDescription && formik.touched.shortDescription ? (
          <div className='text-danger'>{formik.errors.shortDescription}</div>
        ) : null}

        <label htmlFor='longDescription'> Descripcion larga</label>
        <input
          type='text'
          name='longDescription'
          id='longDescription'
          className={
            formik.touched.longDescription && formik.errors.longDescription
              ? 'form-control is-invalid'
              : 'form-control'
          }
          value={formik.values.longDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.longDescription && formik.touched.longDescription ? (
          <div className='text-danger'>{formik.errors.longDescription}</div>
        ) : null}
        <label htmlFor='linkInstragram'>Link de Instagram</label>
        <input
          type='text'
          name='linkInstagram'
          id='linkInstagram'
          className={
            formik.touched.linkInstagram && formik.errors.linkInstagram
              ? 'form-control is-invalid'
              : 'form-control'
          }
          value={formik.values.linkInstagram}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.linkInstagram && formik.touched.linkInstagram ? (
          <div className='text-danger'>{formik.errors.linkInstagram}</div>
        ) : null}

        <label htmlFor='linkFacebook'>Link de Facebook</label>
        <input
          type='text'
          name='linkFacebook'
          id='linkFacebook'
          className={
            formik.touched.linkFacebook && formik.errors.linkFacebook
              ? 'form-control is-invalid'
              : 'form-control'
          }
          value={formik.values.linkFacebook}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.linkFacebook && formik.touched.linkFacebook ? (
          <div className='text-danger'>{formik.errors.linkFacebook}</div>
        ) : null}
        <button
          type='submit'
          style={{ width: '10rem' }}
          className='btn btn-primary m-auto'
        >
          Cargar
        </button>
      </form>
    </div>
  );
};

export default UpdateDataForm;

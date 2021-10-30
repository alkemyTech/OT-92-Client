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
      linkInstagram: Yup.string()
        .url('El link debe ser una URL válida')
        .required('El link de Instagram es obligatorio'),
      linkFacebook: Yup.string()
        .url('El link debe ser una URL válida')
        .required('El link de Facebook es obligatorio'),
    }),
    onSubmit: async (values) => {
      values.shortDescription.replace(/<[^>]*>/g, '');
      await convertToBase64(values.logo);
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
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name ? (
          <div className='text-danger'>{formik.errors.name}</div>
        ) : null}
        <label htmlFor='logo'>Logo</label>
        <div className='d-flex justify-content-between'>
          <input
            required
            style={image && { height: '2.4rem', width: '55rem' }}
            type='file'
            accept='image/png, image/jpeg'
            name='logo'
            id='logo'
            className='form-control'
            onBlur={formik.handleBlur}
            onChange={(event) => {
              const file = event.target.files[0];
              if (file) {
                setImage(file);
                formik.setFieldValue('logo', file);
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
        <label>Short Description</label>
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

        <label htmlFor='longDescription'>Long Description</label>
        <input
          type='text'
          name='longDescription'
          id='longDescription'
          className='form-control'
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
          className='form-control'
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
          className='form-control'
          value={formik.values.linkFacebook}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.linkFacebook && formik.touched.linkFacebook ? (
          <div className='text-danger'>{formik.errors.linkFacebook}</div>
        ) : null}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateDataForm;

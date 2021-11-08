/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import '../../Components/FormStyles.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  newsCreate,
  newsUpdate,
  newsDelete,
  newsGet,
} from '../../Services/publicApiService';

const editorConfiguration = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'link',
    'bulletedList',
    'numberedList',
    'blockQuote',
    'undo',
    'redo',
  ],
};

const NewsForm = () => {
  const { id } = useParams(); //Esto valida si se esta editando o creando un post mediante paso de parametros
  const refP = useRef(); //cambia la visibilidad del <p> "insertar imagen"
  const urlCategoria = 'http://ongapi.alkemy.org/public/api/categories';
  const urlEditarNovedad = `http://ongapi.alkemy.org/public/api/news/${id}`;
  const urlCrearNovedad = 'http://ongapi.alkemy.org/public/api/news';
  const [categorias, setcategorias] = useState([]); //obtiene las categorias del endpoint

  const datosForm = {
    category: '',
    title: '',
    content: '',
    img: '',
    id: id || '',
  };

  const [initialValues, setInitialValues] = useState(datosForm);

  const handleChange = e => {
    //actualiza el estado de title y category
    if (e.target.name === 'title') {
      setInitialValues({ ...initialValues, title: e.target.value });
    }
    if (e.target.name === 'category') {
      setInitialValues({ ...initialValues, category: e.target.value });
    }
  };

  const contentChange = (e, editor) => {
    //actualiza el estado de content
    const data = editor.getData();
    setInitialValues({
      ...initialValues,
      content: data,
    });
  };

  const handleSubmit = e => {
    //envia los datos dependiendo del id hace una peticion post o put
    const datosConEtiquetas = initialValues.content;
    const datosSinEtiquetas = datosConEtiquetas.replace(/<[^>]+>/g, ''); //convierte a texto plano el content
    console.log(initialValues);
    if (!id) {
      axios
        .post(urlCrearNovedad, {
          name: initialValues.title,
          image: initialValues.img,
          content: datosSinEtiquetas,
          category_id: initialValues.category,
        })
        .then(res => {
          if (res.status === 200) {
            alert('El post se creó correctamente');
            return setInitialValues(datosForm);
          }
        })
        .catch(err => {
          alert(err);
        });
    }
    if (id) {
      axios
        .put(urlEditarNovedad, {
          name: initialValues.title,
          image: initialValues.img,
          content: datosSinEtiquetas,
          category_id: initialValues.category,
        })
        .then(res => {
          if (res.status === 200) {
            alert('El post se actualizó correctamente');
            return setInitialValues(datosForm);
          }
        })
        .catch(err => {
          alert(err);
        });
    }
    e.preventDefault();
  };

  const visualizar_img = e => {
    //maneja la visualizacion previa de la imagen adjuntada
    const imageFile = e.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setInitialValues({
      ...initialValues,
      img: imageUrl,
    });
    refP.current.className = 'hidden';
  };

  useEffect(() => {
    const DatosEditNew = async () => {
      const DataInicialCategoria = await axios.get(urlCategoria),
        categoriaData = await DataInicialCategoria.data.data;
      setcategorias(categoriaData);

      if (id) {
        const datosIniciales = await axios.get(urlEditarNovedad),
          EditNewData = datosIniciales.data.data,
          { name, content } = await EditNewData;
        if (name) setInitialValues({ ...initialValues, title: name });
        if (content) setInitialValues({ ...initialValues, content: content });
      }
    };

    DatosEditNew();
  }, [urlCategoria]);

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="title" className="label-Title-New-News">
          <h2 className="titulo-Titulo-New-News">Titulo</h2>
          <input
            required
            className="input-field"
            type="text"
            name="title"
            value={initialValues.title || ''}
            onChange={handleChange}
          ></input>
        </label>
        <h2 className="titulo-Content-New-News">Post</h2>
        <CKEditor
          config={editorConfiguration}
          editor={ClassicEditor}
          data={initialValues.content}
          onChange={contentChange}
        />
        <h2 className="categorias-New-News">Categorias</h2>
        <select
          required
          className="select-field"
          name="category"
          value={initialValues.category || ''}
          onChange={handleChange}
        >
          <option value="">Select category</option>
          {categorias
            ? categorias.map(el => {
                return (
                  <option key={el.id} value={el.name}>
                    {el.name}
                  </option>
                );
              })
            : false}
        </select>
        <label className="label-Img-new-News">
          <p ref={refP}>Inserta una imagen</p>
          <input type="file" name="imagen" onChange={visualizar_img} />
          <img
            className="img-Render"
            src={initialValues.img}
            alt={initialValues.img}
          />
        </label>
        <button className="submit-btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
};

export default NewsForm;

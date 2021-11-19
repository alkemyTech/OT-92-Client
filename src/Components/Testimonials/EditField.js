import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {ErrorMessage} from "formik";

const editorConfiguration = {
  toolbar: {
    items: [
      "|",
      "heading",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",                                // acá vemos la configuración de las herramientas que tendremos en el editor
      "outdent",
      "indent",
      "|",
      "blockQuote",
      "insertTable",
      "mediaEmbed",
      "undo",
      "redo",
    ],
  },
  language: "es",
  image: {
    toolbar: [
      "imageTextAlternative",
      "imageStyle:inline",
      "imageStyle:block",
      "imageStyle:side",
    ],
  },
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  licenseKey: "",
};
const EditField = ({ formik }) => {
  const inputHandler = (event, editor) => {
    formik.setFieldValue("description", editor.getData());
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        onReady={(editor) => {
          console.log("ck is ready to use");
        }}
        onChange={inputHandler}
      />
      <ErrorMessage
        name="description"
        render={(msg) => <span style={{color:"red"}}> {msg} </span>}
      />
    </>
  );
};

export default EditField;
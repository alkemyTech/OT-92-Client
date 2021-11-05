import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ErrorMessage } from "formik";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { useState } from "react";
const editorConfiguration = {
  toolbar: {
    items: [
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "blockQuote",
      "undo",
      "redo",
    ],
  },
  language: "es",
  format_p: { element: "p", attributes: { class: "text-center" } },
};
const EditorField = ({ formik,initialValue }) => {
  const inputHandler = (event, editor) => {
    formik.setFieldValue("description", editor.getData());
  };
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        onReady={(editor) => {
          console.log("ck editor is ready: " + initialValue );
          editor.setData(initialValue)
        }}
        onChange={inputHandler}
      />
      <ErrorMessage
        name="description"
        render={(msg) => <span className="error"> {msg} </span>}
      />
    </>
  );
};

export default EditorField;

import { CKEditor } from "@ckeditor/ckeditor5-react";
import { ErrorMessage } from "formik";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
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
const EditorField = ({ formik, initialValues, setInitialValues }) => {
  const inputHandler = (event, editor) => {
    //formik.setFieldValue("description", editor.getData());
    setInitialValues({...initialValues, description: editor.getData()});
    
  };
  return (
    <>
      <CKEditor
        editor={ClassicEditor}
        config={editorConfiguration}
        onReady={(editor) => {
          editor.setData(initialValues);
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

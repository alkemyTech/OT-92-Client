import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import React, { useState } from "react";

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
const EditField = () => {
  const [dataX, setData] = useState("");

  console.log(dataX);
  return (
    <>
      <CKEditor
        editor={Editor}
        config={editorConfiguration}
        onReady={(editor) => {
          console.log("ck is ready to use");
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
        }}
      />
    </>
  );
};

export default EditField;
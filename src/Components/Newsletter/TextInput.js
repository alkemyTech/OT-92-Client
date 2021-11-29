import React from "react";
import { useField } from "formik";

//Componente reutilizable para inputs de form de newsletter
export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="input-field" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error_message_input">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
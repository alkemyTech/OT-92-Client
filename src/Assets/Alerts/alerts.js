import Swal from "sweetalert2";

export const successAlert = (props) => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: props.title,
    text: props.text,
    showConfirmButton: false,
    timer: props.time
  });
};

export const errorAlert = (props) => {
  Swal.fire({
    icon: "error",
    title: props.title,
    text: props.text,
    confirmButtonColor: "#d33",
  });
};

export const infoAlert = (props) => {
  Swal.fire({
    position: "center",
    icon: "info",
    title: props.title,
    text: props.text,
    showConfirmButton: true,
    timer: props.time
  });
};

export const confirmAlert = (props) => {
  Swal.fire({
    title: props.title,
    text: props.warning,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Si, Eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      props.action();
      Swal.fire(
        "Eliminado!",
        props.confirmation,
        "success"
      );
    }
  });
};
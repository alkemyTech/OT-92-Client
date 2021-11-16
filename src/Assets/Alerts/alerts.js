import Swal from 'sweetalert2'

export const successAlert = (props) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La acción ha sido exitosa',
        showConfirmButton: false,
        timer: 2000
      })
}

export const errorAlert = () => {
    
}

export const infoAlert = () => {
    
}

export const confirmAlert = () => {
    
}
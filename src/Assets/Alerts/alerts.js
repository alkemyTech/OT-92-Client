import Swal from 'sweetalert2'

export const success = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'La acción ha sido exitosa',
        showConfirmButton: false,
        timer: 2000
      })
}

export const error = () => {
    
}

export const info = () => {
    
}

export const confirm = () => {
    
}
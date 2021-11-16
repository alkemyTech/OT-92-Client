import Swal from 'sweetalert2'

export const successAlert = (props) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: props.title,
        showConfirmButton: false,
        timer: props.time
    })
}

export const errorAlert = () => {
    
}

export const infoAlert = () => {
    
}

export const confirmAlert = () => {
    
}
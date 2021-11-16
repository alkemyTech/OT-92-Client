import Swal from 'sweetalert2'

export const successAlert = (props) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: props.title,
        text: props.text,
        showConfirmButton: false,
        timer: props.time
    })
}

export const errorAlert = () => {
    
}

export const infoAlert = (props) => {
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: props.title,
        text: props.text,
        showConfirmButton: true,
        timer: props.time
    })
}

export const confirmAlert = () => {
    
}
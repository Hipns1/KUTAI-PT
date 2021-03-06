import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import Swal from "sweetalert2"
import { google } from "../../Firebase/credentials"
import { typesLogin } from "../types/types"



//Logout
export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then((user) => {
                dispatch(logoutSync())
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'No se pudo cerrar sesión',
                    'error'
                )
            })
    }
}
export const logoutSync = () => {
    return {
        type: typesLogin.logout
    }
}

//Login con Google
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                localStorage.setItem('email', user.email)
                Swal.fire({
                    icon: 'success',
                    title: `Bienvenido ${user.displayName}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'Este email ya fue registrado, por favor intente con una cuenta de Google diferente',
                    'error'
                )
            })
    }
}

//validar usuario y Contraseña
export const loginEmailPassAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSincronico(user.email, user.password))
                Swal.fire({
                    icon: 'success',
                    title: `Bienvenido ${user.displayName}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'Usuario existente o contraseña incorrecta',
                    'error'
                )
            })

    }
}
export const loginSincronico = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email, password
        }
    }
}
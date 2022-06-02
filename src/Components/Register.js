import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { registerAsync } from '../Redux/actions/actionRegister';
import styles from "../Styles/Login.module.scss";
import { motion } from 'framer-motion';
import logologin from "../Styles/Images/login.png"

//VALIDACIONES DE CADA INPUT
const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'El nombre debe tener al menos 2 caracteres')
        .max(50, 'El nombre debe tener como máximo 50 caracteres')
        .required('Este campo es obligatorio'),
    email: Yup.string()
        .email('Ingrese un correo válido')
        .required('Este campo es obligatorio'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(50, 'La contraseña debe tener como máximo 50 caracteres')
        .required('Este campo es obligatorio'),
    pass2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Este campo es obligatorio'),
});


const Register = () => {
    const dispatch = useDispatch();

    //FUNCION PARA ENVIAR LOS DATOS DEL FORMULARIO
    const handleSubmit = (values) => {
        localStorage.setItem('email', values.email)
        dispatch(registerAsync(values.email, values.password, values.nombre))
    }

    return (
        <div className={styles.login_container}>

            <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className={styles.login_img}>
                <img src={logologin} alt="mewto" />
            </motion.div>

            <motion.div
                className={styles.login_container__form}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}>
                <div className={styles.login_logo}>
                   {/*  <Link to="/"><img src={pokelogo} alt=""></img> </Link> */}
                </div>

                <div className={styles.login_form}>
                    <Formik
                        initialValues={{
                            nombre: "",
                            email: "",
                            password: "",
                            pass2: "",
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
                                <div>
                                    <h1>Crear cuenta</h1>
                                </div>

                                <div className={styles.login_form__inputs}>
                                    <label>Nombre</label>
                                    <Field name="nombre" type="text" />
                                    {errors.nombre && touched.nombre ? (
                                        <div className={styles.login_error}>
                                            {errors.nombre}
                                        </div>
                                    ) : null}
                                </div>

                                <div className={styles.login_form__inputs}>
                                    <label>Email</label>
                                    <Field name="email" type="text" />
                                    {errors.email && touched.email ? (
                                        <div className={styles.login_error}>
                                            {errors.email}
                                        </div>
                                    ) : null}
                                </div>

                                <div className={styles.login_form__inputs}>
                                    <label>Contraseña</label>
                                    <Field name="password" type="password" autoComplete="off" />
                                    {errors.password && touched.password ? (
                                        <div className={styles.login_error}>
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div >

                                <div className={styles.login_form__inputs}>
                                    <label>Vuelva a escribir la contraseña</label>
                                    <Field name="pass2" type="password" autoComplete="off" />
                                    {errors.pass2 && touched.pass2 ? (
                                        <div className={styles.login_error}>
                                            {errors.pass2}
                                        </div>
                                    ) : null}
                                </div>

                                <button className={styles.login_continue__btn} type="submit">
                                    Registrarse
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

                <div className={styles.login_change}>
                    <h1 ><span>¿Ya tienes una cuenta?</span></h1>
                    <Link style={{textDecoration: "none"}} to="/login"><button>Inicia sesión</button></Link>
                </div>
        </motion.div>
        </div >
    );
};

export default Register;
import React from 'react';
import styles from "../Styles/LandingPage.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import landingimg from "../Styles/Images/landingimg.png";
import logo from "../Styles/Images/logo.png";


const LandingPage = () => {
    const navigate = useNavigate();

    //FUNCION QUE REDIRECCIONA AL LOGIN
    const redirectionLogin = () => {
        navigate("/login");
    }

    return (

        <div className={styles.landing_container}>
            <nav className={styles.landing_nav}>
                <motion.img
                    initial={{ x: -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src={logo}
                    alt="pokelogo" />
            </nav>

            <div className={styles.landing_home}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1>Rick and Morty APP</h1>
                    <h2>
                        <b>
                            Esta página de Rick y Morty utiliza una API publica
                            para consultar los personajes, locaciones y
                            capítulos de la serie. Permite encontrar tu
                            personaje favorito entre todos los demás por
                            medio de un buscador, además de ofrecerte
                            información detallada del mismo.
                        </b>
                    </h2>
                    <button onClick={() => redirectionLogin()}> Iniciar </button>
                </motion.div>
                <motion.img
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    src={landingimg}
                    alt="food" />
            </div>
        </div>
    )
}

export default LandingPage
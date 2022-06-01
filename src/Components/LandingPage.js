import React from 'react';
import styles from "../Styles/LandingPage/LandingPage.module.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pikalanding from "../Styles/Images/pikalanding.png";
import pokelogo from "../Styles/Images/pokelogo.png";

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
                    src={pokelogo}
                    alt="pokelogo" />
            </nav>

            <div className={styles.landing_home}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1>Pokedex</h1>
                    <h2>
                        <b>Vive la experiencia de ser un entrenador pokemon. </b>
                        La pokedex es una enciclopedia electrónica portátil que
                        los entrenadores Pokémon llevan consigo para registrar
                        automáticamente las fichas de todas las diversas especies
                        Pokémon vistas y capturadas durante su viaje como entrenadores.
                    </h2>
                    <button onClick={() => redirectionLogin()}> Iniciar </button>
                </motion.div>
                <motion.img
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    src={pikalanding}
                    alt="food" />
            </div>
        </div>
    )
}

export default LandingPage
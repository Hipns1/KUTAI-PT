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
                    alt="logo" />
            </nav>

            <div className={styles.landing_home}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1>Rick and Morty APP</h1>
                    <h2>
                        <b>
                        This Rick and Morty page uses a public API 
                        to query the characters, locations, and episodes 
                        of the series. It allows you to find your 
                        favorite character among all the others 
                        through a search engine, in addition to 
                        offering you detailed information about it.
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
import styles from "../Styles/NavBar.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../Redux/actions/actionLogin";
import logo from "../Styles/Images/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        const bar = document.getElementById("bar");
        const close = document.getElementById("close");
        setIsOpen(!isOpen);
        if (isOpen) {
            bar.style.display = "none";
            close.style.display = "block";
        } else if (isOpen === false) {
            bar.style.display = "block";
            close.style.display = "none";
        }
    }

    //FUNCION PARA CERRAR EL MENU
    const handleClose = () => {
        handleMenu();
        document.getElementById("check").checked = false;
    }

    //FUNCION PARA LOGOUT
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logoutAsync())
    }

    useEffect(() => {
        handleMenu();
        document.getElementById("close").style.display = "none";
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.nav}>
            <nav className={styles.nav_container}>
                <div className={styles.nav_logo}>
                    <Link to="/"><img src={logo} alt="img"/> </Link>
                </div>
                <input type="checkbox" id="check" className={styles.nav_menu} />
                <label
                    htmlFor="check"
                    className={styles.nav_label}
                    onClick={() => handleMenu()}>
                    <i className="fa-solid fa-bars" id="bar"></i>
                    <i className="fa-solid fa-xmark" id="close"></i>
                </label>
                <div className={styles.nav_options} id="nav_options">
                    <Link onClick={() => handleClose()} to="/">Characters</Link>
                    <Link onClick={() => handleClose()} to="/locations">Locations</Link>
                    <Link onClick={() => handleClose()} to="/episodes">Episodes</Link>
                    <a onClick={() => { handleLogout() }}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                </div>
            </nav>
        </motion.div>
    )
}

export default NavBar
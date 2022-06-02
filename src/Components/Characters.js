import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../utils/getData';
import styles from "../Styles/Character.module.scss";
import { motion } from 'framer-motion';

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character/?page=1"
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    //FUNCION PARA CONSUMIR API
    const handleData = async (url) => {
        const data = await getData(url)
        setData(data)
    }

    //PAGINACION
    const handleDataPrev = (url) => {
        if (page > 1) {
            handleData(url)
            setPage(page - 1)
            window.scrollTo(0, 0)
        }
    }
    const handleDataNext = (url) => {
        handleData(url)
        setPage(page + 1)
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        handleData(url)
    }, []);

    console.log(data.results)

    return (
        <div className={styles.char_container}>
            <div className={styles.char_card__container}>
                {
                    (data.results)?.length > 0
                        ? data.results.map(character => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                key={character.id}
                                className={styles.char_card}>
                                <Link to={`/characters/${character.id}`}>
                                    <img src={character.image} alt={character.name} />
                                    <h1>{character.name}</h1>
                                    <h2>
                                        {character.species} -
                                        <span className={character.status}> {character.status}</span>
                                    </h2>
                                </Link>
                            </motion.div>
                        ))
                        : null

                }
            </div>
            <div className={styles.char_btns}>
                <button onClick={() => handleDataPrev(data.info.prev)}>
                    <i className="fa-solid fa-angles-left"></i>
                </button>
                <span>{page}</span>
                <button onClick={() => handleDataNext(data.info.next)}>
                    <i className="fa-solid fa-angles-right"></i>
                </button>
            </div>
        </div>
    )
}

export default Characters
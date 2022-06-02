import React from 'react';
import styles from "../Styles/Character.module.scss";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import notfoundimg from "../Styles/Images/notfound.jpeg";

const CharacterCard = ({ data }) => {

    const handleDetail = (id) => {
        localStorage.setItem('id', id)
    }

    return (
        <div className={styles.char_card__container}>
            {
                (data.results)?.length > 0
                    ? data.results.map(character => (
                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            key={character.id}
                            className={styles.char_card}>
                            <Link
                                onClick={() => handleDetail(character.id)}
                                to={`/characters/${character.id}`}>
                                <img src={character.image} alt={character.name} />
                                <h1>{character.name}</h1>
                                <h2>
                                    {character.species} -
                                    <span className={character.status}> {character.status}</span>
                                </h2>
                            </Link>
                        </motion.div>
                    ))
                    : <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={styles.char_card}>
                        <img src={notfoundimg} alt="Not Found" />
                        <h1>No results found</h1>
                    </motion.div >

            }
        </div>
    )
}

export default CharacterCard
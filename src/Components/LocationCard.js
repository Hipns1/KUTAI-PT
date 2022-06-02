import React from 'react';
import styles from "../Styles/Location.module.scss";
import locationImg from "../Styles/Images/location.jpg";
import { motion } from 'framer-motion';

const LocationCard = ({ data }) => {
    return (
        <div className={styles.location_container__card}>
            {
                data.results?.map(location => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className={styles.location_card}
                        key={location.id} >
                        <div className={styles.location_img}>
                            <img src={locationImg} alt="location" />
                        </div>
                        <div className={styles.location_text}>
                            <h1>
                                <i className="fa-solid fa-location-dot"></i>
                                {location.name}
                            </h1>
                            <p>Type: <span>{location.type}</span></p>
                            <p>Dimension: <span>{location.dimension}</span></p>
                            <p># residents: <span>{location.residents.length}</span></p>
                        </div>
                    </motion.div>
                ))
            }
        </div>
    )
}

export default LocationCard
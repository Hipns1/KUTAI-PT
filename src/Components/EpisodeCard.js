import React from 'react';
import styles from "../Styles/Episodes.module.scss";
import { motion } from "framer-motion";

const EpisodeCard = ({ data }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={styles.epi_table__container}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Episode</th>
                        <th>Air Date</th>
                    </tr>
                </thead>
                {data.results ?
                    data.results?.map(epi => (
                        <tbody key={epi.id} className={styles.epi_card}>
                            <tr>
                                <td><i className="fa-solid fa-tv"></i></td>
                                <td>{epi.name}</td>
                                <td>{epi.episode}</td>
                                <td>{epi.air_date}</td>
                            </tr>
                        </tbody>
                    ))

                    : <tbody>
                        <tr>
                            <td><i className="fa-solid fa-x"></i></td>
                            <td>We found episodes with this name</td>
                            <td>No data</td>
                            <td>No data</td>
                        </tr>
                    </tbody>
                }
            </table>
        </motion.div>
    )
}

export default EpisodeCard
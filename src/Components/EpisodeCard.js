import React from 'react';
import styles from "../Styles/Episodes.module.scss";

const EpisodeCard = ({ data }) => {
    return (
        <div className={styles.epi_table__container}>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Episode</th>
                        <th>Air Date</th>
                    </tr>
                </thead>
                {
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
                }
            </table>
        </div>
    )
}

export default EpisodeCard
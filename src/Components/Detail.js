import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData';
import styles from "../Styles/Details.module.scss";
import AddFavorite from './AddFavorite';

const Detail = () => {
    const id = localStorage.getItem('id');
    const urlId = `https://rickandmortyapi.com/api/character/${id}`;
    const [data, setData] = useState()

    const handleData = async (url) => {
        const data = await getData(url)
        setData(data)
    }

    useEffect(() => {
        handleData(urlId)
    }, []);

    return (
        <div className={styles.detail_container}>
            {
                data
                    ? <div className={styles.detail_card}>
                        <img src={data.image} alt={data.name} />
                        <div className={styles.detail_card__text}>
                            <div className={styles.detail_card__fav}>
                                <AddFavorite data={data} />
                                <h1>
                                    {data.name},<span>{data.id}</span>
                                </h1>
                            </div>
                            <p>Gender:
                                <span>{data.gender}</span>
                            </p>
                            <p >Status:
                                <span className={data.status}>{data.status}</span>
                            </p>
                            <p>Especie:
                                <span>{data.species} {data.type ? `- ${data.type}` : null}</span>
                            </p>
                            <p>Last location:
                                <span>{data.location.name}</span>
                            </p>
                            <p># of episodes:
                                <span>{data.episode.length}</span>
                            </p>
                            <p>Origin:
                                <span>{data.origin.name}</span>
                            </p>
                        </div>
                    </div>
                    : null
            }
        </div>
    )
}

export default Detail
import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData';
import EpisodeCard from './EpisodeCard';
import SearchInput from './SearchInput';
import styles from "../Styles/Episodes.module.scss";
import PaginationsBtns from './PaginationsBtns';
import Filter from './Filter';

const Episodes = () => {

    const url = "https://rickandmortyapi.com/api/episode/?page=1";
    const urlSearch = "https://rickandmortyapi.com/api/episode/?name=";
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [newData, setNewData] = useState([])

    //FUNCION PARA CONSUMIR API
    const handleData = async (url) => {
        const data = await getData(url)
        setData(data)
        setNewData(data)
    }

    useEffect(() => {
        handleData(url)
    }, []);

    return (
        <div className={styles.epi_container}>
            <div className={styles.epi_variant}>
                <SearchInput setData={setData} setPage={setPage} url={urlSearch} />
                <Filter urlSearch={urlSearch} setData={setData} newData={newData} />
            </div>
            <EpisodeCard data={data} />
            <PaginationsBtns data={data} page={page} handleData={handleData} setPage={setPage} />
        </div>
    )
}

export default Episodes
import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import styles from "../Styles/Character.module.scss";
import CharacterCard from './CharacterCard';
import SearchInput from './SearchInput';

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

    return (
        <div className={styles.char_container}>
            <SearchInput setData={setData} setPage={setPage} />
            <CharacterCard data={data} />
            {
                data.results?.length >= 20
                    ? <div className={styles.char_btns}>
                        <button onClick={() => handleDataPrev(data.info.prev)}>
                            <i className="fa-solid fa-angles-left"></i>
                        </button>
                        <span>{page}</span>
                        <button onClick={() => handleDataNext(data.info.next)}>
                            <i className="fa-solid fa-angles-right"></i>
                        </button>
                    </div>
                    : null
            }
        </div>
    )
}

export default Characters
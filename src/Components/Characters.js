import React, { useEffect, useState } from 'react';
import { getData } from '../utils/getData';
import styles from "../Styles/Character.module.scss";
import CharacterCard from './CharacterCard';
import SearchInput from './SearchInput';
import PaginationsBtns from './PaginationsBtns';

const Characters = () => {
    const url = "https://rickandmortyapi.com/api/character/?page=1"
    const urlSearch = "https://rickandmortyapi.com/api/character/?name=";
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)

    //FUNCION PARA CONSUMIR API
    const handleData = async (url) => {
        const data = await getData(url)
        setData(data)
    }

    useEffect(() => {
        handleData(url)
    }, []);

    return (
        <div className={styles.char_container}>
            <SearchInput setData={setData} setPage={setPage} url={urlSearch}/>
            <CharacterCard data={data} />
            <PaginationsBtns
                data={data}
                handleData={handleData}
                setPage={setPage}
                page={page} />
        </div>
    )
}

export default Characters
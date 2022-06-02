import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData';
import LocationCard from './LocationCard';
import PaginationsBtns from './PaginationsBtns';
import styles from "../Styles/Location.module.scss";
import SearchInput from './SearchInput';

const Locations = () => {
    const url = "https://rickandmortyapi.com/api/location?page=1";
    const urlSearch = "https://rickandmortyapi.com/api/location/?name=";
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    //FUNCION PARA CONSUMIR API
    const handleData = async (url) => {
        const data = await getData(url)
        setData(data)
    }

    useEffect(() => {
        handleData(url)
    }, []);

    return (
        <div className={styles.location_container}>
            <SearchInput setData={setData} setPage={setPage} url={urlSearch} />
            <LocationCard data={data} />
            <PaginationsBtns
                data={data}
                page={page}
                setPage={setPage}
                handleData={handleData}
            />
        </div>
    )
}

export default Locations
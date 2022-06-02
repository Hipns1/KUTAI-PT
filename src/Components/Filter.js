import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData'
import styles from "../Styles/Episodes.module.scss";

const Filter = ({ setData, newData }) => {
    const [allArray, setAllArray] = useState([])

    //ITERAR LOS ENDPOINTS PARA OBETENER OS DATOS DE 
    //TODAS LAS PAGINAS
    const handleData = async () => {
        for (let i = 1; i <= 3; i++) {
            const url = `https://rickandmortyapi.com/api/episode/?page=${i}`
            const newData = await getData(url)
            setAllArray(allArray => [...allArray, ...newData.results])
        }
    }

    //FUNCION PARA FILTRAR LOS DATOS
    const handleChange = (e) => {
        const { value } = e.target
        if (value === "") {
            setData(newData)
        } else {
            const newData = allArray.filter(epi => epi.episode.toLowerCase().includes(value.toLowerCase()))
            setData({ results: newData })
        }
    }

    useEffect(() => {
        handleData()
    }, []);

    return (
        <div className={styles.filter_select__container}>
            <select onChange={handleChange}>
                <option value="">All episodes</option>
                <option value="S01">Season 1</option>
                <option value="S02">Season 2</option>
                <option value="S03">Season 3</option>
                <option value="S04">Season 4</option>
                <option value="S05">Season 5</option>
            </select>
        </div>
    )
}

export default Filter
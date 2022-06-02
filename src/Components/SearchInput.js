import React, { useState } from 'react'
import { getData } from '../utils/getData';
import styles from "../Styles/Character.module.scss";

const SearchInput = ({ setData, setPage }) => {

    const handleChange = async (e) => {
        let name = e.target.value;
        const url = `https://rickandmortyapi.com/api/character/?name=${name}`;
        const data = await getData(url)
        setData(data)
        setPage(1)
    }

    return (
        <div className={styles.search_container}>
            <form onChange={handleChange}>
                <input type="text" placeholder="Search for a character by name..." />
            </form>
        </div>
    )
}

export default SearchInput
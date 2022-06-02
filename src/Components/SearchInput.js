import React, { useState } from 'react'
import { getData } from '../utils/getData';
import styles from "../Styles/Search.module.scss";

const SearchInput = ({ setData, setPage, url }) => {

    const handleChange = async (e) => {
        let query = e.target.value;
        const urlSearch = url + query;
        const data = await getData(urlSearch)
        setData(data)
        setPage(1)
    }

    return (
        <div className={styles.search_container}>
            <form onChange={handleChange}>
                <input type="text" placeholder="Search..." />
            </form>
        </div>
    )
}

export default SearchInput
import React, { useEffect, useState } from 'react'
import { getData } from '../utils/getData';

const Locations = () => {
    const url = "https://rickandmortyapi.com/api/location?page=1";
    const [data, setData] = useState([]);

    //FUNCION PARA CONSUMIR API
    const handleData = async (url) => {
        const data = await getData(url)
        setData(data)
    }

    useEffect(() => {
        handleData(url)
    }, []);

    console.log(data)

    return (
        <div>

        </div>
    )
}

export default Locations
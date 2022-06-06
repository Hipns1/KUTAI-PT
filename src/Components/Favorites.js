import { getAuth } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listFavoritesAsync } from '../Redux/actions/actionFavorites';
import CharacterCard from './CharacterCard';
import styles from "../Styles/Character.module.scss";

const Favorites = () => {

    const dispatch = useDispatch();
    const { favorites } = useSelector((fav) => fav.favorites);

    //Obtener el usuario
    const auth = getAuth();
    const user = auth.currentUser;

    //GUARDAR EN UN OBJETO LOS FAVORITOS
    const data = {
        results: favorites,
    }

    useEffect(() => {
        dispatch(listFavoritesAsync(user));
    }, []);

    return (
        <div className={styles.char_container}>
            <CharacterCard data={data} />
        </div>
    )
}

export default Favorites
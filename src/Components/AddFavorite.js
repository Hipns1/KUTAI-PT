import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFavoritesAsync, deleteFavoritesAsync } from '../Redux/actions/actionFavorites';
import styles from "../Styles/Details.module.scss";
import probeFavorite from '../utils/proveFavorite';
import { getAuth } from 'firebase/auth';

const AddFavorite = ({ data }) => {

    const dispatch = useDispatch();
    //Obtener el usuario
    const auth = getAuth();
    const user = auth.currentUser;

    const handleFavorite = () => {
        const state = document.getElementById("check").checked;
        if (state) {
            dispatch(deleteFavoritesAsync(data, user));
        } else {
            dispatch(addFavoritesAsync(data, user));
        }
    }

    useEffect(() => {
        probeFavorite(data, user)
    }, []);

    return (
        <div className={styles.add_container}>
            <form >
                <input id="check" type='checkbox' />
                <label htmlFor="check" className={styles.nav_options}>
                    <i
                        onClick={() => handleFavorite()}
                        className="fa-solid fa-star"></i>
                </label>
            </form>
        </div>
    )
}

export default AddFavorite
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { db } from "../../Firebase/credentials";
import { typesFavorites } from "../types/types";

//AGREGAR
export const addFavoritesAsync = (data, user) => {
    const favorite = {
        name: data.name,
        id: data.id,
        image: data.image,
        species: data.species,
        status: data.status,
        characterId: user.uid + data.id,
        userId: user.uid,
    }

    return async (dispatch) => {
        await addDoc(collection(db, "favorites"), favorite)
            .then(() => {
                dispatch(addSync(favorite));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
export const addSync = (favorite) => {
    return {
        type: typesFavorites.add,
        payload: favorite,
    };
};


//DELETE
export const deleteFavoritesAsync = (data, user) => {
    const characterId = user.uid + data.id;
    return async (dispatch) => {
        const getCollection = collection(db, "favorites");
        const q = query(getCollection, where("characterId", "==", characterId));
        const getDataQuery = await getDocs(q);
        getDataQuery.forEach((docu) => {
            deleteDoc(doc(db, "favorites", docu.id));
        });
        dispatch(deleteSync(characterId));
    };
};

export const deleteSync = (characterId) => {
    return {
        type: typesFavorites.delete,
        payload: characterId,
    };
};


//LIST
export const listFavoritesAsync = (user) => {
    return async (dispatch) => {
        const getCollection = collection(db, "favorites");
        const q = query(getCollection, where("userId", "==", user.uid));
        const getDataQuery = await getDocs(q);
        let favorites = [];
        getDataQuery.forEach((doc) => {
            favorites.push({
                ...doc.data(),
            });
        });
        dispatch(listSync(favorites));
    };
};

export const listSync = (favorites) => {
    return {
        type: typesFavorites.list,
        payload: favorites,
    };
};


//EDIT
export const editFavoritesAsync = (recipeId, fav) => {
    return async (dispatch) => {
        const getCollection = collection(db, "favorites");
        const q = query(getCollection, where("recipeId", "==", recipeId));
        const getDataQuery = await getDocs(q);
        let identifier;
        getDataQuery.forEach((doc) => {
            identifier = doc.id;
        });
        const documentRef = doc(db, "favorites", identifier);
        await updateDoc(documentRef, fav)
            .then(() => {
                dispatch(editSync(fav));
                dispatch(listFavoritesAsync());
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const editSync = (post) => {
    return {
        type: typesFavorites.edit,
        payload: post,
    };
};
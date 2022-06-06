import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/credentials";

//FUNCION PARA SABER SI EL USUARIO YA HA AÑADIDO LA RECETA A FAVORITOS  
const probeFavorite = async (data, user) => {
    const characterId = user.uid + data.id;
    const getCollection = collection(db, "favorites");
    const q = query(getCollection, where("characterId", "==", characterId));
    const getDataQuery = await getDocs(q);
    let identifier;
    getDataQuery.forEach((doc) => {
        identifier = doc.id;
    });
    if (identifier) {
        document.getElementById("check").setAttribute("checked", "true");
    } else {
        document.getElementById("check").removeAttribute("checked")
    }
}

export default probeFavorite;
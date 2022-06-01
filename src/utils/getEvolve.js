import axios from "axios";
import Swal from "sweetalert2";

//FUNCION PARA OBTENER LA EVOLUCION ANTERIOR DEL POKEMON
export const getEvolution = (pokemon) => {
    axios.get(pokemon.species.url)
        .then(resp => {
            if (resp.data.evolves_from_species) {
                axios.get(resp.data.evolves_from_species.url)
                    .then(result => {
                        Swal.fire({
                            icon: 'success',
                            text: 'Este pokemon ha evolucinado de...',
                            title: `${(result.data.name).toUpperCase()}`,
                        })
                    })
            } else {
                Swal.fire({
                    icon: 'info',
                    title: 'Este pokemon es el primero de su linea evolutiva',
                })
            }
        })
}
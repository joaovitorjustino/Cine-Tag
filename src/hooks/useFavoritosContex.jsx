import { useContext } from "react";
import { FavoritoContext } from "../assets/context/FavoritosContext";

export function useFavoritosContext() {
    const { favorito, setFavorito } = useContext(FavoritoContext);

    function adicionaAoFavorito(novoFavorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if(!favoritoRepetido){
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }
    return{
        favorito,
        adicionaAoFavorito,
    }
}
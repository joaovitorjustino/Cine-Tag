import iconeFavorito from "./favoritar.png"
import iconeDesFavorito from "./desfavoritar.png"
import styled from "styled-components"
import { useFavoritosContext } from "../../hooks/useFavoritosContex"
import { Link } from "react-router-dom"

const ContainerDiv = styled.div`
    padding: 0 0 1em 0;
    width: 282px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Capa = styled.img`
    width: 100%;
`
const Titulo = styled.h2`
    padding: 0 1em;
    color: black;
`
const Favoritar = styled.img`
    padding: 0 1em;
    width: 25px;
`
const LinkCard = styled(Link)`
    text-decoration: none;
`

const Card = ({ id, capa, titulo }) => {

    const { favorito, adicionaAoFavorito } = useFavoritosContext();
    const foiFavoritado = favorito.some((fav) => fav.id === id)
    const icone = !foiFavoritado ? iconeFavorito : iconeDesFavorito;
    return (
        <ContainerDiv>
            <LinkCard to={`/${id}`}>
                <Capa src={capa} alt={titulo} />
                <Titulo>{titulo}</Titulo>
            </LinkCard>
            <Favoritar
                src={icone}
                alt="icone favorito"
                onClick={
                    () => { adicionaAoFavorito({ id, titulo, capa }) }
                } />
        </ContainerDiv>
    )
}

export default Card
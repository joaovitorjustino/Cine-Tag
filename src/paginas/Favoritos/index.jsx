import Banner from "../../componentes/Banner"
import Card from "../../componentes/Card"
import Container from "../../componentes/Container"
import Titulo from "../../componentes/Titulo"
import { useFavoritosContext } from "../../hooks/useFavoritosContex"

const PaginaFavoritos = () => {
    const {favorito} = useFavoritosContext();
    return (
        <>
            <Banner imagem={"imagens/banner-favoritos.png"} />
            <Titulo>
                Os vídeos e filmes favoritados
            </Titulo>
            <Container>
                {favorito.map((fav) => {
                   return <Card  {...fav} key={fav.id}/>
                })}
            </Container>
        </>
    )
}

export default PaginaFavoritos
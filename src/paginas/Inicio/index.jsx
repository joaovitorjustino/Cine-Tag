import Banner from "../../componentes/Banner";
import Titulo from "../../componentes/Titulo";
import Card from "../../componentes/Card";
import Container from "../../componentes/Container"
import { useEffect, useState } from "react";

const PaginaInicial = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/joaovitorjustino/Cine-Tag-API/videos`)
        .then(resp => resp.json())
        .then(dados => {
          setVideos(dados)
        })
    }, []);

    return (
        <>
            <Banner imagem={"imagens/banner-home.png"} />
            <Titulo>
                O lugar pra guardar os seus vídeos e filmes
            </Titulo>
            <Container>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </Container>
        </>

    )
}

export default PaginaInicial
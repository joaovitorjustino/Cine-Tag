import { useParams } from "react-router-dom"
import Banner from "../../componentes/Banner"
import Titulo from "../../componentes/Titulo"
import Container from "../../componentes/Container";
import videos from "../../mocks/db.json"
import PaginaNaoEncontrada from "../NaoEncontrado";
import styled from "styled-components";
import { useEffect, useState } from "react";

const ContainerPlayer = styled.section`
    height: 98vh;
    display: flex;
    justify-content: space-around;
    margin: 2em 10em;
`

const PaginaPlayer = () => {
    const [video, setVideo] = useState();
    const paramtros = useParams();
    
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/joaovitorjustino/Cine-Tag-API/videos?id${paramtros.id}`)
        .then(resp => resp.json())
        .then(dados => {setVideo(...dados)})
    }, [])

    if (!video) {
        return <PaginaNaoEncontrada />
    }

    return (
        <>
            <Banner imagem={"imagens/banner-player.png"} />
            <Titulo>Player</Titulo>
            <ContainerPlayer>
                    <iframe
                        width="100%"
                        height="100%"
                        src={video.link}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
            </ContainerPlayer>
        </>
    )
}

export default PaginaPlayer
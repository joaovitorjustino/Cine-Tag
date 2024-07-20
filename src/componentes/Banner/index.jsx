import styled from "styled-components"

const BannerImg = styled.img`
    background-image: ${props => `url(${props.$imagem})`};
    width: 100%;
    height: 350px;
    background-size: cover;
    background-repeat: no-repeat;
`

const Banner = ({ imagem }) => {
    return (
        <>
            <BannerImg $imagem={imagem} />
        </>
    )
}

export default Banner
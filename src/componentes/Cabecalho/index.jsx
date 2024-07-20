import { Link } from "react-router-dom"
import styled from "styled-components"
import CabecalhoLink from "../CabecalhoLink"


const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: black;
`

const Cabecalho = () =>{
    return(
        <Header>
            <Link to="./"> 
                <img src="imagens/logo.png" alt="logo"></img>
            </Link>
        <nav>
            <CabecalhoLink url="./">
                Home
            </CabecalhoLink>
            <CabecalhoLink url={"./favoritos"}>
                Favoritos
            </CabecalhoLink>
        </nav>
        </Header>
            
    )
}

export default Cabecalho
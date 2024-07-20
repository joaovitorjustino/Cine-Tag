import styled from "styled-components"

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    background-color: black;
    h2{
        font-weight: 400;
        font-size: 18px;
        color: white;
    }

`

const Rodape = () =>{
    return(
        <Footer>
            <h2>Feitor por João</h2>
        </Footer>
    )
}

export default Rodape
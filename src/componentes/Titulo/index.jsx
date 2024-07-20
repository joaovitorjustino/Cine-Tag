import styled from "styled-components"

const DivTexto = styled.div`
    font-size: 32px;
    font-weight: 500;
    padding: 0.5em;
    text-align: center;
`


const Titulo = ({ children }) => {
    return (
        <>
            <DivTexto>
                {children}
            </DivTexto>
        </>
    )
}

export default Titulo
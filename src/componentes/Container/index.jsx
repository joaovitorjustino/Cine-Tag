import styled from "styled-components"

const ContainerSection = styled.section`
    display: flex;
    justify-content: space-around;
    margin: 2em 10em;
`

const Container = ({ children }) => {
    return (
        <>
            <ContainerSection>
                {children}
            </ContainerSection>
        </>
    )
}

export default Container
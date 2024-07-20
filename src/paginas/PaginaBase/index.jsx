import { FavoritosProvider } from "@/assets/context/FavoritosContext"
import EstilosGlobais from "@/componentes/EstilosGlobais"
import Rodape from "@/componentes/Rodape"
import Cabecalho from "@/componentes/Cabecalho"
import { Outlet } from "react-router-dom"
import styled from "styled-components"

const FundoGradiente = styled.div`
  background-color: #FFFFFF;
  width:100%;
  min-height: 100vh;
`

const PaginaBase = () => {
    return (
        <>
            <FundoGradiente>
                <EstilosGlobais />
                <Cabecalho />
                <FavoritosProvider>
                    <Outlet />
                </FavoritosProvider>
                <Rodape />
            </FundoGradiente>
        </>
    )
}

export default PaginaBase
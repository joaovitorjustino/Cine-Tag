import PaginaInicial from "./paginas/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaFavoritos from "./paginas/Favoritos"
import PaginaPlayer from "./paginas/Player"
import PaginaNaoEncontrada from "./paginas/NaoEncontrado"
import PaginaBase from "./paginas/PaginaBase"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<PaginaInicial />}></Route>
            <Route path="favoritos" element={<PaginaFavoritos />}></Route>
            <Route path=":id" element={<PaginaPlayer />}></Route>
            <Route path="*" element={<PaginaNaoEncontrada />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

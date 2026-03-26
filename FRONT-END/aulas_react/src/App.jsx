import Cabecalho from "./components/Cabecalho"
import Principal from "./pages/Principal"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Perfil from "./pages/Perfil"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/perfil/:nome" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
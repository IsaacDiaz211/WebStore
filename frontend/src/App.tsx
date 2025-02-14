import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu.tsx"
import Home from "./pages/Home.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Cart from "./pages/Cart.tsx";
import Commercialization from "./pages/Commercialization.tsx";
import Consultation from "./pages/Consultation.tsx";
import Info from "./pages/Info.tsx";
import Profile from "./pages/Profile.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";


function App() {

  return (
      <div>
          <Router>
              <Menu />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalogo" element={<Catalogue />} />
                  <Route path="/consultas" element={<Consultation />} />
                  <Route path="/carrito" element={<Cart />} />
                  <Route path="/perfil" element={<Profile />} />
                  <Route path="/quienes-somos" element={<AboutUs />} />
                  <Route path="/comercializacion" element={<Commercialization />} />
                  <Route path="/info" element={<Info />} />
                  <Route path="/terminos-de-uso" element={<TermsOfUse />} />
              </Routes>

          </Router>
      </div>
  );
}

export default App

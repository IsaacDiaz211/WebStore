import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Menu from "./components/Menu.tsx"
import Home from "./pages/Home.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Cart from "./pages/Cart.tsx";
import Consultation from "./pages/Consultation.tsx";
import Profile from "./pages/Profile.tsx";
import Footer from "./components/Footer";


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
              </Routes>
              <Footer />
          </Router>
      </div>
  );
}

export default App

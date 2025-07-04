import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Menu from "./components/Menu.tsx"
import Home from "./pages/Home.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import InfoProduct from "./pages/InfoProduct.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Cart from "./pages/Cart.tsx";
import Consultation from "./pages/Consultation.tsx";
import Login from "./pages/LogIn.tsx";
import SignIn from "./pages/SignIn.tsx";
import LogIn from "./pages/LogIn.tsx";	
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
                  <Route path="/perfil" element={<Login />} />
                  <Route path="/quienes-somos" element={<AboutUs />} />
                  <Route path="/registrarse" element={<SignIn />} />
                  <Route path="/iniciar-sesion" element={<LogIn />} />
                  <Route path="/producto/:id" element={<InfoProduct />} />
                  {/*<Route path="/producto/:id" element={<InfoProduct />} /> */}
              </Routes>
              <Footer />
          </Router>
      </div>
  );
}

export default App

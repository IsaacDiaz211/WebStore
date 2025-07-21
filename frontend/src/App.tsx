import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.tsx";
import Catalogue from "./pages/Catalogue.tsx";
import InfoProduct from "./pages/InfoProduct.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Cart from "./pages/Cart.tsx";
import Consultation from "./pages/Consultation.tsx";
import Perfil from "./pages/Profile.tsx";
import SignIn from "./pages/SignIn.tsx";
import Login from "./pages/LogIn.tsx";
import Pay from "./pages/Pay.tsx";
import CrudUser from "./pages/admin/CrudUser.tsx";
import CrudBook from "./pages/admin/CrudBook.tsx";
import CrudCategory from "./pages/admin/CrudCategory.tsx";
import CrudPayMethod from "./pages/admin/CrudPayMethod.tsx";
import AppLayout from "./layouts/AppLayout.tsx";


function App() {

  return (
      <div>
          <Router>
            <AppLayout>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/catalogo" element={<Catalogue />} />
                  <Route path="/consultas" element={<Consultation />} />
                  <Route path="/carrito" element={<Cart />} />
                  <Route path="/perfil" element={<Perfil />} />
                  <Route path="/quienes-somos" element={<AboutUs />} />
                  <Route path="/registrarse" element={<SignIn />} />
                  <Route path="/iniciar-sesion" element={<Login />} />
                  <Route path="/producto/:id" element={<InfoProduct />} />
                  {/*<Route path="/producto/:id" element={<InfoProduct />} /> */}
                  <Route path="/pagar" element={<Pay />} />
                  <Route path="/admin-usuarios" element={<CrudUser />} />
                  <Route path="/admin-libros" element={<CrudBook />} />
                  <Route path="/admin-categorias" element={<CrudCategory />} />
                  <Route path="/admin-medios-de-pago" element={<CrudPayMethod />} />
              </Routes>
            </AppLayout>
          </Router>
      </div>
  );
}

export default App

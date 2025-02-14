import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarMenu = ()=> {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Soundscape</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Inicio</Link>
                        <Link to="/catalogo">Productos</Link>
                        <Link to="/perfil">Perfil</Link>
                        <NavDropdown title="Más" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                <Link to="/quienes-somos" >Quienes Somos</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                <Link to="/quienes-somos" >Comercialización</Link>
                                </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                <Link to="/consultas">Consultas</Link>
                                </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">
                                <Link to="/terminos-de-uso=">Términos de Uso</Link>
                                </NavDropdown.Item>
                            <NavDropdown.Item href="#action/4.5">
                                <Link to="/info=">Contacto</Link>
                                </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarMenu;
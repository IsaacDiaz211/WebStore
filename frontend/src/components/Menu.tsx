import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Soundscape</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/catalogo">Productos</Nav.Link>
                        <Nav.Link as={Link} to="/perfil">Perfil</Nav.Link>
                        <Nav.Link as={Link} to="/iniciar-sesion">Iniciar Sesión</Nav.Link>
                        <NavDropdown title="Más" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/quienes-somos">
                                Quienes Somos
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/comercializacion">
                                Comercialización
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/consultas">
                                Consultas
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/terminos-de-uso">
                                Términos de Uso
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/info">
                                Contacto
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
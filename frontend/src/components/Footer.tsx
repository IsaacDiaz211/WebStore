import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row className="gy-3">
                    {/* Primera columna */}
                    <Col md={4} xs={12}>
                        <Link to="/" className="footer-link">Inicio</Link>
                        <br />
                        <br />
                        <Link to="/catalogo" className="footer-link">Catálogo</Link>
                        <br />
                        <br />
                        <Link to="/catalogo" className="footer-link">Más vendidos</Link>
                    </Col>

                    {/* Segunda columna */}
                    <Col md={4} xs={12}>
                        <Link to="/consultas" className="footer-link">Consultas</Link>
                        <br />
                        <br />
                        <Link to="/quienes-somos" className="footer-link">Sobre nosotros</Link>
                        <br />
                        <br />
                        <Link to="/perfil" className="footer-link">Perfil</Link>
                    </Col>

                    {/* Tercera columna */}
                    <Col md={4} xs={12}>
                        <Link to="" className="footer-link">Av. Ávalos 400, Resistencia, Chaco</Link>
                        <br />
                        <br />
                        <Link to="" className="footer-link">+54 3728-129433</Link>
                        <br />
                        <br />
                        <Link to="" className="footer-link">consultas@soundscape.com</Link>
                    </Col>
                </Row>
                <br />
                <br />
                <Col xl={{ span: 4, offset: 3 }} className="gy-3">Soundscape, todos los derechos reservados 2025®</Col>
            </Container>
        </footer>
    );
};

export default Footer;
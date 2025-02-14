import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Ícono de menú hamburguesa
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const SideBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div
            className="d-flex flex-column position-fixed top-0 end-0 h-100 p-3"
            style={{ width: "200px", backgroundColor: '#3498db' }} /*cambiar aquí el color*/
        >
            {/* Logo arriba */}
            <div className="text-center mb-auto text-black">
                <h4 className="fw-bold">S</h4>
                <h4 className="fw-bold">O</h4>
                <h4 className="fw-bold">U</h4>
                <h4 className="fw-bold">N</h4>
                <h4 className="fw-bold">S</h4>
                <h4 className="fw-bold">C</h4>
                <h4 className="fw-bold">A</h4>
                <h4 className="fw-bold">P</h4>
                <h4 className="fw-bold">E</h4>
            </div>

            {/* Ícono del menú en el centro */}
            <div className="text-center mb-auto">
                <Button variant="outline-light" onClick={toggleMenu} className="border-0">
                    <FiMenu size={60} />
                </Button>
            </div>

            {/* Enlaces debajo */}
            <div className="text-center mt-auto">
                <Link to="/carrito" className="text-white d-block">🛒 Carrito</Link>
                <Link to="/perfil" className="text-white d-block">👤 Perfil</Link>
            </div>

            {/* Menú desplegable que cubre la pantalla */}
            {menuOpen && (
                <div
                    className="position-fixed top-0 start-0 h-100 bg-dark text-white d-flex flex-column align-items-center justify-content-center"
                    style={{ width: "calc(100vw - 200px)", right: "200px", zIndex: 1050 }}
                >
                    <div className="d-flex flex-column align-items-center justify-content-center align-items-center">
                        <Row>
                            <Col>
                                <Link to="/" className="text-white fs-4" onClick={toggleMenu}>Inicio</Link>
                            </Col>
                            <Col>
                                <Link to="/catalogo" className="text-white fs-4" onClick={toggleMenu}>Productos</Link>
                            </Col>
                            <Col>
                                <Link to="/info" className="text-white fs-4" onClick={toggleMenu}>Contacto</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/comercializacion" className="text-white fs-4" onClick={toggleMenu}>Comercialización</Link>
                            </Col>
                            <Col>
                                <Link to="/terminos-de-uso" className="text-white fs-4" onClick={toggleMenu}>Términos de Uso</Link>
                            </Col>
                            <Col>
                                <Link to="/consultas" className="text-white fs-4" onClick={toggleMenu}>Consultas</Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to="/quienes-somos" className="text-white fs-4" onClick={toggleMenu}>Quiénes Somos</Link>
                            </Col>
                            <Col>
                                <Link to="/catalogo" className="text-white fs-4" onClick={toggleMenu}>Más vendidos</Link>
                            </Col>
                            <Col>
                                <Link to="/catalogo" className="text-white fs-4" onClick={toggleMenu}>Novedades</Link>
                            </Col>
                        </Row>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideBar;
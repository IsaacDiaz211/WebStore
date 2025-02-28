import { Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar.tsx";
import Navbar from "./NavbarMenu.tsx";

const Menu = () => {

    return (
        <>
            <div className="d-none d-md-block"> {/* Visible en md+ */}
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                </Row>

            </div>
            <div className="d-block d-md-none"> {/* Visible en sm- */}
                <Navbar />
            </div>
        </>
    );
};

export default Menu;

/**
 * Isaac
 */
import {Row, Col} from "react-bootstrap";
import CardMedium from "../components/CardMedium";
import ContentWrapper from "../components/ContentWrapper";
import CardLarge from "../components/CardLarge";
const TermsOfUse = () => {
    return (
        <ContentWrapper>
            <h2>Términos de Uso</h2>
            <CardMedium title="Large Card 1" text="Contenido de la card large" />
            <CardMedium title="Large Card 1" text="Contenido de la card large" />
            <CardLarge title="Large Card 1" text="Contenido de la card large" />

            <Row className="gy-4">
                {/* Primera fila */}
                <Col md={6} lg={6} xl={6}>
                    <CardLarge title="Large Card 1" text="Contenido de la card large"  />
                </Col>
                <Col md={6} lg={3} xl={3}>
                    <CardMedium title="Medium Card 1" text="Contenido de la card medium" />
                </Col>
                <Col md={6} lg={3} xl={3}>
                    <CardMedium title="Medium Card 2" text="Contenido de la card medium"/>
                </Col>

                {/* Segunda fila */}
                <Col md={6} lg={3} xl={3}>
                    <CardMedium title="Medium Card 3" text="Contenido de la card medium"/>
                </Col>
                <Col md={6} lg={3} xl={3}>
                    <CardMedium title="Medium Card 4" text="Contenido de la card medium"/>
                </Col>
                <Col md={6} lg={6} xl={6}>
                    <CardLarge title="Large Card 2" text="Contenido de la card large"/>
                </Col>
            </Row>
        </ContentWrapper>
    );
};

export default TermsOfUse;
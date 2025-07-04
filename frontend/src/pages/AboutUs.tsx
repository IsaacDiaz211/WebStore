import { Container, Row, Col } from "react-bootstrap";
import CardLarge from "../components/CardLarge";
import CardMedium
 from "../components/CardMedium";
const AboutUs = () => {

    const info: {title: string, text: string}[] = [
        {
            title: "Nuestra vision",
            text: "/",
        },
        {
            title: "Nuestra misión",
            text: "/",
        },
    ];
    return (
        <>
            <Container className="hero-fullscrean">
                <h2>Sobre nosotros</h2>
                <Row>
                    <Col>
                        <CardLarge title={info[0].title} text={info[0].text}/>
                        <CardMedium title={info[1].title} text={info[1].text}/>
                        <CardMedium title={info[1].title} text={info[1].text}/>
                    </Col>
                    <Col>
                        <CardLarge title={info[0].title} text={info[0].text}/>
                        <CardMedium title={info[1].title} text={info[1].text}/>
                        <CardMedium title={info[1].title} text={info[1].text}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
    

};

export default AboutUs;
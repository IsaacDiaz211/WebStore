import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface CardProps {
    title: string;
    text: string;
}

const CardLarge = ({title, text}: CardProps) => {
    return (
        <Card style={{ width: '36rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>{text}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
};

export default CardLarge;
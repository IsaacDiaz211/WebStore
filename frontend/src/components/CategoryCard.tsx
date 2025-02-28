import {Link} from 'react-router-dom';
import Card from 'react-bootstrap/Card';

interface CardProps {
    image: string;
    title: string;
    link: string;
}

const CategoryCard = ({image, title, link}: CardProps) => {
    return (
        <Link to={link} className="text-decoration-none">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="bottom" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default CategoryCard;
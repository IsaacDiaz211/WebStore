import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, Links } from 'react-router-dom';

interface ProductProps {
    image: string;
    title: string;
    link: string;
};

const Product = ({image, title, link}: ProductProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{title}</Card.Text>
        <Link to={link} className="text-decoration-none">
          <Button variant="primary">Ver más</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
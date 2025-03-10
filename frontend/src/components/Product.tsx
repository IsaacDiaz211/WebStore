import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface ProductProps {
    image: string;
    title: string;
    price: number;
    link: string;
};

const Product = ({image, title, price, link}: ProductProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Link to={link} className="text-decoration-none">
          <Button variant="primary">Agregar al carrito</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Product;
/*import Button from 'react-bootstrap/Button';
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

export default Product;*/

// src/components/ProductCard/ProductCard.tsx
import {
  Card,
  CardHeader,
  CardPreview,
  Body1,
  Button,
  makeStyles,
} from "@fluentui/react-components";
import { Book } from "../types/book";

const useStyles = makeStyles({
  image: {
    width: "100%",
    objectFit: "cover",
    aspectRatio: "4 / 3",
    borderRadius: "8px",
  },
  card: {
    maxWidth: "100%",
  },
});

type Props = {
  product: Book;
};

export const ProductCard = ({ product }: Props) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <CardHeader header={<Body1>{product.title}</Body1>} />
      <CardPreview>
        <img src={product.image} alt={product.title} className={styles.image} />
      </CardPreview>
      <Body1>{product.price} USD</Body1>
      <Button appearance="primary">Add to Cart</Button>
    </Card>
  );
};

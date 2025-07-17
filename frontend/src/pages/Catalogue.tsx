/*import { useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Product from "../components/Product";
import PaginationComp from "../components/PaginationComp";

const productsMock = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    image: `/images/products/product${(i % 5) + 1}.png`,
    title: `Producto ${i + 1}`,
    price: (Math.random() * 500).toFixed(2),
    link: `/producto`,
  }));

const Catalogue = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage; //acá va el indice del ultimo producto a mostrar
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage; //acá va el indice del primer producto a mostrar, en la primer pag sería 0, en la segunda 12, etc.
    const currentProducts = productsMock.slice(indexOfFirstProduct, indexOfLastProduct); //acá seleccionamos 12 elementos del array de productos a mostrar, en la primer pag sería el array de productos del 0 al 11, en la segunda el 12 al 23, etc.

    const totalPages = Math.ceil(productsMock.length / productsPerPage);

    
    return (
        <Container className="mt-4">
            <h2>Catálogo</h2>
            <Row>
                <Col md={3}>
                <div className="p-3 border rounded bg-light">
                    <h5>Filtros (Próximamente)</h5>
                </div>
                </Col>

                <Col md={9}>
                <Row className="gy-4">
                    {currentProducts.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product image={product.image} title={product.title} price={+product.price} link={product.link} />
                    </Col>
                    ))}
                </Row>

                {/* Paginación *
                <PaginationComp totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
                </Col>
            </Row>
        </Container>
    );
};

export default Catalogue;*/
// src/pages/Catalogue.tsx
import { ProductCard } from "../components/Product";
import { Book } from "../types/book";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
    padding: "1rem",
  },
});

const dummyProducts: Book[] = [
  {
    id: "1",
    title: "Romeo y Julieta",
    image: "https://via.placeholder.com/300x200?text=Guitar",
    price: 499,
  },
  {
    id: "2",
    title: "Tópicos de Ingeniería de Software",
    image: "https://via.placeholder.com/300x200?text=Drums",
    price: 799,
  },
  {
    id: "3",
    title: "Los versos satánicos",
    image: "https://via.placeholder.com/300x200?text=Piano",
    price: 899,
  },
];

export const Catalogue = () => {
  const styles = useStyles();

  return (
    <div className={styles.grid}>
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalogue;
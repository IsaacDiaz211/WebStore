import { ProductCard } from "../components/Product";
import { Book } from "../types/book";
import { makeStyles } from "@fluentui/react-components";
import  FilterCard  from "../components/FilterCard";
import  SortBy  from "../components/SortBy";

const useStyles = makeStyles({
  layout: {
    display: "flex",
    gap: "2rem",
    alignItems: "flex-start",
    padding: "1rem",
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "1rem",
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
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <FilterCard />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        <SortBy />
        <div className={styles.grid}>
          {dummyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Catalogue;

/**<div className={styles.grid}>
      {dummyProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div> 
    <div className={styles.layout}>
        <div className={styles.sidebar}>
          <FilterCard />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}></div>
          <SortBy />
          <div className={styles.grid}>
            
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
      </div>*/
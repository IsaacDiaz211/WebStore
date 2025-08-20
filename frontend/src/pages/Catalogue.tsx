import ProductCard  from "../components/ProductCard";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchActiveBooks } from "../services/bookService";
import { makeStyles } from "@fluentui/react-components";
//import  FilterCard  from "../components/FilterCard";
//import  SortBy  from "../components/SortBy";

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


export const Catalogue = () => {
  const styles = useStyles();
  const { data, isLoading } = useQuery({
  queryKey: ["books"],
  queryFn: () => fetchActiveBooks(),
  });
  const books = data?.books || [];
  console.log("Libros cargados:", books);
  return (
    <div className={styles.grid}>
      {books.map((books) => (
        <ProductCard {...books} />
      ))}
    </div>
  );
};

export default Catalogue;
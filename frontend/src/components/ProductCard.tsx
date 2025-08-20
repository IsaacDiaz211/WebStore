import { Card, CardHeader, CardFooter, Image, Text } from "@fluentui/react-components";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { breakpoints } from "../types/Breakpoints";
import { Book } from "../types/book";


const ProductCard = ( product: Book) => {
  // Detectar si estamos en mobile/tablet
  const isCompact = useMediaQuery(`(max-width: ${breakpoints.md}px)`);

  return (
    <Card style={{ width: "100%" }}>
      <CardHeader
        image={<Image src={product.imageCover} alt={product.title} height={80} />}
        header={<Text weight="semibold">{product.title}</Text>}
      />

      {!isCompact && (
        <>
          <Text>{product.description}</Text>
          <Text weight="semibold">${product.price}</Text>
        </>
      )}

      <CardFooter>
        <Text size={200} color="brand">
          {isCompact ? `$${product.price}` : "Comprar ahora"}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

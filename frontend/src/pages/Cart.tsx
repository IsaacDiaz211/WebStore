import CartItemCard from "../components/CartItemCard";
import CartSummary from "../components/CartSummary";
import { makeStyles } from "@fluentui/react-components";
import { useState } from "react";
import { Book } from "../types/book";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "2rem",
    maxWidth: "700px",
    margin: "0 auto",
  },
});

const dummyBooks: Book[] = [
  { id: "1", title: "Harry Potter", price: 350, image: "" },
  { id: "2", title: "El Hobbit", price: 500, image: "" },
];

const Cart = () => {
  const styles = useStyles();
  const [cart, setCart] = useState([
    { book: dummyBooks[0], quantity: 3 },
    { book: dummyBooks[1], quantity: 1 },
  ]);

  const updateQuantity = (index: number, change: number) => {
    setCart((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + change),
            }
          : item
      )
    );
  };

  return (
      <div className={styles.page}>
        {cart.map((item, i) => (
          <CartItemCard
            key={item.book.id}
            book={item.book}
            quantity={item.quantity}
            onIncrease={() => updateQuantity(i, 1)}
            onDecrease={() => updateQuantity(i, -1)}
          />
        ))}
        <CartSummary cart={cart} />
      </div>
  );
};

export default Cart;
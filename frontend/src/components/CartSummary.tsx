import { makeStyles, Body1, Body1Strong, Button } from "@fluentui/react-components";
import { Book } from "../types/book";

const useStyles = makeStyles({
  summary: {
    marginTop: "2rem",
    padding: "1rem",
    borderTop: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  line: {
    display: "flex",
    justifyContent: "space-between",
  },
  total: {
    borderTop: "1px solid #999",
    paddingTop: "0.5rem",
    fontWeight: "bold",
  },
});

type Props = {
  cart: { book: Book; quantity: number }[];
};

const CartSummary = ({ cart }: Props) => {
  const styles = useStyles();

  const getSubtotal = (b: Book, q: number) => b.price * q;
  const total = cart.reduce((acc, { book, quantity }) => acc + getSubtotal(book, quantity), 0);

  return (
    <div className={styles.summary}>
      {cart.map(({ book, quantity }) => (
        <div key={book.id} className={styles.line}>
          <Body1>
            {book.title} ({quantity} unid.)
          </Body1>
          <Body1>${(book.price * quantity).toFixed(2)}</Body1>
        </div>
      ))}

      <div className={`${styles.line} ${styles.total}`}>
        <Body1Strong>Total</Body1Strong>
        <Body1Strong>${total.toFixed(2)}</Body1Strong>
      </div>

      <Button 
      appearance="primary"
      size="large"
      href="/pagar"
      >
        Pagar
      </Button>
    </div>
  );
};

export default CartSummary;
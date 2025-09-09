import {
  Card,
  Button,
  makeStyles,
  Body1,
  Caption1,
} from "@fluentui/react-components";
import { Book } from "../types/book";

const useStyles = makeStyles({
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    gap: "1rem",
  },
  info: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
});

type Props = {
  book: Book;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const CartItemCard = ({ book, quantity, onIncrease, onDecrease }: Props) => {
  const styles = useStyles();

  return (
    <Card className={styles.card}>
      <div className={styles.info}>
        <Body1>{book.title}</Body1>
        <Caption1>${book.price.toFixed(2)} c/u</Caption1>
      </div>
      <div className={styles.controls}>
        <Button size="small" onClick={onDecrease}>-</Button>
        <Body1>{quantity}</Body1>
        <Button size="small" onClick={onIncrease}>+</Button>
      </div>
    </Card>
  );
};

export default CartItemCard;
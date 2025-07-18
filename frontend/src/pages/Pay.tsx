import CartSummary from "../components/CartSummary";
import PaymentSelector from "../components/PaymentSelector";
import PayCardForm from "../components/PayCardForm";
import TransferenciaInfo from "../components/TransferenciaInfo";
import QrCodeDisplay from "../components/QrCodeDisplay";
import CryptoInfo from "../components/CryptoInfo";
import { PayMethod } from "../types/PayMethod";
import { Button, makeStyles } from "@fluentui/react-components";
import { useState } from "react";

const useStyles = makeStyles({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    padding: "2rem",
  },
});

const dummyCart = [
  {
    book: { id: "1", title: "Harry Potter", price: 350, image: "" },
    quantity: 3,
  },
];

const Pay = () => {
  const styles = useStyles();
  const [method, setMethod] = useState<PayMethod>("card");

  return (
      <div className={styles.page}>
        <CartSummary cart={dummyCart} />
        <PaymentSelector value={method} onChange={setMethod} />

        {method === "card" && <PayCardForm />}
        {method === "transfer" && <TransferenciaInfo />}
        {method === "qr" && <QrCodeDisplay />}
        {method === "crypto" && <CryptoInfo />}

        <Button appearance="primary" size="large">
          Confirmar pago
        </Button>
      </div>
  );
};

export default Pay;
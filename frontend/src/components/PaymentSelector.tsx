// src/components/PaymentSelector/PaymentSelector.tsx
import {
  makeStyles,
} from "@fluentui/react-components";
//import { PayMethod } from "../types/payMethod";

const useStyles = makeStyles({
  wrapper: {
    marginTop: "2rem",
    maxWidth: "400px",
    width: "100%",
  },
});

/*type Props = {
  value: PayMethod;
  onChange: (value: PayMethod) => void;
};*/

const PaymentSelector = () => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      
    </div>
  );
};

export default PaymentSelector;
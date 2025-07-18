// src/components/PaymentSelector/PaymentSelector.tsx
import {
  Dropdown,
  Option,
  Field,
  makeStyles,
} from "@fluentui/react-components";
import { PayMethod } from "../types/PayMethod";

const useStyles = makeStyles({
  wrapper: {
    marginTop: "2rem",
    maxWidth: "400px",
    width: "100%",
  },
});

type Props = {
  value: PayMethod;
  onChange: (value: PayMethod) => void;
};

const PaymentSelector = ({ value, onChange }: Props) => {
  const styles = useStyles();

  return (
    <div className={styles.wrapper}>
      <Field label="Seleccioná método de pago">
        <Dropdown
          value={value}
          onOptionSelect={(e, data) => onChange(data.optionValue as PayMethod)}
        >
          <Option value="card">Tarjeta</Option>
          <Option value="transfer">Transferencia</Option>
          <Option value="qr">Código QR</Option>
          <Option value="crypto">Criptomoneda</Option>
        </Dropdown>
      </Field>
    </div>
  );
};

export default PaymentSelector;
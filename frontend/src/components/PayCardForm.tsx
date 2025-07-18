import { Field, Input, makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "1rem",
    maxWidth: "400px",
  },
});

const PayCardForm = () => {
  const styles = useStyles();
  return (
    <div className={styles.form}>
      <Field label="Número de tarjeta">
        <Input type="text" />
      </Field>
      <Field label="Nombre del titular">
        <Input type="text" />
      </Field>
      <Field label="Fecha de vencimiento">
        <Input type="text" placeholder="MM/AA" />
      </Field>
      <Field label="Código de seguridad (CVV)">
        <Input type="text" />
      </Field>
    </div>
  );
};

export default PayCardForm;
// src/components/ConsultationCard/ConsultationCard.tsx

import {
  Card,
  CardHeader,
  Button,
  makeStyles,
  Field,
  Input,
  Textarea,
} from "@fluentui/react-components";
import { useState } from "react";

const useStyles = makeStyles({
  card: {
    maxWidth: "500px",
    width: "100%",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5rem",
  },
});

const ConsultationCard = () => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    console.log("Email:", email);
    console.log("Mensaje:", message);
    // Acá luego se conecta con backend
  };

  return (
    <Card className={styles.card}>
      <CardHeader header="¿Tenés alguna consulta?" />

      <Field label="Email">
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Field>

      <Field label="Mensaje">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          resize="vertical"
        />
      </Field>

      <Button appearance="primary" onClick={handleSend}>
        Enviar
      </Button>
    </Card>
  );
};

export default ConsultationCard;
// src/components/LogInCard/LogInCard.tsx

import {
  Button,
  Field,
  Input,
  makeStyles,
  Body1,
} from "@fluentui/react-components";
import { Link } from "react-router-dom";

interface LogInCardProps {
  email: string;
  password: string;
  error?: string;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "2rem",
  },
  link: {
    marginTop: "1rem",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
  },
});

const LogInFluent = ({
  email,
  password,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LogInCardProps) => {
  const styles = useStyles();

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <Field label="Email">
        <Input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          required
        />
      </Field>

      <Field label="Contraseña">
        <Input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          required
        />
      </Field>

      {error && <div className={styles.error}>{error}</div>}

      <Button type="submit" appearance="primary">
        Iniciar sesión
      </Button>

      <div className={styles.link}>
        <Body1>¿No tienes cuenta aún?</Body1>
        <Link to="/registrarse">Registrarse</Link>
      </div>
    </form>
  );
};

export default LogInFluent;
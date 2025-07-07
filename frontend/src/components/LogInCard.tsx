/*import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

interface LogInCardProps {
  email: string;
  pass: string;
  error?: string;
  onEmailChange: (email: string) => void;
  onPassChange: (pass: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LogInCard = ({
  email,
  pass,
  error,
  onEmailChange,
  onPassChange,
  onSubmit,
}: LogInCardProps) => {
  return (
    <Form onSubmit={onSubmit}>   👈 Esto activa el submit al presionar Enter o clicar el botón 
    <Form onSubmit={(e) => {
      console.log("Form submitted"); // 👈 Verifica si aparece en consola
      e.preventDefault();
      onSubmit(e);
    }}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col md="3">
          <Form.Control 
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange = {(e) => onEmailChange(e.target.value)}
            required
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Contraseña
        </Form.Label>
        <Col md="3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={pass}
            onChange = {(e) => onPassChange(e.target.value)}
            required
          />
        </Col>
      </Form.Group>
      <Button type="submit" variant="primary">Iniciar sesión</Button>
      {error && <div className="text-danger mt-2">{error}</div>}
      <h3>¿No tienes cuenta aún?</h3>
      <Link to="/registrarse">Registrarse</Link>
    </Form>
  );
}

export default LogInCard;*/

import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface LogInCardProps {
  email: string;
  pass: string;
  error?: string;
  onEmailChange: (email: string) => void;
  onPassChange: (pass: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LogInCard = ({
  email,
  pass,
  error,
  onEmailChange,
  onPassChange,
  onSubmit,
}: LogInCardProps) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[DEBUG] Formulario enviado"); // 👈 ¡Debe aparecer en consola!
    onSubmit(e);
  };

  return (
    <form onSubmit={handleFormSubmit}> {/* Usamos form HTML nativo */}
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          value={pass}
          onChange={(e) => onPassChange(e.target.value)}
          required
        />
      </Form.Group>

      <Button type="submit" variant="primary" className="w-100">
        Iniciar sesión
      </Button>

      {error && <div className="text-danger mt-2">{error}</div>}

      <div className="mt-3 text-center">
        <Link to="/registrarse">¿No tienes cuenta? Regístrate</Link>
      </div>
    </form>
  );
};

export default LogInCard;
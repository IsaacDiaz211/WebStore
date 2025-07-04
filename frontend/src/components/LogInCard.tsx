import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

interface LogInCardProps {
  email: string;
  pass: string;
  onEmailChange: (email: string) => void;
  onPassChange: (pass: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LogInCard = ({
  email,
  pass,
  onEmailChange,
  onPassChange,
  onSubmit,
}: LogInCardProps) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col md="3">
          <Form.Control 
            type="text"
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
      <Button variant="primary">Iniciar sesión</Button>
      <h3>¿No tienes cuenta aún?</h3>
      <Link to="/registrarse">Registrarse</Link>
    </Form>
  );
}

export default LogInCard;
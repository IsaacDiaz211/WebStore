import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

interface ProfileProps {
  name: string;
  lastName: string;
  email: string;
  pass: string;
  password: string;
  onEmailChange: (email: string) => void;
  onPassChange: (pass: string) => void;
  onPasswordChange: (password: string) => void;
  onNameChange: (name: string) => void;
  onLastNameChange: (lastName: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const AddProfile = ({
  name,
  lastName,
  email,
  pass,
  password,
  onEmailChange,
  onPassChange,
  onPasswordChange,
  onNameChange,
  onLastNameChange,
  onSubmit,
}: ProfileProps) => {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="nombre"
            value={name}
            onChange={(e) => onNameChange(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="apellido"
            value={lastName}
            onChange={(e) => onLastNameChange(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) => onPassChange(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Verificar contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
            required
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}

export default AddProfile;
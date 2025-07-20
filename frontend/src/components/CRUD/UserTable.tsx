import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Button,
  Text,
  Card,
  CardHeader,
  CardFooter,
} from "@fluentui/react-components";
import { User } from "../../types/user";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

const UserTable = ({ users, onEdit, onDelete }: Props) => (
  <Card>
    <CardHeader header={<Text weight="semibold">Usuarios</Text>} />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Rol</TableHeaderCell>
          <TableHeaderCell>Estado</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell>{user.isActive ? "Activo" : "Inactivo"}</TableCell>
            <TableCell>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button size="small" onClick={() => onEdit(user)}>
                  Editar
                </Button>
                <Button
                  size="small"
                  appearance="primary"
                  color="danger"
                  onClick={() => onDelete(user.id)}
                >
                  Eliminar
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <CardFooter>
      <Text size={200} color="brand">
        {users.length} usuarios encontrados
      </Text>
    </CardFooter>
  </Card>
);

export default UserTable;
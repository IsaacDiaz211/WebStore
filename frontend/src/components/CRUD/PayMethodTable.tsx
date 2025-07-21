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
  Badge,
} from "@fluentui/react-components";
import { PayMethod } from "../../types/PayMethod";

interface TableProps {
  payMethods: PayMethod[];
  onEdit: (payMethod: PayMethod) => void;
  onDelete: (id: string) => void;
}

const PayMethodTable = ({ payMethods, onEdit, onDelete }: TableProps) => (
  <Card>
    <CardHeader header={<Text weight="semibold">Medios de Pago</Text>} />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Recargo (%)</TableHeaderCell>
          <TableHeaderCell>Estado</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payMethods.map((payMethod) => (
          <TableRow key={payMethod._id}>
            <TableCell>{payMethod.name}</TableCell>
            <TableCell>{payMethod.surcharge}%</TableCell>
            <TableCell>
              <Badge appearance="filled" color={payMethod.isActive ? "brand" : "danger"}>
                {payMethod.isActive ? "Activo" : "Inactivo"}
              </Badge>
            </TableCell>
            <TableCell>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button size="small" onClick={() => onEdit(payMethod)}>
                  Editar
                </Button>
                <Button
                  size="small"
                  appearance="primary"
                  color="danger"
                  onClick={() => onDelete(payMethod._id)}
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
        {payMethods.length} medios de pago encontrados
      </Text>
    </CardFooter>
  </Card>
);

export default PayMethodTable;
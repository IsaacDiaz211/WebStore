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
import { Category } from "../../types/category";

interface TableProps {
  categories: Category[];
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

const CategoryTable = ({ categories, onEdit, onDelete }: TableProps) => (
  <Card>
    <CardHeader header={<Text weight="semibold">Categorías</Text>} />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category._id}>
            <TableCell>{category.name}</TableCell>
            <TableCell>{category.isActive ? "Activo" : "Inactivo"}</TableCell>
            <TableCell>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button size="small" onClick={() => onEdit(category)}>
                  Editar
                </Button>
                <Button
                  size="small"
                  appearance="primary"
                  color="danger"
                  onClick={() => onDelete(category._id)}
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
        {categories.length} categorías encontradas
      </Text>
    </CardFooter>
  </Card>
);

export default CategoryTable;
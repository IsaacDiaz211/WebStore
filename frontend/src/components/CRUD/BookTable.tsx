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
import { Book } from "../../types/book";

interface Props {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

const BookTable = ({ books, onEdit, onDelete }: Props) => (
  <Card>
    <CardHeader header={<Text weight="semibold">Libros</Text>} />
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Título</TableHeaderCell>
          <TableHeaderCell>Precio</TableHeaderCell>
          <TableHeaderCell>Descripción</TableHeaderCell>
          <TableHeaderCell>Autor</TableHeaderCell>
          <TableHeaderCell>Editorial</TableHeaderCell>
          <TableHeaderCell>Lenguaje</TableHeaderCell>
          <TableHeaderCell>Stock</TableHeaderCell>
          <TableHeaderCell>Categorias</TableHeaderCell>
          <TableHeaderCell>Portada</TableHeaderCell>
          <TableHeaderCell>Contratapa</TableHeaderCell>
          <TableHeaderCell>Estado</TableHeaderCell>
          <TableHeaderCell>Acciones</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.price}</TableCell>
            <TableCell>{book.description}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.language}</TableCell>
            <TableCell>{book.stock}</TableCell>
            <TableCell>{book.categories}</TableCell>
            <TableCell>{book.imageCover}</TableCell>
            <TableCell>{book.imageBack}</TableCell>
            <TableCell>{book.isActive ? "Activo" : "Inactivo"}</TableCell>
            <TableCell>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button size="small" onClick={() => onEdit(book)}>
                  Editar
                </Button>
                <Button
                  size="small"
                  appearance="primary"
                  color="danger"
                  onClick={() => onDelete(book.id)}
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
        {books.length} libros encontrados
      </Text>
    </CardFooter>
  </Card>
);

export default BookTable;
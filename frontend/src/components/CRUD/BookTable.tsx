import {
  Image,
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Tag,
  Button,
  Text,
  Card,
  CardHeader,
  CardFooter,
} from "@fluentui/react-components";
import { Book } from "../../types/book";

interface TableProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}


const BookTable = ({ books, onEdit, onDelete }: TableProps) => (
  <Card>
    <CardHeader header={<Text weight="semibold">Libros</Text>} />
    <div style={{ overflowX: "auto" }}>
      <Table style={{ minWidth: "1200px" }}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className="sticky-col left-col">Título</TableHeaderCell>
          <TableHeaderCell>Precio</TableHeaderCell>
          <TableHeaderCell>Descripción</TableHeaderCell>
          <TableHeaderCell>Autor</TableHeaderCell>
          <TableHeaderCell>Editorial</TableHeaderCell>
          <TableHeaderCell>Lenguaje</TableHeaderCell>
          <TableHeaderCell>Stock</TableHeaderCell>
          <TableHeaderCell>Categorias</TableHeaderCell>
          <TableHeaderCell>Portada</TableHeaderCell>
          <TableHeaderCell >Contratapa</TableHeaderCell>
          <TableHeaderCell>Estado</TableHeaderCell>
          <TableHeaderCell className="sticky-col left-col">Acciones</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {books.map((book) => (
          <TableRow key={book.id}>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.price}</TableCell>
            <TableCell>{book.description}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.editorial}</TableCell>

            <TableCell>{book.language}</TableCell>
            <TableCell>{book.stock}</TableCell>
            <TableCell>
              <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                {book.categories.map((category, index) => (
                  <Tag key={index} appearance="filled">
                    {category.name}
                  </Tag>
                ))}
              </div>
            </TableCell>
            <TableCell>        
              <div style={{ padding: '8px' }}>
                <Image
                  shape="rounded"
                  src={book.imageCover}
                  height={90}
                  width={90}
                />
              </div> 
            </TableCell>
            <TableCell>
                <div style={{ padding: '8px 15px' }}>
                <Image
                  shape="rounded"
                  src={book.imageBack}
                  height={90}
                  width={90}
                />
              </div>
            </TableCell>
            <TableCell style={{ paddingLeft: "35px" }}>
              {book.isActive ? "Activo" : "Inactivo"}
            </TableCell>
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
    </div>
    <CardFooter>
      <Text size={200} color="brand">
        {books.length} libros encontrados
      </Text>
    </CardFooter>
  </Card>
);

export default BookTable;
import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getBooks, createBook, updateBook, deleteBook } from "../../services/bookService";
import { Book } from "../../types/book";
import CrudLayout from "../../components/CRUD/CrudLayout";
import CrudModal from "../../components/CRUD/CrudModal";
import BookTable from "../../components/CRUD/BookTable";
import BookForm from "../../components/CRUD/BookForm";

const CrudBook = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Partial<Book>>({});
  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
  });

  const createMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, book }: { id: string; book: Partial<Book> }) =>
      updateBook(id, book),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      setModalOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  const filteredBooks = useMemo(() => {
    return books.filter((u) =>
      `${u.title} ${u.author}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [books, search]);

  const handleEdit = (book: Book) => {
    setEditingBook(book);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro que deseas eliminar este usuario?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = () => {
    if (editingBook?.id) {
      const { id, ...data } = editingBook;
      updateMutation.mutate({ id, book: data });
    } else {
      createMutation.mutate(editingBook as Partial<Book>);
    }
  };

  return (
    <>
      <CrudLayout
        title="Gestión de Libros"
        searchTerm={search}
        onSearch={setSearch}
        onNew={() => {
          setEditingBook({});
          setModalOpen(true);
        }}
      >
        <BookTable books={filteredBooks} onEdit={handleEdit} onDelete={handleDelete} />
      </CrudLayout>

      <CrudModal
        open={modalOpen}
        title={editingBook ? "Editar Libro" : "Nuevo Libro"}
        onOpenChange={setModalOpen}
        onSubmit={handleSubmit}
      >
        <BookForm 
          book={editingBook as Book}
          onChange={(field, value) =>
            setEditingBook((prev) => ({
              ...(prev ?? {}),
              [field]: value,
            }))} />
      </CrudModal>
    </>
  );
};

export default CrudBook;
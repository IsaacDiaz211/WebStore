import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchBooks, createBook, updateBook, deleteBook } from "../../services/bookService";
import { fetchCategories } from "../../services/categoryService";
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
  
  const { data, isLoading } = useQuery({
  queryKey: ["books"],
  queryFn: () => fetchBooks(),
  });
  const books = data?.books || [];
  console.log("Libros cargados:", books);
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const createMutation = useMutation({
    mutationFn: createBook,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["books"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, formData }: { id: string; formData: FormData }) =>
      updateBook(id, formData),
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
    if (!editingBook.title || !editingBook.price || !editingBook.author) return;

    const formData = new FormData();
    Object.entries(editingBook).forEach(([key, value]) => {
      if (value instanceof File) formData.append(key, value);
      else if (Array.isArray(value)) formData.append(key, JSON.stringify(value));
      else if (value !== undefined && value !== null) formData.append(key, value.toString());
    });

    if (editingBook.id) {
      updateMutation.mutate({ id: editingBook.id, formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  return (
    <>
      <CrudLayout
        title="Gestión de Libros"
        searchTerm={search}
        onSearch={setSearch}
        onNew={() => {
          setEditingBook({
            title: "",
            price: 0,
            author: "",
            editorial: "",
            description: "",
            language: "español",
            stock: 0,
            categories: [],
            imageCover: "",
            imageBack: "",
          });
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
            }))
          }
          allCategories={categories}
            />
      </CrudModal>
    </>
  );
};

export default CrudBook;
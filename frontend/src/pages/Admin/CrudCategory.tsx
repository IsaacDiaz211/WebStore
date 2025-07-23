import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  fetchCategories, 
  createCategory, 
  updateCategory, 
  deleteCategory 
} from "../../services/categoryService";
import CrudLayout from "../../components/CRUD/CrudLayout";
import CrudModal from "../../components/CRUD/CrudModal";
import CategoryTable from "../../components/CRUD/CategoryTable";
import CategoryForm from "../../components/CRUD/CategoryForm";
import { Category } from "../../types/category";

const CrudCategory = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Partial<Category>>({});
  
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const createMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, category }: { id: string; category: Partial<Category> }) =>
      updateCategory(id, category),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setModalOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
  });

  const filteredCategories = useMemo(() => {
    return categories.filter(cat =>
      cat.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro que deseas eliminar esta categoría?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = () => {
    if (editingCategory._id) {
      const { _id, ...data } = editingCategory;
      updateMutation.mutate({ id: _id!, category: data });
    } else {
      createMutation.mutate(editingCategory as Partial<Category>);
    }
  };

  return (
    <>
      <CrudLayout
        title="Gestión de Categorías"
        searchTerm={search}
        onSearch={setSearch}
        onNew={() => {
          setEditingCategory({});
          setModalOpen(true);
        }}
      >
        <CategoryTable 
          categories={filteredCategories} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </CrudLayout>

      <CrudModal
        open={modalOpen}
        title={editingCategory._id ? "Editar Categoría" : "Nueva Categoría"}
        onOpenChange={setModalOpen}
        onSubmit={handleSubmit}
      >
        <CategoryForm 
          category={editingCategory}
          onChange={(field, value) =>
            setEditingCategory((prev) => ({
              ...(prev ?? {}),
              [field]: value,
            }))
          } 
        />
      </CrudModal>
    </>
  );
};

export default CrudCategory;
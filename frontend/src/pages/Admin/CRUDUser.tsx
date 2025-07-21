import { useState, useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUsers, createUser, updateUser, deleteUser } from "../../services/userService";
import { User } from "../../types/user";
import CrudLayout from "../../components/CRUD/CrudLayout";
import CrudModal from "../../components/CRUD/CrudModal";
import UserTable from "../../components/CRUD/UserTable";
import UserForm from "../../components/CRUD/UserForm";

const CrudUser = () => {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  //const [editingUser, setEditingUser] = useState<User | null>(null);
  const [editingUser, setEditingUser] = useState<Partial<User>>({});
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, user }: { id: string; user: Partial<User> }) =>
      updateUser(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setModalOpen(false);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      `${u.name} ${u.email}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro que deseas eliminar este usuario?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleSubmit = () => {
    if (editingUser?.id) {
      const { id, ...data } = editingUser;
      updateMutation.mutate({ id, user: data });
    } else {
      createMutation.mutate(editingUser as Partial<User>);
    }
  };

  return (
    <>
      <CrudLayout
        title="Gestión de Usuarios"
        searchTerm={search}
        onSearch={setSearch}
        onNew={() => {
          setEditingUser({});
          setModalOpen(true);
        }}
      >
        <UserTable users={filteredUsers} onEdit={handleEdit} onDelete={handleDelete} />
      </CrudLayout>

      <CrudModal
        open={modalOpen}
        title={editingUser ? "Editar Usuario" : "Nuevo Usuario"}
        onOpenChange={setModalOpen}
        onSubmit={handleSubmit}
      >
        <UserForm 
          user={editingUser ?? {}}
          onChange={(field, value) =>
            setEditingUser((prev) => ({
              ...(prev ?? {}),
              [field]: value,
            }))} />
      </CrudModal>
    </>
  );
};

export default CrudUser;
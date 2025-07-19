import { useEffect, useState } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../../services/userService";

import { User } from "../../types/user";
import UserSearch from "../../components/CRUD_user/UserSearch";
import UserTable from "../../components/CRUD_user/UserTable";
import UserModal from "../../components/CRUD_user/UserModal";
import { makeStyles, Text } from "@fluentui/react-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";


const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    padding: "2rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const CrudUser = () => {
  const styles = useStyles();
  const queryClient = useQueryClient();

  const [searchTerm, setSearchTerm] = useState("");
  const [userForm, setUserForm] = useState<Partial<User>>({});
  const [editing, setEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, user }: { id: string; user: Partial<User> }) =>
      updateUser(id, user),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  const handleFormChange = (field: keyof User, value: any) =>
    setUserForm({ ...userForm, [field]: value });

  const handleSubmit = async () => {
    if (!userForm.name || !userForm.email) return;

    try {
      if (editing && userForm.id) {
        await updateMutation.mutateAsync({ id: userForm.id, user: userForm });
      } else {
        await createMutation.mutateAsync(userForm);
      }

      setModalOpen(false);
      setUserForm({});
      setEditing(false);
    } catch (err) {
      alert("Error al guardar el usuario.");
    }
  };

  const handleEdit = (user: User) => {
    setUserForm(user);
    setEditing(true);
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Eliminar este usuario?")) {
      try {
        await deleteMutation.mutateAsync(id);
      } catch {
        alert("No se pudo eliminar el usuario.");
      }
    }
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text as="h1" weight="semibold" size={500}>
          Gestión de Usuarios
        </Text>
        <UserModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          user={userForm}
          editing={editing}
          onChange={handleFormChange}
          onSubmit={handleSubmit}
        />
      </div>

      <UserSearch value={searchTerm} onChange={setSearchTerm} />

      {isLoading ? (
        <Text>Cargando usuarios...</Text>
      ) : error ? (
        <Text>Hubo un error cargando los usuarios</Text>
      ) : (
        <UserTable users={filtered} onEdit={handleEdit} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default CrudUser;
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {  
  createPayMethod, 
  updatePayMethod 
} from "../../services/payMethodService";
//import CrudLayout from "../../components/CRUD/CrudLayout";
import CrudModal from "../../components/CRUD/CrudModal";
//import PayMethodTable from "../../components/CRUD/PayMethodTable";
import PayMethodForm from "../../components/CRUD/PayMethodForm";
import { PayMethod } from "../../types/payMethod";

const CrudPayMethod = () => {
  const queryClient = useQueryClient();
  //const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editingPayMethod, setEditingPayMethod] = useState<Partial<PayMethod>>({});
  
  /*const { data: payMethods = [] } = useQuery({
    queryKey: ["payMethods"],
    queryFn: getPayMethods,
  });*/

  const createMutation = useMutation({
    mutationFn: createPayMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payMethods"] });
      setModalOpen(false);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, payMethod }: { id: string; payMethod: Partial<PayMethod> }) =>
      updatePayMethod(id, payMethod),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payMethods"] });
      setModalOpen(false);
    },
  });

  /*const deleteMutation = useMutation({
    mutationFn: deletePayMethod,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payMethods"] });
    },
  });*/

  /*const filteredPayMethods = useMemo(() => {
    return payMethods.filter(pm =>
      `${pm.name}`.toLowerCase().includes(search.toLowerCase())
    );
  }, [payMethods, search]);*/

  /*const handleEdit = (payMethod: PayMethod) => {
    setEditingPayMethod(payMethod);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro que deseas eliminar este medio de pago?")) {
      deleteMutation.mutate(id);
    }
  };*/

  const handleSubmit = () => {
    if (editingPayMethod._id) {
      const { _id, ...data } = editingPayMethod;
      updateMutation.mutate({ id: _id!, payMethod: data });
    } else {
      createMutation.mutate(editingPayMethod as Partial<PayMethod>);
    }
  };

  return (
    <>
      {/*<CrudLayout
        title="Gestión de Medios de Pago"
        searchTerm={search}
        onSearch={setSearch}
        onNew={() => {
          setEditingPayMethod({});
          setModalOpen(true);
        }}
      >
        <PayMethodTable 
          payMethods={filteredPayMethods} 
          onEdit={handleEdit} 
          onDelete={handleDelete} 
        />
      </CrudLayout>*/}

      <CrudModal
        open={modalOpen}
        title={editingPayMethod._id ? "Editar Medio de Pago" : "Nuevo Medio de Pago"}
        onOpenChange={setModalOpen}
        onSubmit={handleSubmit}
      >
        <PayMethodForm 
          payMethod={editingPayMethod}
          onChange={(field, value) =>
            setEditingPayMethod((prev) => ({
              ...(prev ?? {}),
              [field]: value,
            }))
          } 
        />
      </CrudModal>
    </>
  );
};

export default CrudPayMethod;
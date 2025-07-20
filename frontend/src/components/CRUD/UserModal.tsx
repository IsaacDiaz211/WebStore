import {
  Button,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  makeStyles,
} from "@fluentui/react-components";
import { User } from "../../types/user";
import UserForm from "./UserForm";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
});

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  user: Partial<User>;
  editing: boolean;
  onChange: (field: keyof User, value: any) => void;
  onSubmit: () => void;
}

const UserModal = ({
  open,
  onOpenChange,
  user,
  editing,
  onChange,
  onSubmit,
}: Props) => {
  const styles = useStyles();

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogTrigger disableButtonEnhancement>
        <Button appearance="primary">Añadir usuario</Button>
      </DialogTrigger>
      <DialogSurface>
        <form onSubmit={(e) => e.preventDefault()}>
          <DialogTitle>{editing ? "Editar usuario" : "Nuevo usuario"}</DialogTitle>
          <DialogBody>
            <div className={styles.form}>
              <UserForm user={user} onChange={onChange} />
            </div>
          </DialogBody>
          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Cancelar</Button>
            </DialogTrigger>
            <Button appearance="primary" type="submit" onClick={onSubmit}>
              {editing ? "Guardar cambios" : "Crear usuario"}
            </Button>
          </DialogActions>
        </form>
      </DialogSurface>
    </Dialog>
  );
};

export default UserModal;
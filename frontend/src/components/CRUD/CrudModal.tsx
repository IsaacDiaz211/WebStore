import {
  Dialog,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  Button,
} from "@fluentui/react-components";

interface CrudModalProps {
  open: boolean;
  title: string;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => void;
  children: React.ReactNode;
  submitLabel?: string;
}

const CrudModal = ({
  open,
  title,
  onOpenChange,
  onSubmit,
  children,
  submitLabel = "Guardar",
}: CrudModalProps) => {
  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface style={{ minWidth: "600px", maxWidth: "900px", width: "80vw" }}>
        <DialogBody>
          <DialogTitle>{title}</DialogTitle>
          {children}
          <DialogActions>
            <Button appearance="secondary" onClick={() => onOpenChange(false)}>
              Cancelar
            </Button>
            <Button appearance="primary" onClick={onSubmit}>
              {submitLabel}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};

export default CrudModal;
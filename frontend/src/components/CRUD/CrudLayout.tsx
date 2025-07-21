import { Button } from "@fluentui/react-components";
//import AddRegular from "@fluentui/react-icons";
import SearchBar from "./SearchBar";

interface CrudLayoutProps {
  title: string;
  searchTerm: string;
  onSearch: (value: string) => void;
  onNew: () => void;
  children: React.ReactNode;
}

const CrudLayout = ({
  title,
  searchTerm,
  onSearch,
  onNew,
  children,
}: CrudLayoutProps) => {
  return (
    <div style={{ padding: "1rem" }}>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <Button appearance="primary" onClick={onNew}>
          Nuevo
        </Button>
      </div>
      <div className="mb-4">
        <SearchBar value={searchTerm} onChange={onSearch} placeholder="Buscar..." />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CrudLayout;
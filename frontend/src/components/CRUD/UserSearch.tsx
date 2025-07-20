import { SearchBox } from "@fluentui/react-components";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const UserSearch = ({ value, onChange }: Props) => (
  <SearchBox
    placeholder="Buscar usuarios..."
    value={value}
    onChange={(_, data) => onChange(data.value || "")}
  />
);

export default UserSearch;
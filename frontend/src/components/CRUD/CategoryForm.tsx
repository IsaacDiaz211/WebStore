import {
  Input,
  Field,
} from '@fluentui/react-components';
import { Category } from '../../types/category';

interface FormProps {
    category: Partial<Category>;
    onChange: (field: keyof Category, value: any) => void;
}
const CategoryForm = ({ category, onChange }: FormProps) => (
  <>
    <Field label="Nombre" required>
      <Input
        name="name"
        value={category.name || ''}
        onChange={(_, data) => onChange('name', data.value)}
        placeholder="Ingrese el nombre de la categoría"
      />
    </Field>
  </>
);

export default CategoryForm;
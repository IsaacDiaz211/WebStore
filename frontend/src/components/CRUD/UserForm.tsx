import React from 'react';
import {
  Input,
  Select,
  Option,
  Switch,
  Field,
} from '@fluentui/react-components';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  isActive: boolean;
};

const UserForm: React.FC<{
  user: Partial<User>;
  onChange: (field: keyof User, value: any) => void;
}> = ({ user, onChange }) => (
  <>
    <Field label="Nombre">
      <Input
        name="name"
        value={user.name || ''}
        onChange={(_, data) => onChange('name', data.value)}
      />
    </Field>
    <Field label="Email">
      <Input
        name="email"
        value={user.email || ''}
        onChange={(_, data) => onChange('email', data.value)}
      />
    </Field>
    <Field label="Rol">
      <Select
        name="role"
        value={user.role || 'customer'}
        onChange={(_, data) => onChange('role', data.value as 'customer' | 'Admin')}
    >
        <Option value="User">Usuario</Option>
        <Option value="Admin">Administrador</Option>
      </Select>
    </Field>
    <Switch
      label="Estado activo"
      checked={user.isActive === true}
      onChange={(_, data) => onChange('isActive', data.checked)}
    />
  </>
);

export default UserForm;
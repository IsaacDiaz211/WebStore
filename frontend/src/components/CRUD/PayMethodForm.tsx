import {
  Input,
  Field,
  Select,
  Option,
  Switch,
} from '@fluentui/react-components';
import { PayMethod } from '../../types/payMethod';

interface FormProps {
  payMethod: Partial<PayMethod>;
  onChange: (field: keyof PayMethod, value: any) => void;
}

const paymentOptions = [
  "tarjeta de débito",
  "transferencia",
  "qr",
  "crypto"
];

const PayMethodForm = ({ payMethod, onChange }: FormProps) => (
  <>
    <Field label="Nombre" required>
      <Select
        value={payMethod.name || ''}
        onChange={(_, data) => onChange('name', data.value)}
      >
        {paymentOptions.map(option => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </Field>

    <Field label="Recargo (%)">
      <Input
        type="number"
        value={payMethod.surcharge?.toString() || '0'}
        onChange={(_, data) => onChange('surcharge', Number(data.value))}
        min="0"
        step="0.1"
      />
    </Field>

    <Field label="Estado">
      <Switch
        checked={payMethod.isActive || false}
        onChange={(_, data) => onChange('isActive', data.checked)}
        label={payMethod.isActive ? "Activo" : "Inactivo"}
      />
    </Field>
  </>
);

export default PayMethodForm;
import React, { useState } from 'react';
import {
  Input,
  Select,
  Switch,
  Field,
} from '@fluentui/react-components';
import { Book } from '../../types/book';

const BookForm: React.FC<{
  book: Book;
  onChange: (field: keyof Book, value: any) => void;
}> = ({ book, onChange }) => (
  <>
    <Field label="Titulo">
      <Input
        name="title"
        value={book.title || ''}
        onChange={(_, data) => onChange('title', data.value)}
      />
    </Field>
    <Field label="Precio">
      <Input
        name="price"
        value={book.price.toString() || ''}
        onChange={(_, data) => onChange('price', data.value)}
      />
    </Field>
    <Field label="Descripcion">
      <Select
        name="description"
        value={book.description || ''}
        onChange={(_, data) => onChange('description', data.value)}
     />
    </Field>
    <Field label="Autor">
      <Input
        name="author"
        value={book.author || ''}
        onChange={(_, data) => onChange('author', data.value)}
      />
    </Field>
    <Field label="Editorial">
      <Input
        name="editorial"
        value={book.editorial || ''}
        onChange={(_, data) => onChange('editorial', data.value)}
      />
    </Field>
    <Field label="Lenguaje">
      <Input
        name="language"
        value={book.language || ''}
        onChange={(_, data) => onChange('language', data.value)}
      />
    </Field>
    <Field label="Stock">
      <Input
        name="stock"
        value={book.stock?.toString() || ''}
        onChange={(_, data) => onChange('stock', data.value)}
      />
    </Field>
    <Field label="Stock">
      <Input
        name="stock"
        value={book.stock?.toString() || ''}
        onChange={(_, data) => onChange('stock', data.value)}
      />
    </Field>
    <Field label="Categorias">
      <Input
        name="categories"
        value={book.categories[1].name || '' || undefined}
        onChange={(_, data) => onChange('categories', data.value)}
      />
    </Field>
    <Field label="Portada">
      <Input
        name="imageCover"
        value={book.imageCover || ''}
        onChange={(_, data) => onChange('imageCover', data.value)}
      />
    </Field>
    <Field label="Contratapa">
      <Input
        name="imageBack"
        value={book.imageBack || ''}
        onChange={(_, data) => onChange('stock', data.value)}
      />
    </Field>
    <Switch
      label="Estado activo"
      checked={book.isActive === true}
      onChange={(_, data) => onChange('isActive', data.checked)}
    />
  </>
);

export default BookForm;
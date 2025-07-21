import React, { useState } from 'react';
import {
  Button,
  Combobox,
  Input,
  Option,
  Tag,
  Select,
  Switch,
  Field,
} from '@fluentui/react-components';
import { Book } from '../../types/book';
import { Category } from '../../types/category';

interface FormProps {
  book: Book;
  onChange: (field: keyof Book, value: any) => void;
  allCategories: Category[];
}

const BookForm = ({ book, onChange, allCategories }: FormProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const handleAddCategory = () => {
    if (selectedCategory) {
      const categoryToAdd = allCategories.find(c => c._id === selectedCategory);
      if (categoryToAdd && !book.categories.some(c => c._id === selectedCategory)) {
        onChange('categories', [...book.categories, categoryToAdd]);
      }
      setSelectedCategory("");
    }
  };

  const handleRemoveCategory = (id: string) => {
    onChange('categories', book.categories.filter(c => c._id !== id));
  };
  return (
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
      <Field label="Categorías">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Combobox
            value={selectedCategory}
            selectedOptions={[selectedCategory]}
            onOptionSelect={(_, data) => setSelectedCategory(data.optionValue || "")}
          >
            {allCategories
              .filter(cat => !book.categories.some(c => c._id === cat._id))
              .map(category => (
                <Option key={category._id} value={category._id}>
                  {category.name}
                </Option>
              ))}
          </Combobox>
          <Button onClick={handleAddCategory}>Agregar</Button>
        </div>
        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '8px' }}>
          {book.categories.map(category => (
            <Tag
              key={category._id}
              appearance="filled"
              dismissible
              onClick={() => handleRemoveCategory(category._id)}
            >
              {category.name}
            </Tag>
          ))}
        </div>
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
};

export default BookForm;
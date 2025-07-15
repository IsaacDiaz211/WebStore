import express from 'express';
import { upload } from '../middlewares/upload';
import cloudinary from '../config/cloudinary';
import { Book } from '../domain/entities/Book';
import { BookController } from 'controllers/BookController';

let bookRoute: express.Router = express.Router();
const controller = new BookController();

bookRoute.route('/books')
    .post(upload.single('imageCover'), async(req, res) => {
        const file = req.file;
        const {
            title,
            price,
            stock,
        } = req.body;

        if (!file) {
            res.status(400).json({ message: 'Imagen de portada requerida' });
        }

        // Subir imagen a Cloudinary
        const result = await cloudinary.uploader.upload_stream(
            { folder: 'books' },
            async (error, result) => {
                if (error || !result) {
                    return res.status(500).json({ message: 'Error al subir imagen', error });
                }

                // Crear libro con la URL de la imagen
                const newBook = new Book({
                    title,
                    price,
                    stock,
                    imageCover: result.secure_url,
                });

            await controller.createBook(newBook, res);
            res.status(201).json({ message: 'Libro creado', book: newBook });
      }
    );

    // Convertimos el buffer en stream para Cloudinary
    const stream = require('stream');
    const readableStream = new stream.PassThrough();
    if (file && file.buffer) {
        readableStream.end(file.buffer);
    } else {
        res.status(400).json({ message: 'Invalid file upload' });
    }
    readableStream.pipe(result);
});

export default bookRoute;
import multer from 'multer';
import path from 'path';

// Configuración básica: guarda en memoria (usado para subir a Cloudinary directamente)
const storage = multer.memoryStorage();

const fileFilter = (req: any, file: any, cb: any) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
    return cb(new Error('Solo se permiten imágenes JPG o PNG'), false);
  }
  cb(null, true);
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});
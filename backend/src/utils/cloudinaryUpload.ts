import cloudinary from '../config/cloudinary';
import { v4 as uuidv4 } from 'uuid';
import { UploadApiResponse } from 'cloudinary';
import stream from 'stream';
import { LogInfo } from './logger';

export const uploadToCloudinary = (fileBuffer: Buffer, folder = 'books'): Promise<UploadApiResponse> => {
  LogInfo('Subiendo archivo a Cloudinary...');
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder, public_id: uuidv4() },
      (error, result) => {
        if (error || !result){
            LogInfo('Hubo resultado: ' + result);
            LogInfo('Hubo error: ' + JSON.stringify(error));
            return reject(error);
        } 
        resolve(result);
      }
    );

    const readableStream = new stream.PassThrough();
    readableStream.end(fileBuffer);
    readableStream.pipe(uploadStream);
  });
};

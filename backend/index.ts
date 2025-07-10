import dotenv from "dotenv";
import server from './src/server'
import * as process from "node:process";
import {LogError, LogSuccess} from "./src/utils/logger";

//Configuration the .env file
dotenv.config();
// Definimos el puerto, en este caso usamos una variable de entorno en .env
const port = process.env.PORT;

// Ejecutamos el servidor
server.listen(port, () => {
    LogSuccess(`Server started in http://localhost:${port}/api`);
});

// Controlar en caso de error
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});
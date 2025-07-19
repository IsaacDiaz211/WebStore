import express from "express";

//Conexión a la base de datos en MongoDB
import { connectDB } from '../config/db';
// Para seguridad
import cors from 'cors';
import helmet from 'helmet';
// Root Router
import routes from '../routes';
// Documentación
import swaggerUi from 'swagger-ui-express';
//import swaggerJSDoc from 'swagger-jsdoc';
import bodyParser from 'body-parser';
//import * as process from "node:process";


/**
 * El cors es lo que nos va a permitir que se hagan peticiones de dominios diferentes al que esté
 * desplegada la aplicación. Por ejemplo si se despliega en localhost y luego otra aplicación que no está en el localhost
 * no podrá realizar peticiones a través del navegador, no podría llegar a ocurrir o si
 * están en dominios totalmente diferentes no podrían comunicarse. Entonces hay que habilitar el cors, se puede habilitar en
 * términos generales de acuerdo que lo tenemos que hacer o se puede luego especificar listas blancas listas negras.
 */

const server = express();

//const fs = require("fs");
const path = require("path");

server.use("/public", express.static(path.resolve(__dirname, "../../public")));

// Generar la UI de Swagger
const swaggerHTML = swaggerUi.generateHTML(undefined, {
    swaggerOptions: {
        url: "/swagger.json",
        explorer: true,
    },
});

//server.use(bodyParser.json()); // Para parsear application/json
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({limit: "50mb"}));

// Habilita CORS para todas las rutas. Esto me impedía consumir la api desde react
//veremos cómo funciona
// Configuración PROFESIONAL de CORS
server.use(cors({
  origin: 'http://localhost:5173', // URL exacta de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Si usas cookies o tokens
}));

// Servir Swagger UI
server.use("/docs", swaggerUi.serve);
server.get("/docs", (req, res) => {
    res.send(swaggerHTML);
});

server.use(
    '/api',
    routes);
//Static server
server.use(express.static('public'));

server.use(helmet());
//server.use(cors());

server.get('/', (req, res) => {
    res.redirect('/api');
})

// Conectar a la base de datos que se encuentra en config/db.ts
connectDB();

export default server;
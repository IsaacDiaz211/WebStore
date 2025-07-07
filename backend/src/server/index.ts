import express from "express";
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import routes from '../routes';
import { connectDB } from '../config/db';
import bodyParser from 'body-parser';
//import * as process from "node:process";
//import swaggerJSDoc from 'swagger-jsdoc';

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

// Servir Swagger UI
server.use("/docs", swaggerUi.serve);
server.get("/docs", (req, res) => {
    res.send(swaggerHTML);
});



//server.use(bodyParser.json()); // Para parsear application/json
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({limit: "50mb"}));

server.use(
    '/api',
    routes);
//Static server
server.use(express.static('public'));

server.use(helmet());
//server.use(cors());

// Habilita CORS para todas las rutas. Esto me impedía consumir la api desde react
//veremos cómo funciona
// Configuración PROFESIONAL de CORS
server.use(cors({
  origin: 'http://localhost:5173', // URL exacta de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Si usas cookies o tokens
}));

server.get('/', (req, res) => {
    res.redirect('/api');
})

// Conectar a la base de datos que se encuentra en config/db.ts
connectDB();

export default server;
import express, {Express, Response} from "express";
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import routes from '../routes'
import * as process from "node:process";
import swaggerJSDoc from 'swagger-jsdoc';

const server = express();
//Configuration Swagger
/*const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API',
        },
        servers: [
            {
                url: 'http://localhost:8000',
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
const swaggerSpec = swaggerJSDoc(options);*/

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

server.use(
    '/api',
    routes);

//Static server
server.use(express.static('public'));

server.use(helmet());
server.use(cors());

server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({limit: "50mb"}));

server.get('/', (req, res) => {
    res.redirect('/api');
})

export default server;
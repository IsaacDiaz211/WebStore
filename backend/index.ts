import dotenv from "dotenv";
import server from './src/server'
import * as process from "node:process";
import {LogError, LogSuccess} from "./src/utils/logger";

//Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

server.listen(port, () => {
    LogSuccess(`Server started in http://localhost:${port}/api`);
});

server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});
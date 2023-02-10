import dotenv from "dotenv";
dotenv.config();
import http from "http";
import { app } from "./server.js";
import { infoLogger, errorLogger } from "./utils/logger.js";

const server = http.createServer(app);
const PORT = process.env.port;
const host = process.env.pgHost;

server.listen(PORT, () => infoLogger.info(`Server is listening on http://${host}:${PORT}`));

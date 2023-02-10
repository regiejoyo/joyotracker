import dotenv from "dotenv";
dotenv.config();
import http from "http";
import { app } from "./server.js";
import { infoLogger } from "./utils/logger.js";

const server = http.createServer(app);
const PORT = process.env.port;

server.listen(PORT, () => infoLogger.info(`Server is listening on http://localhost:${PORT}`));
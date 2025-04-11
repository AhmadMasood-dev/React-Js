import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setup json-server
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "..", "db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Export handler for Vercel
export default server;

// { "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
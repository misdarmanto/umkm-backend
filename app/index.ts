import express, { Express } from "express";
import { route } from "./routers";
import bodyParser from "body-parser";
import cors from "cors";
import { CONFIG } from "./configs";

const app: Express = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.routes = route(app);

app.listen(CONFIG.port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.port}`);
});

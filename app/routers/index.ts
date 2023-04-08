import express, { Express, Request, Response } from "express";
import { index } from "../controllers";

import { middleware } from "../middlewares";
import { MENU } from "../controllers/menus";

export const route = (app: Express) => {
	app.get("/", middleware.useAuthorization, (req: Request, res: Response) => index(req, res));

	const MenusRouter = express.Router();
	app.use("/menu", middleware.useAuthorization, MenusRouter);
	MenusRouter.get("/", (req: Request, res: Response) => MENU.get(req, res));
	MenusRouter.get("/:id", (req: Request, res: Response) => MENU.detail(req, res));
};

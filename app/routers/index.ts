import express, { Express, Request, Response } from "express";
import { index } from "../controllers";

import { middleware } from "../middlewares";
import { MENU } from "../controllers/menus";
import { EMPLOYEE } from "../controllers/employee";
import { FEED_BACK } from "../controllers/feed-back";

export const route = (app: Express) => {
	app.get("/", middleware.useAuthorization, (req: Request, res: Response) => index(req, res));

	const MenusRouter = express.Router();
	app.use("/menu", middleware.useAuthorization, MenusRouter);
	MenusRouter.get("/list", (req: Request, res: Response) => MENU.list(req, res));
	MenusRouter.get("/:id", (req: Request, res: Response) => MENU.detail(req, res));
	MenusRouter.post("/", (req: Request, res: Response) => MENU.create(req, res));
	MenusRouter.patch("/", (req: Request, res: Response) => MENU.update(req, res));
	MenusRouter.delete("/", (req: Request, res: Response) => MENU.delete(req, res));

	const EmployeeRouter = express.Router();
	app.use("/employee", middleware.useAuthorization, EmployeeRouter);
	EmployeeRouter.get("/list", (req: Request, res: Response) => EMPLOYEE.list(req, res));
	EmployeeRouter.get("/:id", (req: Request, res: Response) => EMPLOYEE.detail(req, res));
	EmployeeRouter.post("/", (req: Request, res: Response) => EMPLOYEE.create(req, res));
	EmployeeRouter.patch("/", (req: Request, res: Response) => EMPLOYEE.update(req, res));
	EmployeeRouter.delete("/", (req: Request, res: Response) => EMPLOYEE.delete(req, res));

	const FeedBackRouter = express.Router();
	app.use("/feed-back", middleware.useAuthorization, FeedBackRouter);
	FeedBackRouter.get("/list", (req: Request, res: Response) => FEED_BACK.list(req, res));
	FeedBackRouter.get("/:id", (req: Request, res: Response) => FEED_BACK.detail(req, res));
	FeedBackRouter.post("/", (req: Request, res: Response) => FEED_BACK.create(req, res));
	FeedBackRouter.patch("/", (req: Request, res: Response) => FEED_BACK.update(req, res));
	FeedBackRouter.delete("/", (req: Request, res: Response) => FEED_BACK.delete(req, res));
};

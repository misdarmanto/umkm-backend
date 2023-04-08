import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { CONFIG } from "../configs";
import { ResponseData, ResponseDataAttributes } from "../utilities/response";

export const useAuthorization = (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.header("authorization") || req.header("authorization")?.indexOf("Basic ") === -1) {
			const response = <ResponseDataAttributes>ResponseData.error("Missing Authorization.");
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
		}
		const base64Credentials = req.header("authorization")?.split(" ")[1];
		const credentials = Buffer.from(base64Credentials || ":", "base64").toString("ascii");
		const [username, password] = credentials.split(":");
		if (username != CONFIG.authorization.username || password != CONFIG.authorization.passsword) {
			const response = <ResponseDataAttributes>ResponseData.error("Invalid Authorization.");
			return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
		}
		next();
	} catch (error) {
		console.log(error);
		const message = "Tidak dapat memproses permintaan. Laporkan kendala ini.";
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

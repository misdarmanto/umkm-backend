import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../utilities/response";

export const index = async (req: Request, res: Response) => {
	try {
		const data = {
			about_me: "https://mbadok.com/about",
			faq: "https://mbadok.com/faq",
			privacy_policy: "https://mbadok.com/privacy_policy",
		};
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = data;
		return res.status(StatusCodes.OK).json(response);
	} catch (error) {
		console.log(error);
		const message = "Tidak dapat memproses permintaan. Laporkan kendala ini.";
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

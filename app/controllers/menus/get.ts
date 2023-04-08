import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { Pagination } from "../../utilities/pagination";

export const getAllMenu = async (req: any, res: Response) => {
	try {
		const page = new Pagination(+req.query.page || 0, +req.query.size || 10);
		const where = {
			deleted: { [Op.eq]: 0 },
			...(req.query.search && {
				title: { [Op.like]: `%${req.query.title}%` },
			}),
		};

		// const pushNotification = await PushNotificationModel.findAndCountAll({
		// 	where: where,
		// 	order: [["id", "desc"]],
		// });

		// if (!pushNotification) {
		// 	const message = "not fond!";
		// 	const response = <ResponseDataAttributes>ResponseData.error(message);
		// 	return res.status(StatusCodes.NOT_FOUND).json(response);
		// }

		const response = <ResponseDataAttributes>ResponseData.default;
		// response.data = page.data(pushNotification);
		response.data = { message: "hello" };
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `Tidak dapat memprosess. Laporkan kendala ini! error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

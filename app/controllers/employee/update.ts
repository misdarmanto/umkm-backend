import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { Op } from "sequelize";
import { requestChecker } from "../../utilities/requestChecker";
import { EmployeeModel } from "../../models/employee";

export const updateEmployee = async (req: any, res: Response) => {
	const emptyField = requestChecker({
		requireList: ["id"],
		requestData: req.body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const result = await EmployeeModel.findOne({
			where: { deleted: { [Op.eq]: 0 }, id: { [Op.eq]: req.body.id } },
			attributes: ["id"],
		});

		if (!result) {
			const message = `not found!`;
			const response = <ResponseDataAttributes>ResponseData.error(message);
			return res.status(StatusCodes.NOT_FOUND).json(response);
		}

		const newData = {
			...(req.body.name && { name: req.body.name }),
			...(req.body.image && { image: req.body.image }),
		};

		await EmployeeModel.update(newData, { where: { id: { [Op.eq]: req.body.id } } });
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = req.body;
		return res.status(StatusCodes.OK).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

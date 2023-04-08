import { Response } from "express";
import { StatusCodes } from "http-status-codes";
import { ResponseData, ResponseDataAttributes } from "../../utilities/response";
import { requestChecker } from "../../utilities/requestChecker";
import { EmployeeAttributes } from "../../models/employee";
import { EmployeeModel } from "../../models/employee";

export const createEmployee = async (req: any, res: Response) => {
	const body = <EmployeeAttributes>req.body;
	const bodyRequires = ["name", "image"];

	const emptyField = requestChecker({
		requireList: bodyRequires,
		requestData: req.body,
	});

	if (emptyField) {
		const message = `invalid request parameter! require (${emptyField})`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.BAD_REQUEST).json(response);
	}

	try {
		const result = await EmployeeModel.create(body);
		const response = <ResponseDataAttributes>ResponseData.default;
		response.data = result;
		return res.status(StatusCodes.CREATED).json(response);
	} catch (error: any) {
		console.log(error.message);
		const message = `error ${error.message}`;
		const response = <ResponseDataAttributes>ResponseData.error(message);
		return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(response);
	}
};

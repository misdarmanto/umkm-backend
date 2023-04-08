import { createEmployee } from "./create";
import { deleteEmployee } from "./delete";
import { getDetailEmployee, getListEmployee } from "./get";
import { updateEmployee } from "./update";

export const EMPLOYEE = {
	list: getListEmployee,
	detail: getDetailEmployee,
	create: createEmployee,
	update: updateEmployee,
	delete: deleteEmployee,
};

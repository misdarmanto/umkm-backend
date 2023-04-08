import { createMenu } from "./create";
import { deleteMenu } from "./delete";
import { getDetailMenu, getListMenu } from "./get";
import { updateMenu } from "./update";

export const MENU = {
	list: getListMenu,
	detail: getDetailMenu,
	create: createMenu,
	update: updateMenu,
	delete: deleteMenu,
};

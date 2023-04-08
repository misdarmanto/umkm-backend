import { createFeedBack } from "./create";
import { deleteFeedBack } from "./delete";
import { getDetailFeedBack, getListFeedBack } from "./get";
import { updateFeedBack } from "./update";

export const FEED_BACK = {
	list: getListFeedBack,
	detail: getDetailFeedBack,
	create: createFeedBack,
	update: updateFeedBack,
	delete: deleteFeedBack,
};

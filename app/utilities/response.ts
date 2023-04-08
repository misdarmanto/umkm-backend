import { CONFIG } from "../configs";

export interface ResponseDataAttributes {
	request_param: any | null;
	status: string;
	error_message: any | null;
	data: any;
	version: any | Object | null;
}
export const ResponseData = {
	error: (message?: any) => {
		return <ResponseDataAttributes>{
			request_param: "",
			status: "error",
			error_message: message,
			data: null,
			next: "",
			version: { code: CONFIG.app_version, name: CONFIG.app_semantic },
		};
	},
	default: <ResponseDataAttributes>{
		request_param: "",
		status: "success",
		error_message: null,
		data: "",
		version: { code: CONFIG.app_version, name: CONFIG.app_semantic },
	},
};

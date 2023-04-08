import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
	app_version: process.env.APP_VERSION || "1.0.0",
	app_semantic: process.env.APP_SEMANTIC || "0",
	env: process.env.APP_ENV || "development",
	port: process.env.APP_PORT ?? 8000,
	log: process.env.LOG == "true",
	authorization: {
		username: process.env.AUTHORIZATION_USERNAME || "mbadok",
		passsword: process.env.AUTHORIZATION_PASSWORD || "mbadok_secret",
	},
};

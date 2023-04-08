import dotenv from "dotenv";
dotenv.config();

export const DATABASES = {
	product: {
		db_name: process.env.DB_NAME_MEDIA || "mbadok",
		db_host: process.env.DB_HOST || "127.0.0.1",
		db_port: process.env.DB_PORT || 3306,
		db_username: process.env.DB_USERNAME || "root",
		db_password: process.env.DB_PASSWORD || "toor",
		db_log: process.env.DB_LOG == "true",
	},
};

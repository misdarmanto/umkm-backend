import { Sequelize } from "sequelize";
import { DATABASES } from "../configs/database";
export const sequelize = new Sequelize(
	`mysql://${DATABASES.mbadok.db_username}:${DATABASES.mbadok.db_password}@${DATABASES.mbadok.db_host}:${DATABASES.mbadok.db_port}/${DATABASES.mbadok.db_name}`,
	{
		logging: DATABASES.mbadok.db_log,
	}
);

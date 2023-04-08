import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteModel, ZygoteAttributes } from "./zygote";

export interface EmployeeAttributes extends ZygoteAttributes {
	name: string;
	image: string;
}

type EmployeeCreationAttributes = Optional<EmployeeAttributes, "id" | "created_on" | "modified_on">;

interface EmployeeInstance
	extends Model<EmployeeAttributes, EmployeeCreationAttributes>,
		EmployeeAttributes {}

export const EmployeeModel = sequelize.define<EmployeeInstance>(
	"employee",
	{
		...ZygoteModel,
		name: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		image: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "employee",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

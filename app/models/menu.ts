import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteModel, ZygoteAttributes } from "./zygote";

export interface MenuAttributes extends ZygoteAttributes {
	title: string;
	description: string;
	image: number;
	stars: number;
	price: string;
	category: "standard" | "popular";
}

type MenuCreationAttributes = Optional<MenuAttributes, "id" | "created_on" | "modified_on">;

interface MenuInstance extends Model<MenuAttributes, MenuCreationAttributes>, MenuAttributes {}

export const MenuModel = sequelize.define<MenuInstance>(
	"menu",
	{
		...ZygoteModel,
		title: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		image: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		price: {
			type: DataTypes.DECIMAL(12, 2),
			allowNull: false,
			defaultValue: 0.0,
		},
		stars: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		category: {
			type: DataTypes.ENUM("standard", "popular"),
			allowNull: false,
			defaultValue: "popular",
		},
	},
	{
		...sequelize,
		timestamps: false,
		tableName: "menu",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

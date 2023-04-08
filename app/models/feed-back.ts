import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";
import { ZygoteModel, ZygoteAttributes } from "./zygote";

export interface FeedBackAttributes extends ZygoteAttributes {
	name: string;
	message: string;
	image: string;
}

type FeedBackCreationAttributes = Optional<FeedBackAttributes, "id" | "created_on" | "modified_on">;

interface FeedBackInstance
	extends Model<FeedBackAttributes, FeedBackCreationAttributes>,
		FeedBackAttributes {}

export const FeedBackModel = sequelize.define<FeedBackInstance>(
	"feed-back",
	{
		...ZygoteModel,
		name: {
			type: DataTypes.STRING(200),
			allowNull: false,
		},
		message: {
			type: DataTypes.TEXT,
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
		tableName: "feed-back",
		deletedAt: false,
		paranoid: true,
		underscored: true,
		freezeTableName: true,
		engine: "InnoDB",
	}
);

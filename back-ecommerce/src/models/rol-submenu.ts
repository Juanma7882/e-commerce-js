import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface RolSubMenuAttributes {
    id: number,
    rolId: number,
    subMenuId: number,
    validacionExtraId?: number,
}

type creationRolSubMenuAttributes = Optional<RolSubMenuAttributes, "id">

class RolSubMenu extends Model<RolSubMenuAttributes, creationRolSubMenuAttributes>
    implements RolSubMenuAttributes {
    public id!: number;
    public rolId!: number;
    public subMenuId!: number;
    public validacionExtraId!: number;
}

RolSubMenu.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rolId: { type: DataTypes.INTEGER, allowNull: false },
    subMenuId: { type: DataTypes.INTEGER, allowNull: false },
    validacionExtraId: { type: DataTypes.INTEGER, allowNull: true }
}, {
    sequelize,
    tableName: "rolSubMenu",
    freezeTableName: true,
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["rolId", "subMenuId"],
        },
    ]
})

export default RolSubMenu


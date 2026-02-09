import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface RolMenuAttributes {
    id: number,
    rolId: number,
    menuId: number,
    validacionExtraId?: number,
}

type creationRolMenuAttributes = Optional<RolMenuAttributes, "id">

class RolMenu extends Model<RolMenuAttributes, creationRolMenuAttributes>
    implements RolMenuAttributes {
    public id!: number;
    public rolId!: number;
    public menuId!: number;
    public validacionExtraId!: number;
}

RolMenu.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rolId: { type: DataTypes.INTEGER, allowNull: false },
    menuId: { type: DataTypes.INTEGER, allowNull: false },
    validacionExtraId: { type: DataTypes.INTEGER, allowNull: true }
}, {
    sequelize,
    tableName: "rolMenu",
    freezeTableName: true,
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ["rolId", "menuId"],
        },
    ]
})

export default RolMenu
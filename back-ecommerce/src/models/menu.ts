import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface MenuAttributes {
    id: number,
    nombre: string,
    url: string,
    icono: string,
    orden: number,
    activo: boolean
}

type menuCreationAttributes = Optional<MenuAttributes, "id">


class Menu extends Model<MenuAttributes, menuCreationAttributes>
    implements MenuAttributes {
    public id!: number;
    public nombre!: string;
    public url!: string;
    public icono!: string;
    public orden!: number;
    public activo!: boolean;
}

Menu.init({

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING(50), allowNull: false },
    url: { type: DataTypes.STRING(100), allowNull: false },
    icono: { type: DataTypes.STRING(50), allowNull: false },
    orden: { type: DataTypes.INTEGER, allowNull: false },
    activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },

}, {
    sequelize,
    tableName: "menu",
    freezeTableName: true,
    timestamps: true,
})
export default Menu
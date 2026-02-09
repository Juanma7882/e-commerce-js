import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface SubMenuAttributes {
    id: number,
    menuId: number,
    nombre: string,
    url: string,
    icono: string,
    orden: number,
    activo: boolean
}

type SubmenuCreationAttributes = Optional<SubMenuAttributes, "id">


class SubMenu extends Model<SubMenuAttributes, SubmenuCreationAttributes>
    implements SubMenuAttributes {
    public id!: number;
    public menuId!: number;
    public nombre!: string;
    public url!: string;
    public icono!: string;
    public orden!: number;
    public activo!: boolean;
}

SubMenu.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    menuId: {
        type: DataTypes.INTEGER, allowNull: false,
        references: {
            model: "menu",
            key: "id",
        },
        onDelete: "CASCADE",
    },

    nombre: { type: DataTypes.STRING(50), allowNull: false },
    url: { type: DataTypes.STRING(100), allowNull: false },
    icono: { type: DataTypes.STRING(50), allowNull: false },
    orden: { type: DataTypes.INTEGER, allowNull: false },

    activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
},
    {
        sequelize,
        tableName: "submenu",
        freezeTableName: true,
        timestamps: true,
    }
);

export default SubMenu
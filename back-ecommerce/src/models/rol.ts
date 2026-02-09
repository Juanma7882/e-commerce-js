import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";
interface RolAttributes {
    id: number,
    nombre: string,
    descripcion: string,
}

type RolCreationAttributes = Optional<RolAttributes, "id">

class Rol extends Model<RolAttributes, RolCreationAttributes>
    implements RolAttributes {
    public id!: number;
    public nombre!: string;
    public descripcion!: string;
}

Rol.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING(50), unique: true, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: true }
}, {
    sequelize,
    tableName: "roles",
    timestamps: true,
    freezeTableName: true
})

export default Rol
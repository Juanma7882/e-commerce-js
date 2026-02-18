import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";
import Rol from "./rol";

interface UsuarioAttributes {
    id: number;
    rolId: number;
    nombre: string;
    apellido: string;
    email: string;
    dni: number;
    telefono: string;
    password: string;
    activo: boolean;
    ultimoLogin: Date
    tokenValidAfter: Date;
}

type UsuarioCreationAttributes = Optional<UsuarioAttributes, "id" | "tokenValidAfter" | "ultimoLogin" | "activo">;

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes>
    implements UsuarioAttributes {
    public id!: number;
    public rolId!: number;
    public nombre!: string;
    public apellido!: string;
    public email!: string;
    public dni!: number;
    public telefono!: string;
    public password!: string;
    public activo!: boolean;
    public ultimoLogin!: Date;
    public tokenValidAfter!: Date;
    public Rol?: Rol;

}

Usuario.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        rolId: { type: DataTypes.INTEGER, allowNull: false },
        nombre: { type: DataTypes.STRING, allowNull: false },
        apellido: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
        dni: { type: DataTypes.INTEGER, allowNull: false, unique: true },
        telefono: { type: DataTypes.STRING, allowNull: false, validate: { isNumeric: true } },
        password: { type: DataTypes.STRING, allowNull: false },
        activo: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
        ultimoLogin: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        tokenValidAfter: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    {
        sequelize,
        tableName: "usuario",
        freezeTableName: true,
        timestamps: true,
    }
);

export default Usuario;
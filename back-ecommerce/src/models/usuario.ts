import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface UsuarioAttributes {
    id: number;
    rolId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    password: string;
    provincia: string;
    localidad: string;
    codigo_postal: string;
    direccion: string;
    activo: boolean;
    token_valid_after: Date;
}

type UsuarioCreationAttributes = Optional<UsuarioAttributes, "id" | "token_valid_after">;

class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes>
    implements UsuarioAttributes {
    public id!: number;
    public rolId!: number;
    public nombre!: string;
    public apellido!: string;
    public email!: string;
    public telefono!: string;
    public password!: string;
    public provincia!: string;
    public localidad!: string;
    public codigo_postal!: string;
    public direccion!: string;
    public activo!: boolean;
    public token_valid_after!: Date;
}

Usuario.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        rolId: { type: DataTypes.INTEGER, allowNull: false },
        nombre: { type: DataTypes.STRING, allowNull: false },
        apellido: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
        telefono: { type: DataTypes.STRING, allowNull: false, validate: { isNumeric: true } },
        password: { type: DataTypes.STRING, allowNull: false },
        provincia: { type: DataTypes.STRING, allowNull: false },
        localidad: { type: DataTypes.STRING, allowNull: false },
        codigo_postal: { type: DataTypes.STRING, allowNull: false },
        direccion: { type: DataTypes.STRING, allowNull: false },
        activo: { type: DataTypes.BOOLEAN, allowNull: false },
        token_valid_after: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    {
        sequelize,
        tableName: "usuarios",
        freezeTableName: true,
        timestamps: true,
    }
);

export default Usuario;
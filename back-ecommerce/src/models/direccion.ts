
import { DataTypes, Optional, Model } from "sequelize"
import { sequelize } from "../dbConection/conexion"

interface DireccionAttributes {
    id: number
    usuarioId: number
    tipo: string
    direccion: string
    numero: string
    piso: string
    departamento: string
    codigoPostal: string
    localidad: string
    esPrincipal: boolean
    activo: boolean
    provinciaId: number
}

type DireccionCreationAttributes = Optional<DireccionAttributes, "id">

class Direccion extends Model<DireccionAttributes, DireccionCreationAttributes>
    implements DireccionAttributes {
    public id!: number
    public usuarioId!: number
    public tipo!: string
    public direccion!: string
    public numero!: string
    public piso!: string
    public departamento!: string
    public codigoPostal!: string
    public localidad!: string
    public esPrincipal!: boolean
    public activo!: boolean
    public provinciaId!: number
};


Direccion.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    usuarioId: { type: DataTypes.INTEGER, allowNull: false },
    tipo: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: false },
    numero: { type: DataTypes.STRING, allowNull: false },
    piso: { type: DataTypes.STRING, allowNull: true },
    departamento: { type: DataTypes.STRING, allowNull: true },
    codigoPostal: { type: DataTypes.STRING, allowNull: true },
    localidad: { type: DataTypes.STRING, allowNull: false },
    esPrincipal: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    activo: { type: DataTypes.BOOLEAN, allowNull: false },
    provinciaId: { type: DataTypes.INTEGER, allowNull: false }

},
    {
        sequelize,
        tableName: "direccion",
        freezeTableName: true,
        timestamps: true,
    });

export default Direccion
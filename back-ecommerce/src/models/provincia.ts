import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../dbConection/conexion"

interface ProvinciaAtributos {
    id: number
    paisId: number
    nombre: string
}

type ProvinciaCreationAtributos = Optional<ProvinciaAtributos, "id">

class Provincia extends Model<ProvinciaAtributos, ProvinciaCreationAtributos>
    implements ProvinciaAtributos {
    public id!: number
    public paisId!: number
    public nombre!: string
}

Provincia.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        paisId: { type: DataTypes.INTEGER, allowNull: false },
        nombre: { type: DataTypes.STRING(20), allowNull: false, unique: true }

    }, {
    sequelize,
    tableName: "provincia",
    freezeTableName: true,
    timestamps: true,
})

export default Provincia
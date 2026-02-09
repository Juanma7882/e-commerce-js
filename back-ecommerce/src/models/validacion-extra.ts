import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface ValidacionExtraAttributes {
    id: number,
    nombre: string,
    tipoValidacion: string,
    configuracion: object,
    activo: boolean
}

type ValidacionCreationExtraAttributes = Optional<ValidacionExtraAttributes, "id">

class ValidacionExtra extends Model<ValidacionExtraAttributes, ValidacionCreationExtraAttributes>
    implements ValidacionExtraAttributes {
    public id!: number;
    public nombre!: string;
    public tipoValidacion!: string;
    public configuracion!: object;
    public activo!: boolean;
}

ValidacionExtra.init({

    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, allowNull: false },
    tipoValidacion: { type: DataTypes.INTEGER, allowNull: false },
    configuracion: { type: DataTypes.JSON, allowNull: false },
    activo: { type: DataTypes.BOOLEAN, allowNull: false },

}, {

    sequelize,
    tableName: "validacionExtra",
    freezeTableName: true,
    timestamps: true,
})

export default ValidacionExtra
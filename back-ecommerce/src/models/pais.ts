import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../dbConection/conexion";

interface PaisAttributes {
    id: number;
    nombre: string;
}

type PaisCreationAttributes = Optional<PaisAttributes, "id">

class Pais extends Model<PaisAttributes, PaisCreationAttributes>
    implements PaisAttributes {
    public id!: number;
    public nombre!: string;
}


Pais.init({
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nombre: { type: DataTypes.STRING, unique: true },
},
    {
        sequelize,
        tableName: "pais",
        freezeTableName: true,
        timestamps: true

    })

export default Pais
import { DataTypes, Model, Optional } from "sequelize"
import { sequelize } from "../dbConection/conexion"

interface refreshSessionAttributes {
    id: number
    usuarioId: number
    tokenHash: string
    fingerprint: string
    deviceInfo: string
    ipAddress: string
    userAgent: string
    revoked?: boolean
    revokedAt?: Date
    replacedByToken?: string
    expiresAt: Date
    lastUsedAt?: Date
}

type refreshSessionCreateAttributes = Optional<refreshSessionAttributes, "id">

class RefreshSession extends Model<refreshSessionAttributes, refreshSessionCreateAttributes>
    implements refreshSessionAttributes {
    id!: number
    usuarioId!: number
    tokenHash!: string
    fingerprint!: string
    deviceInfo!: string
    ipAddress!: string
    userAgent!: string
    revoked!: boolean
    revokedAt?: Date
    replacedByToken?: string
    expiresAt!: Date
    lastUsedAt!: Date
}

RefreshSession.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        usuarioId: { type: DataTypes.INTEGER, allowNull: false },
        tokenHash: { type: DataTypes.STRING, allowNull: false, unique: true },
        fingerprint: { type: DataTypes.STRING, allowNull: false, },
        deviceInfo: { type: DataTypes.STRING, allowNull: false, },
        ipAddress: { type: DataTypes.STRING, allowNull: true, },
        userAgent: { type: DataTypes.STRING, allowNull: false, },
        revokedAt: { type: DataTypes.DATE, allowNull: true },
        replacedByToken: { type: DataTypes.STRING, allowNull: true, },
        revoked: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
        expiresAt: { type: DataTypes.DATE, allowNull: false },
        lastUsedAt: { type: DataTypes.DATE, allowNull: true, defaultValue: DataTypes.NOW }
    }, {
    sequelize,
    tableName: "refreshSession",
    freezeTableName: true,
    timestamps: true,
})

export default RefreshSession
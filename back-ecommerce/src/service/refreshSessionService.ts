import { crearRefreshSessionAttributesDTO } from "../dto/refreshSession/refreshSession.dto";
import RefreshSession from "../models/refreshSession";

class ServiceRefreshSession {

    async crear(data: crearRefreshSessionAttributesDTO) {
        try {
            await RefreshSession.create({
                usuarioId: data.usuarioId,
                tokenHash: data.tokenHash,
                fingerprint: data.fingerprint,
                deviceInfo: data.deviceInfo,
                ipAddress: data.ipAddress,
                userAgent: data.userAgent,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            });
        }
        catch {
            throw new Error("Error al crear el refresh Session: ");
        }
    }

    async findByTokenHash(tokenHash: string) {
        return await RefreshSession.findOne({ where: { tokenHash } });
    }

    async revocarSesion(id: number, replacedByToken?: string) {
        await RefreshSession.update({
            revoked: true,
            revokedAt: new Date(),
            replacedByToken: replacedByToken
        }, { where: { id } });
    }

    async revocarSesionDeUnDispositivo(tokenHash: string) {
        await RefreshSession.update({
            revoked: true,
            revokedAt: new Date()
        }, { where: { tokenHash } });
    }


    async revocarTodasLasSesiones(usuarioId: number) {
        await RefreshSession.update({
            revoked: true,
            revokedAt: new Date()
        }, { where: { usuarioId, revoked: false } });
    }
}

export default ServiceRefreshSession
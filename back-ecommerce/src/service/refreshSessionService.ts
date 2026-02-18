import { crearRefreshSessionAttributesDTO } from "../dto/refreshSession/refreshSession.dto";
import RefreshSession from "../models/refreshSession";

class ServiceRefreshSession {

    async create(data: crearRefreshSessionAttributesDTO) {
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
}

export default ServiceRefreshSession
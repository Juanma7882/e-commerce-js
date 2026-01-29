const BASE_URL = import.meta.env.VITE_BASE_URL;

export async function apis(endpoint: string) {
    const consulta = await fetch(`${BASE_URL}${endpoint}`);
    const data = await consulta.json();
    return data;
}


export async function apiIsUser() {
    const consulta = await apis("/api/usuarios");
    const data = await consulta.json();
    return data;
}

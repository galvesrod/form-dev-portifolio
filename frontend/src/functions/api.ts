const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function httpGet(url:string) {
    const response = await fetch(normalizeUrl(`${baseURL}/${url}`));
    return response.json();
}

function normalizeUrl(url:string) {
    const protocolo = url.split("://")[0];
    const restante = url.split("://")[1];
    return `${protocolo}://${restante.replace(/\/{2,}/g,'/')}`;
}
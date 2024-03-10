export async function fetchWithTimeout(resource, options = {}, timeout = 4000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch(resource, {
            ...options,
            signal: controller.signal
        });
        clearTimeout(id);
        return response;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out, please try again in a minute.');
        } else {
            throw error;
        }
    }
}

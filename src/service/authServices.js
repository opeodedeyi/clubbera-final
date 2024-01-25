import Cookies from 'js-cookie';

const API_URL = process.env.NEXT_PUBLIC_API_URL;


if (!API_URL) {
    console.error('API URL is not defined in environment variables');
}

async function fetchWithTimeout(resource, options = {}, timeout = 8000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);
    return response;
}

async function apiRequest(url, options) {
    try {
        const response = await fetchWithTimeout(`${API_URL}${url}`, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'API request failed');
        }
        return data;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        } else {
            throw error;
        }
    }
}

async function saveCookie(token) {
    Cookies.set('auth_token', token, {
        httpOnly: process.env.NODE_ENV !== 'development',
        expires: 60,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'lax',
        path: '/',
    });
}

export async function signupUser(email, fullName, password, cityLocation, latLocation, lngLocation) {
    const response = await apiRequest('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email,
            fullName,
            password,
            location: { city: cityLocation, lat: latLocation, lng: lngLocation }
        })
    });

    if (response.token) {
        await saveCookie(response.token);
    }

    return response;
}

export async function loginUser(email, password) {
    const response = await apiRequest('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    if (response.token) {
        await saveCookie(response.token);
    }

    return response;
}

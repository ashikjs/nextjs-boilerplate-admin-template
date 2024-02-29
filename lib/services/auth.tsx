import apiAxios from "@/lib/services/apiAxios";

interface LoginResponse {
    token: string;
    error?: string;
}

interface LogoutResponse {
    error?: string;
}

export async function login(username: string, password: string): Promise<LoginResponse> {
    try {
        const response = await apiAxios.post('/login', {
            username,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        // Handle error here. With Axios, error handling can be more nuanced thanks to error.response
        throw error;
    }
}

export async function logout(): Promise<LogoutResponse> {
    try {
        const response = await apiAxios.get('logout');
        return response.data;
    } catch (error) {
        // Axios encapsulates HTTP errors in the error object, making it easy to access the original response and status
        console.error('Logout failed:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

interface LoginResponse {
  token: string;
  error?: string;
}
interface LogoutResponse {
  error?: string;
}
// const URL: string = 'https://node-express-auth-suite.vercel.app/login';
const URL: string = 'http://localhost:3030/';
export async function login(username: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch(URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, password}),
      credentials: 'include',
    });

    if (!response.ok) {
      // If the server response is not ok, throw an error with the status
      throw new Error(`Login failed: ${response.status}`);
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Login error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export async function logout(): Promise<LogoutResponse> {
  try {
    const response = await fetch(URL + 'logout', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      // If the server response is not ok, throw an error with the status
      throw new Error(`Logout failed: ${response.status}`);
    }

    const data: LoginResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Logout failed:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

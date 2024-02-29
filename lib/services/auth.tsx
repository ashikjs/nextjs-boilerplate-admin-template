interface LoginResponse {
  token: string;
  error?: string;
}
// const URL: string = 'https://node-express-auth-suite.vercel.app/login';
const URL: string = 'http://localhost:3030/login';
export async function login(username: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch(URL, {
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

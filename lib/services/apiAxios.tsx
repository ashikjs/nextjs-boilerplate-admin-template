import axios from 'axios';

// Creating an Axios instance
const apiAxios = axios.create({
    baseURL: 'http://localhost:3030/',
    // baseURL: 'https://node-express-auth-suite.vercel.app/',
    withCredentials: true,
    // You can add default headers here
});

// Request Interceptor
apiAxios.interceptors.request.use(
    config => {
        // Perform actions before the request is sent
        console.log(`Sending a ${config.method} request to ${config.url}...`);

        // Example: Attach an authorization token to every request
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers['Content-Type'] = 'application/json';

        return config;
    },
    error => {
        // Do something with request error
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
apiAxios.interceptors.response.use(
    response => {
        // Any status code that lies within the range of 2xx cause this function to trigger
        // Do something with response data
        console.log('Response:', response);
        return response;
    },
    error => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.error('Response error:', error);
        return Promise.reject(error);
    }
);

export default apiAxios;

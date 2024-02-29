import axios from 'axios';

// Creating an Axios instance
const apiClient = axios.create({
    baseURL: 'https://your.api.base.url',
    // You can add default headers here
});

// Request Interceptor
apiClient.interceptors.request.use(
    config => {
        // Perform actions before the request is sent
        console.log(`Sending a ${config.method} request to ${config.url}...`);

        // Example: Attach an authorization token to every request
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        // Do something with request error
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);

// Response Interceptor
apiClient.interceptors.response.use(
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

export default apiClient;

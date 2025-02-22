import axios from "axios";
import {StorageType} from "../enums/localStorage";

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/',
    headers: {
        "Content-Type": "application/json",
    }
});

apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(StorageType.AccessToken);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error('Unauthorized, redirecting to login...');
        }
        return Promise.reject(error);
    }
);

export default apiClient;
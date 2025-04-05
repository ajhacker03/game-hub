import axios, { AxiosRequestConfig } from "axios";

export interface FetchData<T> {
    count: number;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    params: {
        key: import.meta.env.VITE_APP_API_KEY,
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config?: AxiosRequestConfig) =>
        axiosInstance
            .get<FetchData<T>>(this.endpoint, config)
            .then((res) => res.data);
}

export default APIClient;

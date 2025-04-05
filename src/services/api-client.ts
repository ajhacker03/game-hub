import axios from "axios";

export interface FetchData<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    params: {
        key: import.meta.env.VITE_APP_API_KEY,
    },
});

import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenres {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);

        apiClient
            .get<FetchGenres>("/genres", { signal: controller.signal })
            .then((res) => {
                setGenres(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setErrors(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { genres, errors, isLoading };
};

export default useGenres;

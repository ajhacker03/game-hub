import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "@/services/api-client";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () =>
    useQuery({
        queryKey: ["genres"],
        queryFn: () =>
            apiClient.get<FetchData<Genre>>("/genres").then((res) => res.data),

        staleTime: 24 * 60 * 60 * 1000, // 24h
    });

export default useGenres;

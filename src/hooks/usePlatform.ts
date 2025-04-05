import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "@/services/api-client";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatform = () =>
    useQuery({
        queryKey: ["platforms"],
        queryFn: () =>
            apiClient
                .get<FetchData<Platform>>("/platforms/lists/parents")
                .then((res) => res.data),

        staleTime: 24 * 60 * 60 * 1000, // 24h
    });

export default usePlatform;

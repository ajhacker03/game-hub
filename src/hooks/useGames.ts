import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchData } from "@/services/api-client";
import { Platform } from "./usePlatform";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
    useQuery({
        queryKey: ["games", gameQuery],
        queryFn: () =>
            apiClient
                .get<FetchData<Game>>("/games", {
                    params: {
                        genres: gameQuery.genre?.id,
                        parent_platforms: gameQuery.platform?.id,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                    },
                })
                .then((res) => res.data),
    });

export default useGames;

import useGames from "@/hooks/useGames";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "@/App";
import React from "react";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data: games,
        isLoading,
        hasNextPage,
        fetchNextPage,
    } = useGames(gameQuery);

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

    const fetchedGamesCount =
        games?.pages.reduce((total, page) => total + page.results.length, 0) ||
        0;

    return (
        <>
            <InfiniteScroll
                dataLength={fetchedGamesCount}
                next={() => fetchNextPage()}
                hasMore={!!hasNextPage}
                loader={
                    <SimpleGrid
                        marginY={5}
                        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                        gap={6}
                    >
                        {skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))}
                    </SimpleGrid>
                }
            >
                <SimpleGrid
                    padding="10px"
                    columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                    gap={6}
                >
                    {isLoading &&
                        skeletons.map((skeleton) => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))}
                    {games?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {page?.results.map((game) => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game}></GameCard>
                                </GameCardContainer>
                            ))}
                        </React.Fragment>
                    ))}
                </SimpleGrid>
            </InfiniteScroll>
        </>
    );
};

export default GameGrid;

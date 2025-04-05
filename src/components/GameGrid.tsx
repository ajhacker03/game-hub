import useGames from "@/hooks/useGames";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "@/App";
import React from "react";

interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const {
        data: games,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useGames(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <Box padding="10px">
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
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
            {hasNextPage && (
                <Button
                    variant="outline"
                    marginY={4}
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )}
        </Box>
    );
};

export default GameGrid;

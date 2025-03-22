import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
    const { data: games, errors, isLoading } = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
    return (
        <>
            {errors && <Text>{errors}</Text>}
            <SimpleGrid
                columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
                gap={10}
                padding="10px"
            >
                {isLoading &&
                    skeletons.map((skeleton) => (
                        <GameCardContainer>
                            <GameCardSkeleton key={skeleton} />
                        </GameCardContainer>
                    ))}
                {games.map((game) => (
                    <GameCardContainer>
                        <GameCard key={game.id} game={game}></GameCard>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;

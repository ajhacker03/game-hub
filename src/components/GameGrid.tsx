import useGames from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
    const { games, errors } = useGames();
    return (
        <>
            {errors && <Text>{errors}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10} padding='10px'>
                {games.map((game) => (
                    <GameCard key={game.id} game={game}></GameCard>
                ))}
            </SimpleGrid>
        </>
    );
};

export default GameGrid;

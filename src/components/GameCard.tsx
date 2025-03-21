import { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card.Root maxW="sm" overflow="hidden">
                <Image src={game.background_image} />

                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>

                    <Card.Description fontSize="18px">
                        <PlatformIconList
                            platforms={game.parent_platforms.map(
                                (p) => p.platform
                            )}
                        ></PlatformIconList>
                    </Card.Description>
                </Card.Body>

                <Card.Footer></Card.Footer>
            </Card.Root>
        </>
    );
};

export default GameCard;

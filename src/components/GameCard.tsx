import { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <>
            <Card.Root overflow="hidden">
                <Image src={getCroppedImageUrl(game.background_image)} />

                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>

                    <Card.Description fontSize="18px">
                        <HStack justifyContent="space-between">
                            <PlatformIconList
                                platforms={game.parent_platforms.map(
                                    (p) => p.platform
                                )}
                            />
                            <CriticScore score={game.metacritic} />
                        </HStack>
                    </Card.Description>
                </Card.Body>

                <Card.Footer></Card.Footer>
            </Card.Root>
        </>
    );
};

export default GameCard;

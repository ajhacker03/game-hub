import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatform from "@/hooks/usePlatform";
import { Heading } from "@chakra-ui/react";

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
    const { data: genres } = useGenres();
    const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

    const { data: platforms } = usePlatform();
    const platform = platforms?.results.find(
        (p) => p.id === gameQuery.platformId
    );

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
    return (
        <Heading marginX={2} fontSize="4xl">
            {heading}
        </Heading>
    );
};

export default GameHeading;

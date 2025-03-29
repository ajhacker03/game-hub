import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, HStack, Link, Heading, Box } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genres, isLoading } = useGenres();

    return (
        <>
            <Box marginY={5}>
                <Heading fontSize="2xl" marginY={2}>
                    Genres
                </Heading>
                {isLoading && <GenreListSkeleton />}
                <List.Root variant="plain">
                    {genres.map((genre) => (
                        <List.Item key={genre.id} paddingY={2}>
                            <HStack>
                                <Image
                                    borderRadius={4}
                                    boxSize="32px"
                                    src={getCroppedImageUrl(
                                        genre.image_background
                                    )}
                                ></Image>
                                <Link
                                    variant="underline"
                                    onClick={() => onSelectGenre(genre)}
                                    fontWeight={
                                        genre.id === selectedGenre?.id
                                            ? "bold"
                                            : "normal"
                                    }
                                >
                                    {genre.name}
                                </Link>
                            </HStack>
                        </List.Item>
                    ))}
                </List.Root>
            </Box>
        </>
    );
};

export default GenreList;

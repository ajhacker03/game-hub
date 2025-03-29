import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, HStack, Link } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
    const { data: genres, isLoading } = useGenres();

    return (
        <>
            {isLoading && <GenreListSkeleton />}
            <List.Root variant="plain" marginY={5}>
                {genres.map((genre) => (
                    <List.Item key={genre.id} paddingY={2}>
                        <HStack>
                            <Image
                                borderRadius={4}
                                boxSize="32px"
                                src={getCroppedImageUrl(genre.image_background)}
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
        </>
    );
};

export default GenreList;

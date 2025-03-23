import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { List, Image, Text, HStack } from "@chakra-ui/react";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
    const { data: genres, isLoading } = useGenres();

    return (
        <>
            {isLoading && <GenreListSkeleton />}
            <List.Root variant="plain">
                {genres.map((genre) => {
                    return (
                        <>
                            <List.Item key={genre.id} paddingY={2}>
                                <HStack>
                                    <Image
                                        borderRadius={4}
                                        boxSize="32px"
                                        src={getCroppedImageUrl(
                                            genre.image_background
                                        )}
                                    ></Image>

                                    <Text>{genre.name}</Text>
                                </HStack>
                            </List.Item>
                        </>
                    );
                })}
            </List.Root>
        </>
    );
};

export default GenreList;

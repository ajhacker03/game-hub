import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
const GameCardSkeleton = () => {
    return (
        <>
            <Card.Root width='300px' maxW="sm" overflow="hidden">
                <Skeleton height='200px' />

                <Card.Body>
                    <SkeletonText />

                    <Card.Description fontSize="18px">
                        <SkeletonText />
                    </Card.Description>
                </Card.Body>

                <Card.Footer></Card.Footer>
            </Card.Root>
        </>
    );
};

export default GameCardSkeleton;

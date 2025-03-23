import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <>
            <Card.Root>
                <Skeleton height="200px" />

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

import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
    const sortOrders = [
        "Relevance",
        "Date added",
        "Name",
        "Release",
        "Popular",
        "Average Rating",
    ];

    return (
        <>
            <Menu.Root>
                <Menu.Trigger asChild marginX="10px">
                    <Button variant="outline" size="sm">
                        Order by: Relevance
                        <BsChevronDown />
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            {sortOrders.map((sortOrder) => (
                                <Menu.Item
                                    cursor="pointer"
                                    key={sortOrder}
                                    value={sortOrder}
                                >
                                    {sortOrder}
                                </Menu.Item>
                            ))}
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </>
    );
};

export default SortSelector;

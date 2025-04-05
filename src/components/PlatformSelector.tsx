import { Platform } from "@/hooks/usePlatform";
import usePlatform from "@/hooks/usePlatform";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data: platforms } = usePlatform();

    return (
        <>
            <Menu.Root>
                <Menu.Trigger asChild marginX="10px">
                    <Button variant="outline" size="sm">
                        {selectedPlatform?.name || "Platforms"}
                        <BsChevronDown />
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            {platforms?.results.map((platform) => (
                                <Menu.Item
                                    onClick={() => onSelectPlatform(platform)}
                                    cursor="pointer"
                                    key={platform.id}
                                    value={platform.slug}
                                >
                                    {platform.name}
                                </Menu.Item>
                            ))}
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </>
    );
};

export default PlatformSelector;

import { HStack, Switch, Text } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
            <HStack>
                <Switch.Root
                    colorPalette="blue"
                    checked={colorMode === "dark"}
                    onChange={toggleColorMode}
                >
                    <Switch.HiddenInput />
                    <Switch.Control>
                        <Switch.Thumb />
                    </Switch.Control>
                    <Switch.Label />
                </Switch.Root>
                {colorMode === "dark" ? (
                    <Text>Dark Mode</Text>
                ) : (
                    <Text>Light Mode</Text>
                )}
            </HStack>
        </>
    );
};

export default ColorModeSwitch;

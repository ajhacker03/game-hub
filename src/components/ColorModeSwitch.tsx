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
                    <Text whiteSpace="nowrap">Dark Mode</Text>
                ) : (
                    <Text whiteSpace="nowrap">Light Mode</Text>
                )}
            </HStack>
        </>
    );
};

export default ColorModeSwitch;

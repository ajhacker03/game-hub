import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
    return (
        <>
            <HStack justifyContent="space-between" marginY="14px">
                <Image src={logo} boxSize="64px" />
                <SearchInput onSearch={onSearch} />
                <ColorModeSwitch />
            </HStack>
        </>
    );
};

export default NavBar;

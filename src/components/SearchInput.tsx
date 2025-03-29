import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
    return (
        <InputGroup startElement={<BsSearch />}>
            <Input placeholder="Search games..." rounded="3xl" />
        </InputGroup>
    );
};

export default SearchInput;

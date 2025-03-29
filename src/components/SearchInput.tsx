import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (ref.current) onSearch(ref.current.value);
            }}
        >
            <InputGroup startElement={<BsSearch />}>
                <Input ref={ref} placeholder="Search games..." rounded="3xl" />
            </InputGroup>
        </form>
    );
};

export default SearchInput;

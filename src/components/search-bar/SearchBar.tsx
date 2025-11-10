import { Input, InputElement, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface SearchBarProps {
  onSearch: (searchText: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
  const { onSearch } = props;
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <>
          <InputElement children={<BsSearch />} />
          <Input
            borderRadius="20px"
            placeholder="Search games..."
            variant="outline"
            paddingLeft="40px"
            ref={ref}
          />
        </>
      </InputGroup>
    </form>
  );
};

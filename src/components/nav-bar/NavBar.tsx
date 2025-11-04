import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { CustomToggleMode } from "./CustomToggleMode";
import { SearchBar } from "../search-bar/SearchBar";
interface NavBarProps {
  onSearch: (searchText: string) => void;
}
export const NavBar = (props: NavBarProps) => {
  const { onSearch } = props;
  return (
    <HStack w="100%">
      <Image boxSize="60px" src={logo}></Image>
      <SearchBar onSearch={onSearch} />
      <CustomToggleMode />
    </HStack>
  );
};

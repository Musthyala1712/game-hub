import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/Logo/logo.webp";
import { CustomToggleMode } from "./CustomToggleMode";

export const NavBar = () => {
  return (
    <HStack justifyContent="space-between" w="100%">
      <Image boxSize="60px" src={logo}></Image>
      <CustomToggleMode />
    </HStack>
  );
};

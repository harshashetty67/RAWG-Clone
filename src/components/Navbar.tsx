import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleTheme from "./ToggleTheme";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (text: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ToggleTheme />
    </HStack>
  );
};

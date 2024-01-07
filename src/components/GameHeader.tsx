import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeader = ({ gameQuery }: Props) => {
  // dynamically forming the heading based on filters
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeader;

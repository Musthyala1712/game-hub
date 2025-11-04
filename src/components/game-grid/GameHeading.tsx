import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  gameQuery: GameQuery;
}
export const GameHeading = (props: GameHeadingProps) => {
  const { gameQuery } = props;
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;

  return <Heading fontSize="5xl">{heading}</Heading>;
};

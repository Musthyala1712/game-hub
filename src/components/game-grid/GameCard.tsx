import type { Game } from "@/hooks/useGames";
import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CririticBadge } from "./CriticBadge";

interface GameCardProps {
  game: Game;
}

export const GameCard = (props: GameCardProps) => {
  const { game } = props;
  return (
    <Card.Root
      overflow="hidden"
      borderRadius={10}
      gap={2}
      justifyContent="space-evenly"
    >
      <Image src={game.background_image} alt={game.name} />
      <CardBody backgroundColor="gray.800">
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CririticBadge score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

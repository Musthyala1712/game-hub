import type { Game } from "@/hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

export const GameCard = (props: GameCardProps) => {
  const { game } = props;
  return (
    <Card.Root overflow="hidden" borderRadius={10} gap={2}>
      <Image src={game.background_image} alt={game.name} borderRadius="8px" />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
};

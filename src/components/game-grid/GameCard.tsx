import type { Game } from "@/hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CririticBadge } from "./CriticBadge";
import { useColorMode } from "../ui/color-mode";
import { GameImageCropURL } from "@/services/GameImageCropURL";

interface GameCardProps {
  game: Game;
}

export const GameCard = (props: GameCardProps) => {
  const { game } = props;
  const { colorMode } = useColorMode();
  return (
    <Card.Root overflow="hidden" borderRadius={10} width="260px">
      <Image src={GameImageCropURL(game.background_image)} alt={game.name} />
      <CardBody backgroundColor={colorMode == "light" ? "white" : "gray.800"}>
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

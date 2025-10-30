import { useGames } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameGridSkeleton } from "./GameGridSkeleton";
import type { Genres } from "@/hooks/useGenre";

interface GameGridProps {
  selectedGenre: Genres | null;
}

export const GameGrid = (props: GameGridProps) => {
  const { selectedGenre } = props;
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={8}>
        {isLoading &&
          skeleton.map((skeleton) => <GameGridSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

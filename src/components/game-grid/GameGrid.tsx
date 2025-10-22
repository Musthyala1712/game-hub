import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface GameGridProps {
  count: number;
  results: Game[];
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    apiClient
      .get<GameGridProps>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => seterror(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

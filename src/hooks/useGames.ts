import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GameGridProps {
  count: number;
  results: Game[];
}
export const useGames = () => {
  const controller = new AbortController();

  const [games, setGames] = useState<Game[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    apiClient
      .get<GameGridProps>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);
      });
    return () => controller.abort();
  }, []);

  return { games, error };
};

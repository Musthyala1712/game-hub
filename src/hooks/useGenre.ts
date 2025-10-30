import { useData } from "./useData";

export interface Genres {
  id: number;
  name: string;
  slug: string;
  image_background: string;
  games_count: number;
}

export const useGenres = () => useData<Genres>("/genres");

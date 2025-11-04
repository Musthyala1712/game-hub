import { Grid, GridItem, HStack, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar/NavBar";
import { GameGrid } from "./components/game-grid/GameGrid";
import { GenreList } from "./components/side-nav/GenreList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenre";
import PlatFormSelector from "./components/platform-selector/PlatFormSelector";
import type { Platform } from "./hooks/usePlatforms";
import { SortSelector } from "./components/sort-selector/SortSelector";
import { GameHeading } from "./components/game-grid/GameHeading";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

export const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "260px 1fr",
      }}
      paddingLeft={5}
      paddingRight="20px"
    >
      <GridItem area="nav" marginBottom="20px">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      {showAside && (
        <GridItem area="aside">
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      )}
      <GridItem
        area="main"
        display="flex"
        flexDir="column"
        gap="10px"
        alignItems="flex-start"
      >
        <GameHeading gameQuery={gameQuery} />
        <HStack>
          <PlatFormSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectSortOrder={(sort) =>
              setGameQuery({ ...gameQuery, sortOrder: sort })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

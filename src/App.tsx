import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar/NavBar";
import { GameGrid } from "./components/game-grid/GameGrid";
import { GenreList } from "./components/side-nav/GenreList";
import { useState } from "react";
import type { Genres } from "./hooks/useGenre";

export const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
      paddingLeft={5}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {showAside && (
        <GridItem area="aside" paddingLeft="10px" position="sticky">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      )}
      <GridItem area="main" paddingRight="20px">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

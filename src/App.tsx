import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar/NavBar";
import { GameGrid } from "./components/game-grid/GameGrid";
import { GenreList } from "./components/side-nav/GenreList";

export const App = () => {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      paddingLeft={5}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {showAside && (
        <GridItem area="aside" paddingLeft="10px" position="sticky">
          <GenreList />
        </GridItem>
      )}
      <GridItem area="main" paddingRight="20px">
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

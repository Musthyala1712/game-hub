import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { NavBar } from "./components/nav-bar/NavBar";
import { GameGrid } from "./components/game-grid/GameGrid";

function App() {
  const showAside = useBreakpointValue({ base: false, lg: true });
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" paddingX="20px">
        <NavBar />
      </GridItem>
      {showAside && <GridItem area="aside">Aside</GridItem>}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

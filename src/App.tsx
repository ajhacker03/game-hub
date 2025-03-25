import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
        >
            <GridItem area="nav">
                <NavBar />
            </GridItem>

            {showAside && (
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={(genre) => setSelectedGenre(genre)}
                        selectedGenre={selectedGenre}
                    />
                </GridItem>
            )}

            <GridItem area="main">
                <GameGrid selectedGenre={selectedGenre} />
            </GridItem>
        </Grid>
    );
}

export default App;

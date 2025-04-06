import {
    Box,
    Flex,
    Grid,
    GridItem,
    useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import "./index.css";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder: string;
    searchText: string;
}

function App() {
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
                lg: "200px 1fr",
            }}
            width="90vw"
            mx="auto"
        >
            <GridItem area="nav">
                <NavBar
                    onSearch={(searchText) =>
                        setGameQuery({ ...gameQuery, searchText })
                    }
                />
            </GridItem>

            {showAside && (
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        onSelectGenre={(genre) =>
                            setGameQuery({ ...gameQuery, genreId: genre.id })
                        }
                        selectedGenreId={gameQuery.genreId}
                    />
                </GridItem>
            )}

            <GridItem area="main">
                <Box marginY={5}>
                    <GameHeading gameQuery={gameQuery} />
                    <Flex marginY={5}>
                        <PlatformSelector
                            selectedPlatformId={gameQuery.platformId}
                            onSelectPlatform={(platform) =>
                                setGameQuery({
                                    ...gameQuery,
                                    platformId: platform.id,
                                })
                            }
                        />
                        <SortSelector
                            sortOrder={gameQuery.sortOrder}
                            onSelectSortOrder={(sortOrder) =>
                                setGameQuery({ ...gameQuery, sortOrder })
                            }
                        />
                    </Flex>
                </Box>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;

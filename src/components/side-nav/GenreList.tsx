import { useGenres, type Genres } from "@/hooks/useGenre";
import { GameImageCropURL } from "@/services/GameImageCropURL";
import { Button, Image, List, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

interface GenreListProps {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { data, error } = useGenres();
  const { colorMode } = useColorMode();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root>
        {data.map((genre) => {
          const isActive = selectedGenre?.id === genre.id;

          return (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "5px",
                marginBottom: "8px",
              }}
            >
              <Image
                src={GameImageCropURL(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="outline"
                padding="10px"
                border={0}
                bg={
                  isActive
                    ? colorMode === "light"
                      ? "gray.300"
                      : "gray.600"
                    : "transparent"
                }
                _hover={{
                  bg: colorMode === "light" ? "gray.200" : "gray.700",
                }}
                height="25px"
              >
                {genre.name}
              </Button>
            </div>
          );
        })}
      </List.Root>
    </>
  );
};

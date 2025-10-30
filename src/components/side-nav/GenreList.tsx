import { useGenres, type Genres } from "@/hooks/useGenre";
import { GameImageCropURL } from "@/services/GameImageCropURL";
import { Button, HStack, Image, List, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

interface GenreListProps {
  onSelectGenre: (genre: Genres) => void;
}

export const GenreList = (props: GenreListProps) => {
  const { onSelectGenre } = props;
  const { data, error } = useGenres();
  const { colorMode } = useColorMode();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root>
        {data.map((genre) => (
          <HStack>
            <Image
              src={GameImageCropURL(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="outline"
              padding={0}
              border={0}
              _hover={{ bg: colorMode === "light" ? "gray.200" : "gray.700" }}
            >
              {genre.name}
            </Button>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

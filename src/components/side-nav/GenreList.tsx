import { useGenres } from "@/hooks/useGenre";
import { GameImageCropURL } from "@/services/GameImageCropURL";
import { HStack, Image, List, Text } from "@chakra-ui/react";

export const GenreList = () => {
  const { data, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}
      <List.Root>
        {data.map((genre) => (
          <HStack paddingY="5px">
            <Image
              src={GameImageCropURL(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        ))}
      </List.Root>
    </>
  );
};

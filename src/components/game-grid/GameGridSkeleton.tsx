import { Card, Skeleton, SkeletonText, Stack } from "@chakra-ui/react";

export const GameGridSkeleton = () => {
  return (
    <Stack width="250px">
      <Card.Root height="300px">
        <Skeleton height="200px" />
        <SkeletonText noOfLines={3} />
      </Card.Root>
    </Stack>
  );
};

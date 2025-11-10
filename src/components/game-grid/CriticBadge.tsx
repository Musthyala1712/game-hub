import { Badge } from "@chakra-ui/react";

interface CririticBadgeProps {
  score: number;
}

export const CririticBadge = (props: CririticBadgeProps) => {
  const { score } = props;
  const color =
    score > 75 ? "green.500" : score > 50 ? "yellow.500" : "red.500";
  return (
    <Badge
      backgroundColor="gray.700"
      fontSize="14px"
      paddingX={2}
      color={color}
    >
      {score}
    </Badge>
  );
};

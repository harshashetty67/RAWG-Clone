import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const badgeColor = score > 80 ? "green" : score > 50 ? "yellow" : "red";
  return (
    <Badge
      fontSize="14px"
      paddingX={3}
      borderRadius="5px"
      colorScheme={badgeColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;

import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <Card
      width="40px"
      height="40px"
      borderRadius={8}
      overflow="hidden"
      marginY={2}
    >
      <Skeleton></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GenreCardSkeleton;

import { Box, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack spacing="4">
      <Skeleton borderRadius={8} height="32px" width="32px" />
      <Box flex="1">
        <SkeletonText noOfLines={2} />
      </Box>
    </HStack>
  );
};

export default GenreListSkeleton;

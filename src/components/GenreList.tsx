import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genres = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];

  // Spinner effect for Genre list
  if (isLoading) return <Spinner />;

  // Error handling if genre fetch fails
  if (error) return null;

  return (
    <>
      <Heading marginBottom="8px" fontSize="2xl">
        Genres
      </Heading>
      <List>
        {/* For loading Effect to Genres List, uncomment below code*/}
        {/* {isLoading &&
        genres.map((g) => <GenreCardSkeleton key={g}></GenreCardSkeleton>)} */}

        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="8px">
            <HStack>
              <Image
                boxSize="40px"
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              ></Image>
              <Button
                textAlign="left"
                whiteSpace="normal"
                objectFit="cover"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                variant="link"
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

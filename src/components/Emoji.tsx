import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "28px" },
    4: { src: thumbsUp, alt: "thumbs-up", boxSize: "28px" },
    5: { src: bullsEye, alt: "bulls-eye", boxSize: "35px" },
  };

  return <Image marginTop={3} {...emojiMap[rating]}></Image>;
};

export default Emoji;

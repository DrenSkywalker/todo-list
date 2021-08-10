import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import utils from "./../../imports/utils/utils";

const ImageChipItem = (props) => {
  const { file, images, setImages } = props;

  return (
    <Tag
      maxW="75px"
      size="md"
      borderRadius="full"
      variant="solid"
      colorScheme="cyan"
    >
      <TagLabel>{file.name}</TagLabel>
      <TagCloseButton
        onClick={() => {
          utils.deleteElementFromArray(setImages, images, file);
        }}
      />
    </Tag>
  );
};
export default ImageChipItem;

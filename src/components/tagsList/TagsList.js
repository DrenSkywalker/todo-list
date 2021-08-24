import React from "react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import Slider from "./../slider/Slider";
import utils from "./../../imports/utils/utils";

const TagsList = (props) => {
  const { type, tags, setTags } = props;

  const TagItem = (props) => {
    const { tag } = props;
    return (
      <Tag
        maxW="100px"
        size="md"
        borderRadius="full"
        variant="solid"
        colorScheme="cyan"
        mr={1}
        mb={1}
      >
        <TagLabel>{tag.name}</TagLabel>
        {(type === "images" || type === "tags") && (
          <TagCloseButton
            onClick={() => {
              utils.deleteElementFromArray(setTags, tags, tag.id);
            }}
          />
        )}
      </Tag>
    );
  };

  return type === "images" ? (
    <Slider type="chips">
      {tags.map((tag) => (
        <TagItem key={tag.id} tag={tag} />
      ))}
    </Slider>
  ) : (
    (type === "tags" || type === "list") &&
      tags.map((tag) => <TagItem key={tag.id} tag={tag} />)
  );
};
export default TagsList;

import React from "react";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import assets from "./../../imports/assets/assets";
import utils from "./../../imports/utils/utils";
import "./ImageList.scss";

const ImageList = (props) => {
  const { images, setImages } = props;
  const IconClose = assets.iconClose;

  return images.map((file) => (
    <Avatar key={file.id} src={file.base64} size="md" mb={4} mr={2}>
      <AvatarBadge
        className="image-badge"
        boxSize="1.25em"
        bg="gray.200"
        onClick={() => {
          utils.deleteElementFromArray(setImages, images, file);
        }}
      >
        <IconClose className="icon" />
      </AvatarBadge>
    </Avatar>
  ));
};
export default ImageList;

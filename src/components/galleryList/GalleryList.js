import React from "react";
import { Image } from "@chakra-ui/react";
import "./GalleryList.scss";

const GalleryList = (props) => {
  const { currentReminder } = props;

  const organizeGallery = (file) => {
    const baseClassName = "gallery-element";
    let finalClassName = "";
    const image = document.createElement("img");
    let imageSize = {};
    let aspectRatio;
    image.src = file.base64;
    imageSize = { w: image.width, h: image.height };
    aspectRatio = (imageSize.w / imageSize.h).toFixed(1);

    if (aspectRatio === "0.7" || aspectRatio === "0.6") {
      finalClassName = `${baseClassName} tall`;
    } else if (aspectRatio === "1.9") {
      finalClassName = `${baseClassName} big`;
    } else {
      finalClassName = baseClassName;
    }

    return finalClassName;
  };

  return (
    <ul className="gallery-list">
      {currentReminder.images.map((file) => (
        <li key={file.id} className={organizeGallery(file)}>
          <Image className="gallery-image" src={file.base64} />
        </li>
      ))}
    </ul>
  );
};
export default GalleryList;

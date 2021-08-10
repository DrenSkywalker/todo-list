import React from "react";
import Slider from "./../slider/Slider";
import ImageChipItem from "./../imageChipItem/ImageChipItem";

const ImageChipList = (props) => {
  const { images, setImages } = props;

  return (
    <Slider type="chips">
      {images.map((file) => (
        <ImageChipItem
          key={file.id}
          file={file}
          images={images}
          setImages={setImages}
        />
      ))}
    </Slider>
  );
};
export default ImageChipList;

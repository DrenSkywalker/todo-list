import React, { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
  IconButton,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
  AvatarBadge,
} from "@chakra-ui/react";
import Slider from "./../slider/Slider";
import assets from "./../../imports/assets/assets";
import utils from "./../../imports/utils/utils";
import "./Form.scss";

const Form = (props) => {
  const {
    formRefs,
    formType,
    images,
    setImages,
    placeholders,
    currentReminderValues,
  } = props;

  const IconGallery = assets.iconGallery;
  const IconUpload = assets.iconUpload;
  const IconClose = assets.iconClose;

  useEffect(() => {
    if (formType === "edit" && images.length === 0) {
      setImages(currentReminderValues.images);
    }
  }, []);

  const ImagesPreview = () => {
    return images.map((file) => (
      <Avatar key={file.id} src={file.base64} size="md" mb={4} mr={2}>
        <AvatarBadge
          className="image-badge"
          boxSize="1.25em"
          bg="gray.200"
          onClick={() => {
            utils.deleteElementFromArray(setImages, formRefs.images, file);
          }}
        >
          <IconClose className="icon" />
        </AvatarBadge>
      </Avatar>
    ));
  };

  const ImagesChips = () => {
    return (
      <Slider>
        {images.map((file) => (
          <Tag
            maxW="75px"
            size="md"
            key={file.id}
            borderRadius="full"
            variant="solid"
            colorScheme="cyan"
          >
            <TagLabel>{file.name}</TagLabel>
            <TagCloseButton
              onClick={() => {
                utils.deleteElementFromArray(setImages, formRefs.images, file);
              }}
            />
          </Tag>
        ))}
      </Slider>
    );
  };

  const ImagesField = () => {
    return (
      <>
        <div className="images-preview-container">
          <ImagesPreview />
        </div>
        <InputGroup>
          <InputLeftElement>
            <IconGallery className="icon" />
          </InputLeftElement>
          <Input isReadOnly />
          <div className="images-chips-container">
            <ImagesChips />
          </div>
          <InputRightElement>
            <IconButton size="sm">
              <IconUpload
                className="icon"
                onClick={() => {
                  utils.browseAndImportImages(setImages);
                }}
              />
            </IconButton>
          </InputRightElement>
        </InputGroup>
      </>
    );
  };

  const Inputs = (props) => {
    const { formType } = props;

    return formType === "add" ? (
      <>
        <Input ref={formRefs.title} placeholder={placeholders.title} mb={4} />
        <Textarea
          ref={formRefs.description}
          placeholder={placeholders.description}
          mb={4}
        />
        <ImagesField />
      </>
    ) : (
      formType === "edit" && (
        <>
          <Input
            ref={formRefs.title}
            defaultValue={currentReminderValues.title}
            mb={4}
          />
          <Textarea
            ref={formRefs.description}
            defaultValue={currentReminderValues.description}
            mb={4}
          />
          <ImagesField />
        </>
      )
    );
  };

  return <Inputs formType={formType} />;
};
export default Form;

import React, { useEffect } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  IconButton,
  Tag,
  TagLabel,
  TagCloseButton,
  Avatar,
  AvatarBadge,
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { useTranslation } from "react-i18next";
import Slider from "./../slider/Slider";
import assets from "./../../imports/assets/assets";
import utils from "./../../imports/utils/utils";
import "./Form.scss";

const CustomForm = (props) => {
  const {
    formType,
    images,
    setImages,
    reminders,
    setReminders,
    currentReminderValues,
    onClose,
  } = props;

  const { t } = useTranslation();
  const toast = useToast();

  const IconGallery = assets.iconGallery;
  const IconUpload = assets.iconUpload;
  const IconClose = assets.iconClose;

  const placeholders = {
    title: t("memo_title"),
    description: t("memo_description"),
  };

  const initialValues =
    formType === "add"
      ? { title: "", description: "" }
      : {
          title: currentReminderValues.title,
          description: currentReminderValues.description,
        };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(
      `${t("form_field_title")} ${t("form_error_required")}`
    ),
    description: Yup.string().required(
      `${t("form_field_description")} ${t("form_error_required")}`
    ),
  });

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = (values) => {
    sleep(300).then(() => {
      if (formType === "add") {
        utils.saveReminder(setReminders, {
          title: values.title,
          description: values.description,
          images: images,
        });
        utils.showToast(toast, t("toast_memo_created"));
      } else if (formType === "edit") {
        utils.editReminder(reminders, setReminders, currentReminderValues, {
          title: values.title,
          description: values.description,
          images: images,
        });
        utils.showToast(toast, t("toast_memo_edited"));
      }
      onClose();
    });
  };

  useEffect(() => {
    formType === "edit" &&
      images.length === 0 &&
      setImages(currentReminderValues.images);
  }, []);

  const ImagesPreview = () => {
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

  const ImagesChips = () => {
    return (
      <Slider type="chips">
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
                utils.deleteElementFromArray(setImages, images, file);
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, values, errors }) => (
        <Box as="form" onSubmit={handleSubmit}>
          <Box mb={4}>
            <InputControl
              name="title"
              inputProps={{ placeholder: placeholders.title }}
              mb={4}
            />
            <TextareaControl
              name="description"
              textareaProps={{ placeholder: placeholders.description }}
              mb={4}
            />
            <ImagesField />
          </Box>
          <Box w="full" d="flex" justifyContent="flex-end" mb={4}>
            {formType === "add" ? (
              <SubmitButton colorScheme="blue" mr={2}>
                {t("button_add")}
              </SubmitButton>
            ) : (
              <SubmitButton colorScheme="blue" mr={2}>
                {t("button_confirm")}
              </SubmitButton>
            )}
            <Button variant="ghost" onClick={onClose}>
              {t("button_cancel")}
            </Button>
          </Box>
        </Box>
      )}
    </Formik>
  );
};
export default CustomForm;

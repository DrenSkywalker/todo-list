import React, { useEffect, useState } from "react";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputControl, SubmitButton, TextareaControl } from "formik-chakra-ui";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import ImageList from "./../imageList/ImageList";
import ImageChipList from "./../imageChipList/ImageChipList";
import assets from "./../../imports/assets/assets";
import utils from "./../../imports/utils/utils";
import "./MemoForm.scss";

const MemoForm = (props) => {
  const { formType, reminders, setReminders, currentReminderValues, onClose } =
    props;

  const [images, setImages] = useState([]);

  const { t } = useTranslation();
  const toast = useToast();

  const IconGallery = assets.iconGallery;
  const IconUpload = assets.iconUpload;

  useEffect(() => {
    formType === "edit" &&
      images.length === 0 &&
      setImages(currentReminderValues.images);
  }, []);

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

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const browseAndImportImages = async (setImages) => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.multiple = "true";
    input.onchange = async () => {
      for (const el of input.files) {
        const image = await getBase64(el);
        setImages((prevState) => [
          ...prevState,
          { id: uuidv4(), base64: image, name: el.name },
        ]);
      }
    };
    input.click();
  };

  const ImagesField = () => {
    return (
      <>
        <div className="images-preview-container">
          <ImageList images={images} setImages={setImages} />
        </div>
        <InputGroup>
          <InputLeftElement>
            <IconGallery className="icon" />
          </InputLeftElement>
          <Input isReadOnly />
          <div className="images-chips-container">
            <ImageChipList images={images} setImages={setImages} />
          </div>
          <InputRightElement>
            <IconButton size="sm">
              <IconUpload
                className="icon"
                onClick={() => {
                  browseAndImportImages(setImages);
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
export default MemoForm;

import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Textarea,
  IconButton,
} from "@chakra-ui/react";
import assets from "./../../imports/assets/assets";
import "./Form.scss";

const Form = (props) => {
  const { formRefs, formType, placeholders, currentReminderValues } = props;
  const IconGallery = assets.iconGallery;
  const IconUpload = assets.iconUpload;

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
        <InputGroup>
          <InputLeftElement>
            <IconGallery className="icon" />
          </InputLeftElement>
          <Input placeholder="gallery" />
          <InputRightElement>
            <IconButton size="sm">
              <IconUpload className="icon" />
            </IconButton>
          </InputRightElement>
        </InputGroup>
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
        </>
      )
    );
  };

  return <Inputs formType={formType} />;
};
export default Form;

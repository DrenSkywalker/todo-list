import React, { createRef } from "react";
import { useTranslation } from "react-i18next";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import assets from "./../../imports/assets/assets";
import utils from "./../../imports/utils/utils";
import "./Dialog.scss";

const Dialog = (props) => {
  const {
    isOpen,
    onOpen,
    onClose,
    currentReminder,
    reminders,
    setReminders,
    dialogType,
    setDialogType,
  } = props;

  const { t } = useTranslation();
  const toast = useToast();
  const inputs = {
    title: createRef(),
    description: createRef(),
  };

  const ModalTitle = (props) => {
    return props.dialogType === "add" ? (
      <h2 className="h2">{t("add_memo")}</h2>
    ) : props.dialogType === "view" ? (
      <h2 className="h2">{currentReminder.title}</h2>
    ) : props.dialogType === "edit" ? (
      <h2 className="h2">{t("edit_memo")}</h2>
    ) : (
      <h2 className="h2">{t("delete_memo")}</h2>
    );
  };

  const ModalDescription = (props) => {
    return props.dialogType === "add" ? (
      <>
        <Input mb={4} ref={inputs.title} placeholder={t("memo_title")} />
        <Textarea
          ref={inputs.description}
          placeholder={t("memo_description")}
        />
      </>
    ) : props.dialogType === "view" ? (
      <p className="text">{currentReminder.description}</p>
    ) : props.dialogType === "edit" ? (
      <>
        <Input ref={inputs.title} mb={4} defaultValue={currentReminder.title} />
        <Textarea
          ref={inputs.description}
          defaultValue={currentReminder.description}
        />
      </>
    ) : (
      <div className="description">
        <img src={assets.imageDelete} alt="" className="image" />
        <p className="text">
          {t("delete_confirmation", { name: currentReminder.title })}
        </p>
        <p className="text">{t("delete_info")}</p>
      </div>
    );
  };

  const Buttons = (props) => {
    return (
      <>
        {props.dialogType === "add" ? (
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              utils.saveReminder(inputs, setReminders);
              toast({
                title: "Memo created",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              onClose();
            }}
          >
            {" "}
            {t("button_add")}
          </Button>
        ) : props.dialogType === "view" ? (
          <>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setDialogType("edit");
                onOpen();
              }}
            >
              {t("button_edit")}
            </Button>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                setDialogType("delete");
                onOpen();
              }}
            >
              {t("button_delete")}
            </Button>
          </>
        ) : props.dialogType === "edit" ? (
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              utils.editReminder(
                reminders,
                setReminders,
                currentReminder,
                inputs
              );
              toast({
                title: "Memo edited",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              onClose();
            }}
          >
            {t("button_confirm")}
          </Button>
        ) : (
          <Button
            colorScheme="red"
            mr={3}
            onClick={() => {
              utils.deleteReminder(reminders, setReminders, currentReminder);
              toast({
                title: "Memo deleted",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
              onClose();
            }}
          >
            {t("button_delete")}
          </Button>
        )}
        <Button variant="ghost" onClick={onClose}>
          {t("button_cancel")}
        </Button>
      </>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalTitle dialogType={dialogType} />
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <ModalDescription dialogType={dialogType} />
        </ModalBody>

        <ModalFooter>
          <Buttons dialogType={dialogType} />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default Dialog;

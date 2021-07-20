import React from "react";
import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
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
import "./DialogShow.scss";

const DialogShow = (props) => {
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
  const inputTitle = useRef();
  const inputDescription = useRef();

  const saveReminder = () => {
    const newReminder = {
      id: uuidv4(),
      title: inputTitle.current.value,
      description: inputDescription.current.value,
    };

    setReminders((prevState) => [...prevState, newReminder]);
  };

  const deleteReminder = () => {
    setReminders(
      reminders.filter((element) => element.id !== currentReminder.id)
    );
  };

  const editReminder = () => {
    const newReminder = {
      id: currentReminder.id,
      title: inputTitle.current.value,
      description: inputDescription.current.value,
    };

    deleteReminder();
    setReminders((prevState) => [newReminder, ...prevState]);
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
        <Input ref={inputTitle} mb={4} placeholder={t("memo_title")} />
        <Textarea ref={inputDescription} placeholder={t("memo_description")} />
      </>
    ) : props.dialogType === "view" ? (
      <p className="text">{currentReminder.description}</p>
    ) : props.dialogType === "edit" ? (
      <>
        <Input ref={inputTitle} mb={4} defaultValue={currentReminder.title} />
        <Textarea
          ref={inputDescription}
          defaultValue={currentReminder.description}
        />
      </>
    ) : (
      <div className="description">
        <img src={assets.imageDelete} alt="" className="image" />
        <p className="text">
          {t("delete_confirmation", { name: currentReminder.title })}
          <br />
          {t("delete_info")}
        </p>
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
              saveReminder();
              toast({
                title: "Memo created",
                status: "info",
                duration: 5000,
                isClosable: true,
              });
              onClose();
            }}
          >
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
              editReminder();
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
              deleteReminder();
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
export default DialogShow;

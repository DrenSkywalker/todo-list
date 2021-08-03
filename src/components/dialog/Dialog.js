import React, { useState } from "react";
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
  useToast,
  Image,
  Box,
} from "@chakra-ui/react";
import CustomForm from "./../form/Form";
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
  const [images, setImages] = useState([]);

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
    const { dialogType } = props;
    return dialogType === "add" ? (
      <CustomForm
        formType={dialogType}
        images={images}
        setImages={setImages}
        setReminders={setReminders}
        onClose={onClose}
      />
    ) : dialogType === "view" ? (
      <div className="description">
        <p className="text">{currentReminder.description}</p>
        {currentReminder.images.length > 0 && (
          <ul className="gallery-list">
            {currentReminder.images.map((file, j) => (
              <li key={file.id} className={utils.organizeGallery(file)}>
                <Image className="gallery-image" src={file.base64} />
              </li>
            ))}
          </ul>
        )}
      </div>
    ) : dialogType === "edit" ? (
      <CustomForm
        formType={dialogType}
        images={images}
        setImages={setImages}
        reminders={reminders}
        setReminders={setReminders}
        onClose={onClose}
        currentReminderValues={currentReminder}
      />
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
    const { dialogType } = props;
    return (
      <>
        {dialogType === "view" ? (
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
            <Button variant="ghost" onClick={onClose}>
              {t("button_cancel")}
            </Button>
          </>
        ) : (
          dialogType === "delete" && (
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                utils.deleteElementFromArray(
                  setReminders,
                  reminders,
                  currentReminder
                );
                utils.showToast(toast, t("toast_memo_deleted"));
                onClose();
              }}
            >
              {t("button_delete")}
            </Button>
          )
        )}
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

          {(dialogType === "view" || dialogType === "delete") && (
            <Box w="full" d="flex" justifyContent="flex-end" mt={4} mb={4}>
              <Buttons dialogType={dialogType} />
            </Box>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default Dialog;

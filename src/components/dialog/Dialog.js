import React from "react";
import { useTranslation } from "react-i18next";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useToast,
  Box,
} from "@chakra-ui/react";
import GalleryList from "./../galleryList/GalleryList";
import TagsList from "./../tagsList/TagsList";
import MemoForm from "./../memoForm/MemoForm";
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

  const ModalTitle = (props) => {
    const { dialogType } = props;
    let title = "";

    dialogType === "add"
      ? (title = t("add_memo"))
      : dialogType === "view"
      ? (title = currentReminder.title)
      : dialogType === "edit"
      ? (title = t("edit_memo"))
      : (title = t("delete_memo"));

    return <h2 className="h2">{title}</h2>;
  };

  const ModalDescription = (props) => {
    const { dialogType } = props;
    return dialogType === "add" ? (
      <MemoForm
        formType={dialogType}
        setReminders={setReminders}
        onClose={onClose}
      />
    ) : dialogType === "view" ? (
      <div className="description">
        <p className="text">{currentReminder.description}</p>
        {currentReminder.images.length > 0 && (
          <GalleryList currentReminder={currentReminder} />
        )}
        {currentReminder.tags.length > 0 && (
          <div className="tags-list-container">
            <TagsList type="list" tags={currentReminder.tags} />
          </div>
        )}
      </div>
    ) : dialogType === "edit" ? (
      <MemoForm
        formType={dialogType}
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
                  currentReminder.id
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

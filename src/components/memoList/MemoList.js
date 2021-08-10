import React from "react";
import { Box } from "@chakra-ui/react";
import GalleryList from "./../galleryList/GalleryList";
import "./MemoList.scss";

const MemoList = (props) => {
  const { onOpen, reminders, setCurrentReminder, setDialogType } = props;

  return (
    <ul id="memo-list">
      {reminders.map((currentReminder) => (
        <li
          key={currentReminder.id}
          className="memo-element"
          onClick={() => {
            setCurrentReminder(currentReminder);
            setDialogType("view");
            onOpen();
          }}
        >
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="4">
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {currentReminder.title}
            </Box>

            <Box>{currentReminder.description}</Box>

            {currentReminder.images.length > 0 && (
              <GalleryList currentReminder={currentReminder} />
            )}
          </Box>
        </li>
      ))}
    </ul>
  );
};
export default MemoList;

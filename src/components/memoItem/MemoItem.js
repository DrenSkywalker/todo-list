import React from "react";
import { Box } from "@chakra-ui/react";
import GalleryList from "./../galleryList/GalleryList";
import TagsList from "./../tagsList/TagsList";

const MemoItem = (props) => {
  const { currentReminder, setCurrentReminder, setDialogType, onOpen } = props;

  return (
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

        {currentReminder.tags.length > 0 && (
          <div className="tags-list-container">
            <TagsList type="list" tags={currentReminder.tags} />
          </div>
        )}
      </Box>
    </li>
  );
};
export default MemoItem;

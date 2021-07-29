import React from "react";
import { Box, Image } from "@chakra-ui/react";
import utils from "./../../imports/utils/utils";
import "./List.scss";

const List = (props) => {
  const { onOpen, reminders, setCurrentReminder, setDialogType } = props;

  return (
    <ul id="memo-list">
      {reminders.map((currentReminder, i) => (
        <li
          key={i}
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
              <ul className="gallery-list">
                {currentReminder.images.map((file, j) => (
                  <li key={file.id} className={utils.organizeGallery(file)}>
                    <Image className="gallery-image" src={file.base64} />
                  </li>
                ))}
              </ul>
            )}
          </Box>
        </li>
      ))}
    </ul>
  );
};
export default List;

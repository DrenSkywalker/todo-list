import React from "react";
import { Box } from "@chakra-ui/react";
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
          </Box>
        </li>
      ))}
    </ul>
  );
};
export default List;

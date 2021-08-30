import React from "react";
import MemoItem from "./../memoItem/MemoItem";
import "./MemoList.scss";

const MemoList = (props) => {
  const { onOpen, searchTag, reminders, setCurrentReminder, setDialogType } =
    props;

  return (
    <ul id="memo-list">
      {reminders.map((currentReminder) =>
        searchTag !== "" ? (
          currentReminder.tags.filter((e) => {
            return e.name.includes(searchTag);
          }).length > 0 && (
            <MemoItem
              key={currentReminder.id}
              currentReminder={currentReminder}
              setCurrentReminder={setCurrentReminder}
              setDialogType={setDialogType}
              onOpen={onOpen}
            />
          )
        ) : (
          <MemoItem
            key={currentReminder.id}
            currentReminder={currentReminder}
            setCurrentReminder={setCurrentReminder}
            setDialogType={setDialogType}
            onOpen={onOpen}
          />
        )
      )}
    </ul>
  );
};
export default MemoList;

import React from "react";
import MemoList from "./../memoList/MemoList";
import "./Main.scss";

const Main = (props) => {
  const { onOpen, reminders, setCurrentReminder, setDialogType } = props;

  return (
    <main id="main">
      <div id="main-content">
        <MemoList
          onOpen={onOpen}
          reminders={reminders}
          setCurrentReminder={setCurrentReminder}
          setDialogType={setDialogType}
        />
      </div>
    </main>
  );
};
export default Main;

import React from "react";
import List from "./../list/List";
import "./Main.scss";

const Main = (props) => {
  const { onOpen, reminders, setCurrentReminder, setDialogType } = props;

  return (
    <main id="main">
      <div id="main-content">
        <List
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

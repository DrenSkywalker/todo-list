import { v4 as uuidv4 } from "uuid";

const saveReminder = (inputs, setReminders) => {
  const newReminder = {
    id: uuidv4(),
    title: inputs.title.current.value,
    description: inputs.description.current.value,
  };

  setReminders((prevState) => [...prevState, newReminder]);
};

const deleteReminder = (reminders, setReminders, currentReminder) => {
  setReminders(
    reminders.filter((element) => element.id !== currentReminder.id)
  );
};

const editReminder = (reminders, setReminders, currentReminder, inputs) => {
  const newReminder = {
    id: currentReminder.id,
    title: inputs.title.current.value,
    description: inputs.description.current.value,
  };

  deleteReminder(reminders, setReminders, currentReminder);
  setReminders((prevState) => [newReminder, ...prevState]);
};

const utils = { saveReminder, editReminder, deleteReminder };

export default utils;

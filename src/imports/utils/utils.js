import { v4 as uuidv4 } from "uuid";

/* --------------------------------------- */
/* ----- LANGUAGE HANDLING FUNCTIONS ----- */
/* --------------------------------------- */
const handleLanguageChange = (i18n, value) => {
  i18n.changeLanguage(value);
};

/* --------------------------------------- */
/* ------- LOCAL STORAGE FUNCTIONS ------- */
/* --------------------------------------- */
const saveLocalStorage = (reminders) => {
  localStorage.setItem("reminders", JSON.stringify(reminders));
};

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("reminders"));
};

const isLocalStorageFull = () => {
  return localStorage.getItem("reminders") != null;
};

/* --------------------------------------- */
/* ------- MEMO HANDLING FUNCTIONS ------- */
/* --------------------------------------- */

const replaceReminders = (setReminders, value) => {
  setReminders((prevState) => [value, ...prevState]);
};

const saveReminder = (values, setReminders) => {
  const newReminder = {
    id: uuidv4(),
    title: values.title.current.value,
    description: values.title.current.value,
  };

  replaceReminders(setReminders, newReminder);
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
  replaceReminders(setReminders, newReminder);
};

const utils = {
  handleLanguageChange,
  saveLocalStorage,
  getLocalStorage,
  isLocalStorageFull,
  replaceReminders,
  saveReminder,
  editReminder,
  deleteReminder,
};

export default utils;

import { v4 as uuidv4 } from "uuid";

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
/* ------ ARRAYS HANDLING FUNCTIONS ------ */
/* --------------------------------------- */
const saveElementToArray = (setArray, value) => {
  setArray((prevState) => [value, ...prevState]);
};

const deleteElementFromArray = (setArray, array, element) => {
  setArray(array.filter((el) => el.id !== element.id));
};

/* --------------------------------------- */
/* ------- MEMO HANDLING FUNCTIONS ------- */
/* --------------------------------------- */
const saveReminder = (setReminders, values) => {
  const newReminder = {
    id: uuidv4(),
    title: values.title,
    description: values.description,
    images: values.images,
  };

  saveElementToArray(setReminders, newReminder);
};

const editReminder = (
  reminders,
  setReminders,
  currentReminderValues,
  newValues
) => {
  const newReminder = {
    id: currentReminderValues.id,
    title: newValues.title,
    description: newValues.description,
    images: newValues.images,
  };

  deleteElementFromArray(setReminders, reminders, currentReminderValues);
  saveElementToArray(setReminders, newReminder);
};

const showToast = (toast, title) => {
  return toast({
    title: title,
    status: "success",
    duration: 3000,
    isClosable: true,
  });
};

/* --------------------------------------- */
/* ---------------- EXPORT ---------------*/
/* --------------------------------------- */
const utils = {
  saveLocalStorage,
  getLocalStorage,
  isLocalStorageFull,
  saveReminder,
  editReminder,
  saveElementToArray,
  deleteElementFromArray,
  showToast,
};

export default utils;

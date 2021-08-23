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
const saveElementToArray = (setArray, element) => {
  setArray((prevState) => [element, ...prevState]);
};

const deleteElementFromArray = (setArray, array, id) => {
  setArray(array.filter((el) => el.id !== id));
};

const editElementOfArray = (setArray, array, id, element) => {
  deleteElementFromArray(setArray, array, id);
  saveElementToArray(setArray, element);
};

/* --------------------------------------- */
/* ---------- GLOBAL FUNCTIONS ----------- */
/* --------------------------------------- */
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
  saveElementToArray,
  deleteElementFromArray,
  editElementOfArray,
  showToast,
};

export default utils;

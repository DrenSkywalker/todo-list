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

const organizeGallery = (file) => {
  const baseClassName = "gallery-element";
  let finalClassName = "";
  const image = document.createElement("img");
  let imageSize = {};
  let aspectRatio;
  image.src = file.base64;
  imageSize = { w: image.width, h: image.height };
  aspectRatio = (imageSize.w / imageSize.h).toFixed(1);

  if (aspectRatio === "0.7" || aspectRatio === "0.6") {
    finalClassName = `${baseClassName} tall`;
  } else if (aspectRatio === "1.9") {
    finalClassName = `${baseClassName} big`;
  } else {
    finalClassName = baseClassName;
  }

  return finalClassName;
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
/* -- IMAGES UPLOAD HANDLING FUNCTIONS --- */
/* --------------------------------------- */
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

const browseAndImportImages = async (setImages) => {
  let input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.multiple = "true";
  input.onchange = async () => {
    for (const el of input.files) {
      const image = await getBase64(el);
      setImages((prevState) => [
        ...prevState,
        { id: uuidv4(), base64: image, name: el.name },
      ]);
    }
  };
  input.click();
};

/* --------------------------------------- */
/* ---------------- EXPORT ---------------*/
/* --------------------------------------- */
const utils = {
  handleLanguageChange,
  saveLocalStorage,
  getLocalStorage,
  isLocalStorageFull,
  saveReminder,
  editReminder,
  saveElementToArray,
  deleteElementFromArray,
  browseAndImportImages,
  organizeGallery,
  showToast,
};

export default utils;

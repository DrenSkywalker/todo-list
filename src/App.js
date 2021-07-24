import * as React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ChakraProvider, useDisclosure, extendTheme } from "@chakra-ui/react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Dialog from "./components/dialog/Dialog";
import Footer from "./components/footer/Footer";
import utils from "./imports/utils/utils";

function App() {
  const { i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reminders, setReminders] = useState(
    utils.isLocalStorageFull() ? utils.getLocalStorage() : []
  );
  const [currentReminder, setCurrentReminder] = useState();
  const [dialogType, setDialogType] = useState();
  const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          _focus: { boxShadow: "none" },
        },
      },
    },
  });

  useEffect(() => {
    reminders.length > 0
      ? utils.saveLocalStorage(reminders)
      : reminders.length === 0 &&
        utils.isLocalStorageFull &&
        utils.saveLocalStorage(reminders);
  }, [reminders]);

  return (
    <ChakraProvider theme={theme}>
      {isOpen && (
        <Dialog
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          currentReminder={currentReminder}
          reminders={reminders}
          setReminders={setReminders}
          dialogType={dialogType}
          setDialogType={setDialogType}
        />
      )}
      <Header onOpen={onOpen} setDialogType={setDialogType} />
      <Main
        onOpen={onOpen}
        reminders={reminders}
        setCurrentReminder={setCurrentReminder}
        setDialogType={setDialogType}
      />
      <Footer i18n={i18n} />
    </ChakraProvider>
  );
}

export default App;

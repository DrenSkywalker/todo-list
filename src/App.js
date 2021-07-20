import * as React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChakraProvider, useDisclosure, extendTheme } from "@chakra-ui/react";
import Header from "./components/header/Header";
import List from "./components/list/List";
import DialogShow from "./components/dialog_show/DialogShow";
import Footer from "./components/footer/Footer";

/*
+ usare traduzioni file esterno
seconda parte: usare Formik per la gestione del form e Yup per la validazione dei campi, 
*/

function App() {
  const { i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reminders, setReminders] = useState([]);
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

  console.log(reminders);

  return (
    <ChakraProvider theme={theme}>
      {isOpen && (
        <DialogShow
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

      <Footer i18n={i18n} />
    </ChakraProvider>
  );
}

export default App;

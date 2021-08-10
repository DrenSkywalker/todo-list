import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import SelectFooter from "../selectFooter/SelectFooter";

const DrawerFooter = (props) => {
  const { i18n, isOpen, onClose } = props;

  return (
    <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody display="flex" alignItems="center" justifyContent="center">
          <SelectFooter i18n={i18n} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
export default DrawerFooter;

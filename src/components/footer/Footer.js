import React from "react";
import { useTranslation } from "react-i18next";
import {
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { ReactComponent as IconArrowExpand } from "../../assets/icons/arrow_expand.svg";

import "./Footer.scss";

const Footer = (props) => {
  const { i18n } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <footer id="footer">
      <IconButton size="sm" onClick={onOpen}>
        <IconArrowExpand className="icon" />
      </IconButton>

      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Select
              maxW="200"
              placeholder={t("select_language")}
              onChange={(event) => {
                handleLanguageChange(event.target.value);
              }}
            >
              <option value="it">{t("language_it")}</option>
              <option value="en">{t("language_en")}</option>
            </Select>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </footer>
  );
};
export default Footer;

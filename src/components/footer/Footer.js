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
  Tooltip,
} from "@chakra-ui/react";
import assets from "./../../imports/assets/assets";
import utils from "./../../imports/utils/utils";

import "./Footer.scss";

const Footer = (props) => {
  const { i18n } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();
  const IconExpand = assets.iconExpand;

  return (
    <footer id="footer">
      <Tooltip
        hasArrow
        label={t("tooltip_select_language")}
        aria-label="A tooltip"
      >
        <IconButton size="sm" onClick={onOpen}>
          <IconExpand className="icon" />
        </IconButton>
      </Tooltip>

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
                utils.handleLanguageChange(i18n, event.target.value);
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

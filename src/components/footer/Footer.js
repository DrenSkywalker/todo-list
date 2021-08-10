import React from "react";
import { useTranslation } from "react-i18next";
import { useDisclosure, IconButton, Tooltip } from "@chakra-ui/react";
import DrawerFooter from "../drawerFooter/DrawerFooter";
import assets from "./../../imports/assets/assets";

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

      <DrawerFooter i18n={i18n} isOpen={isOpen} onClose={onClose} />
    </footer>
  );
};
export default Footer;

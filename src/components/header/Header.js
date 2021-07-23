import React from "react";
import { useTranslation } from "react-i18next";
import { IconButton, Tooltip } from "@chakra-ui/react";

import assets from "./../../imports/assets/assets";
import "./Header.scss";

const Header = (props) => {
  const { onOpen, setDialogType } = props;

  const { t } = useTranslation();

  return (
    <header id="header">
      <div id="header-content">
        <h1 id="title">
          <img src={assets.iconCheck} alt="" className="icon" /> To-Do
        </h1>

        <Tooltip hasArrow label={t("tooltip_add_memo")} aria-label="A tooltip">
          <IconButton
            size="sm"
            onClick={() => {
              setDialogType("add");
              onOpen();
            }}
          >
            <img src={assets.iconAdd} alt="" className="icon" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};
export default Header;

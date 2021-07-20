import React from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { ReactComponent as IconAdd } from "../../assets/icons/add.svg";
import { ReactComponent as IconCheck } from "../../assets/icons/check.svg";

import "./Header.scss";

const Header = (props) => {
  const { onOpen, setDialogType } = props;

  return (
    <header id="header">
      <div id="header-content">
        <h1 id="title">
          <IconCheck className="icon" /> To-Do
        </h1>

        <Tooltip label="Add new memo" aria-label="A tooltip">
          <IconButton
            size="sm"
            onClick={() => {
              setDialogType("add");
              onOpen();
            }}
          >
            <IconAdd className="icon" />
          </IconButton>
        </Tooltip>
      </div>
    </header>
  );
};
export default Header;

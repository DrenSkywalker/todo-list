import React from "react";
import { useTranslation } from "react-i18next";
import {
  IconButton,
  Tooltip,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import assets from "./../../imports/assets/assets";
import "./Header.scss";

const Header = (props) => {
  const { onOpen, setDialogType, setSearchTag } = props;
  const { t } = useTranslation();

  const IconAdd = assets.iconAdd;
  const IconCheck = assets.iconCheck;
  const IconSearch = assets.iconSearch;

  const handleSearchInputValueChange = (event) => {
    event.target.value.length !== 0
      ? setSearchTag(event.target.value)
      : setSearchTag("");
  };

  return (
    <header id="header">
      <div id="header-content">
        <h1 id="title">
          <IconCheck className="icon" /> To-Do
        </h1>

        <div id="header-content-right">
          <InputGroup size="sm" maxW="160px">
            <InputLeftElement>
              <IconSearch className="icon" />
            </InputLeftElement>
            <Input
              onChange={handleSearchInputValueChange}
              placeholder={t("search_placeholder")}
            />
          </InputGroup>

          <Tooltip
            hasArrow
            label={t("tooltip_add_memo")}
            aria-label="A tooltip"
          >
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
      </div>
    </header>
  );
};
export default Header;

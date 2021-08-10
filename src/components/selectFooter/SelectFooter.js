import React from "react";
import { useTranslation } from "react-i18next";
import { Select } from "@chakra-ui/react";

const DrawerFooter = (props) => {
  const { i18n } = props;
  const { t } = useTranslation();

  const handleLanguageChange = (i18n, value) => {
    i18n.changeLanguage(value);
  };

  return (
    <Select
      maxW="200"
      placeholder={t("select_language")}
      onChange={(event) => {
        handleLanguageChange(i18n, event.target.value);
      }}
    >
      <option value="it">{t("language_it")}</option>
      <option value="en">{t("language_en")}</option>
    </Select>
  );
};
export default DrawerFooter;

import PropTypes from "prop-types";
import React, { useState, createContext } from "react";

import styles from "../../theme/themes.module.scss";

const themeContext = createContext();

export const ThemeProvider = (props) => {
  const [isDarkmode, setIsDarkmode] = useState(false);
  const theme = isDarkmode ? styles.darkTheme : styles.defaultTheme;

  return (
    <themeContext.Provider value={[isDarkmode, setIsDarkmode]}>
      <div className={theme}>{props.children}</div>
    </themeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

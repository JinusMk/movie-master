import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./Dropdown.module.scss";
import { ToggleProvider } from "./toggleDropdownContext";

export const Dropdown = (props) => {
  const { children, className, ...rest } = props;

  const wrapperClass = classNames(styles.wrapper, {
    [className || ""]: className,
  });

  return (
    <ToggleProvider>
      <div className={wrapperClass} {...rest}>
        {children}
      </div>
    </ToggleProvider>
  );
};

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

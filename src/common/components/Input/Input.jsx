import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import { Icon } from "../Icon";

import styles from "./Input.module.scss";

export const Input = (props) => {
  const {
    leftIcon,
    prefix,
    postfix,
    rightIcon,
    rightIconAction,
    variant = "primary",
    className,
    leftIconSize = "1rem",
    righIconSize = "1rem",
    ...rest
  } = props;

  const iconActionProps = rightIconAction
    ? {
        role: "button",
        onClick: rightIconAction,
      }
    : {};

  const inputWrapperClass = classNames(styles.inputContentBase, {
    [styles[variant]]: variant,
    [className ? className : ""]: className,
  });

  const rightIconClass = classNames(styles.rightIcon, {
    [styles.rightIconAction]: rightIconAction,
  });

  return (
    <div className={styles.InputWrapper}>
      <div className={inputWrapperClass}>
        {leftIcon && (
          <div className={styles.leftIcon}>
            <Icon
              size={leftIconSize}
              alt={`${leftIcon} icon`}
              source={leftIcon}
            />
          </div>
        )}
        <input className={styles.input} {...rest} />
        {rightIcon && (
          <div
            {...iconActionProps}
            data-testid="right-icon"
            className={rightIconClass}
          >
            <Icon
              size={righIconSize}
              alt={`${rightIcon} icon`}
              source={rightIcon}
              className={styles.rightIconImg}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  variant: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  className: PropTypes.string,
  rightIconAction: PropTypes.func,
  leftIconSize: PropTypes.string,
  righIconSize: PropTypes.string,
};

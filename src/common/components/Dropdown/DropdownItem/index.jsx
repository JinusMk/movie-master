import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ToggleContext } from 'common/components/Dropdown/toggleDropdownContext';

import styles from './DropdownItem.module.scss';

export const DropdownItem = (props) => {
  const { setIsOpen } = useContext(ToggleContext);

  const { children, onClick, closeOnSelect, ...rest } = props;

  const itemClass = classNames(styles.item, {
    [rest.className || '']: rest.className,
  });

  const handleOnClick = (...args) => {
    if (closeOnSelect) {
      setIsOpen(false);
    }
    onClick && onClick(...args);
  };

  return (
    <>
      <div onClick={handleOnClick} {...rest} className={itemClass} role="presentation">
        {children}
      </div>
    </>
  );
};

DropdownItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  closeOnSelect: PropTypes.bool,
};

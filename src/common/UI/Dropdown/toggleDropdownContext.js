import PropTypes from "prop-types";
import React, { createContext, useState, useRef } from "react";

import { useOnClickOutside } from "common/hooks/useOnClickOutside";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <ToggleContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      <span ref={ref}>{children}</span>
    </ToggleContext.Provider>
  );
};

ToggleProvider.propTypes = {
  children: PropTypes.node,
};

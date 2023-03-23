import PropTypes from "prop-types";
import React from "react";

export const Icon = (props) => {
  const { size = "1rem", source = "", alt = "", onClick } = props;

  return (
    <img
      className={props.className}
      style={{ height: `${size}`, width: `${size}`, overflow: "hidden" }}
      src={source}
      size={size}
      alt={alt}
      onClick={onClick}
      role="presentation"
      data-testid="icon"
      draggable={false}
    />
  );
};

Icon.propTypes = {
  size: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

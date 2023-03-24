import classNames from 'classnames';
import { regexEscape } from '../../../lib/utils/regexManager';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './Text.module.scss';

export const Text = (props) => {
  const {
    as: Component = 'span',
    size = 512,
    linkify,
    children,
    truncate,
    fontSize = 'base',
    ellipsis,
    className,
    fontWeight = 400,
    translateProps,
    highlightText,
    ...rest
  } = props;

  const [isReadMore, setReadMore] = useState(truncate);

  if (!props.children) {
    return null;
  }

  const buttonClass = classNames(styles.readMoreButton, {
    [styles[fontSize]]: fontSize,
  });

  const toggleReadMore = () => setReadMore((prev) => !prev);

  const textClass = classNames(styles.textBase, {
    [styles[`weight-${fontWeight}`]]: fontWeight,
    [styles[fontSize]]: fontSize,
    [className || '']: className,
    [styles.ellipsis]: ellipsis,
  });

  const highlightTextFn = (text, highlightText) => {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${regexEscape(highlightText)})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightText.toLowerCase() ? (
            <span key={index} className={styles.highlight}>
              {part}
            </span>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  const readMoreText = (text, size) => {
    return `${text.slice(0, size)}...`;
  };

  const RenderChild = () => {
    let finalText = children;

    if (truncate && finalText.length > size) {
      if (isReadMore) {
        finalText = (
          <>
            {readMoreText(finalText, size)}
            {
              <button className={buttonClass} onClick={toggleReadMore}>
                Read more
              </button>
            }
          </>
        );
      } else {
        finalText = (
          <>
            {finalText}
            <button className={styles.readMoreButton} onClick={toggleReadMore}>
              Read less
            </button>
          </>
        );
      }
    }

    if (highlightText) {
      finalText = highlightTextFn(finalText, highlightText);
    }

    return finalText;
  };

  return (
    <Component className={textClass} {...rest}>
      <RenderChild />
    </Component>
  );
};

Text.fontSize = {
  p8: 'xxs',
  p12: 'xs',
  p14: 'base',
  p16: 'sm',
  p18: 'lg',
  p20: 'xl',
  p24: 'xl2',
  p32: 'xl3',
};

Text.propTypes = {
  as: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.node,
  truncate: PropTypes.bool,
  fontSize: PropTypes.string,
  ellipsis: PropTypes.bool,
  className: PropTypes.string,
  fontWeight: PropTypes.oneOf([300, 400, 500, 600, 700]),
  highlightText: PropTypes.string,
};

import classNames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import styles from "./ContentHolder.module.scss";

export const ContentHolder = (props) => {
  const className = classNames(styles.contentHolderBase, props.className);

  return (
    <div className={className}>
      {props.header ? (
        <div className={styles.fullHeader}>{props.header}</div>
      ) : null}
      <div className={styles.bodyContent}>
        <div className={styles.container}>
          <div className={styles.scroller}>
            <div className={styles.content}>{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentHolder.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
};

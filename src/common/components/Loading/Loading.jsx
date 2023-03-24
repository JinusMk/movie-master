import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Icon, icons } from 'common/components/Icon';

import styles from './Loading.module.scss';

export const Loading = (props) => {
  const { size = 'sm', ...rest } = props;

  const dotClass = classNames(styles.dot, {
    [styles[size]]: size,
  });

  return (
    <div className={styles.loadingWrapper} {...rest}>
      <ul className={styles.dotsList}>
        <li data-testid="dot" className={dotClass} />
        <li data-testid="dot" className={dotClass} />
        <li data-testid="dot" className={dotClass} />
      </ul>
    </div>
  );
};

Loading.size = { sm: 'sm', md: 'md', xs: 'xs' };

Loading.propTypes = {
  size: PropTypes.oneOf(Object.values(Loading.size)),
};

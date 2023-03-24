import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { Loading } from '../Loading';

import styles from './IntersectionLoader.module.scss';

let io = null;
export const IntersectionLoader = (props) => {
  const { isLoading = false, onChange } = props;
  const elem = useRef(null);

  useEffect(() => {
    io = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio !== 0 && !isLoading) {
          onChange?.();
        }
      },
      {
        /* Using default options. Details below */
      }
    );
    // Start observing an element
    io.observe(elem?.current);
    return () => {
      io?.disconnect?.();
    };
  }, [onChange, isLoading]);

  return (
    <div className={styles.intersectionLoaderBase} data-testid="loader">
      <div ref={elem} onClick={props?.onChange} role="presentation">
        <Loading />
      </div>
    </div>
  );
};

IntersectionLoader.propTypes = {
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

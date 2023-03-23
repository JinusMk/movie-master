import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Paginate.module.scss'

export const Paginate = (props) => {
  const paginateClass = classNames(styles.paginateBase, {
    [props.className || '']: props.className,
  })

  return (
    <div className={paginateClass}>
      <ReactPaginate
        previousLabel={'Prev'}
        nextLabel={'Next'}
        breakLabel={'...'}
        forcePage={props.currentPage}
        initialPage={props.initialPage}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.onChange}
        containerClassName={styles.pagination}
        activeLinkClassName={styles.active}
        pageLinkClassName={styles.pageClassName}
        previousLinkClassName={styles.pageClassName + ` ${styles.prevNext}`}
        nextLinkClassName={styles.pageClassName + ` ${styles.prevNext}`}
        breakClassName={styles.pageClassName}
        disabledClassName={styles.disabledClassName}
      />
    </div>
  )
}

Paginate.propTypes = {
  currentPage: PropTypes.number,
  className: PropTypes.string,
  pageCount: PropTypes.number,
  onChange: PropTypes.func,
  initialPage: PropTypes.number,
}

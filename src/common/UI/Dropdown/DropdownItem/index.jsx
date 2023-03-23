import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { Divider } from 'common/UI/Divider'
import { ToogleContext } from 'common/UI/Dropdown/toggleDropdownContext'

import styles from './DropdownItem.module.scss'

export const DropdownItem = (props) => {
  const { setIsOpen } = useContext(ToogleContext)

  const {
    children,
    hasDivider = false,
    onClick,
    closeOnSelect,
    ...rest
  } = props

  const itemClass = classNames(styles.item, {
    [rest.className || '']: rest.className,
  })

  const handleOnClick = (...args) => {
    if (closeOnSelect) {
      setIsOpen(false)
    }
    onClick && onClick(...args)
  }

  return (
    <>
      {hasDivider && (
        <Divider className={styles.hasDivider} colorScheme="secondary" />
      )}
      <div
        onClick={handleOnClick}
        {...rest}
        className={itemClass}
        role="presentation"
      >
        {children}
      </div>
    </>
  )
}

DropdownItem.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  hasDivider: PropTypes.bool,
  closeOnSelect: PropTypes.bool,
}

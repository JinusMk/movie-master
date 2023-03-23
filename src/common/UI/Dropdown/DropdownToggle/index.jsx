import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { ToogleContext } from 'common/UI/Dropdown/toggleDropdownContext'

import styles from './DropdownToggle.module.scss'

export const DropdownToggle = (props) => {
  const { children, customOpenAction } = props
  const { setIsOpen } = useContext(ToogleContext)

  const toggleHandle = (e) => {
    e.stopPropagation()
    setIsOpen((prev) => !prev)
  }

  const toggleButtonClass = classNames(styles.toggleButton, {
    [props.className || '']: props.className,
  })

  return (
    <div
      role="button"
      tabIndex="0"
      data-testid={'toggle'}
      onKeyPress={toggleHandle}
      onClick={customOpenAction ? customOpenAction : toggleHandle}
      className={toggleButtonClass}
    >
      {children}
    </div>
  )
}

DropdownToggle.propTypes = {
  children: PropTypes.any,
  customOpenAction: PropTypes.func,
  className: PropTypes.string,
}

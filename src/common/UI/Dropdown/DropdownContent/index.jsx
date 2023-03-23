import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import { Icon, icons } from 'common/UI/Icon'
import { Text } from 'common/UI/Text'
import globalConstants from 'lib/config/globalConstants'
import { ToogleContext } from 'common/UI/Dropdown/toggleDropdownContext'

import styles from './DropdownContent.module.scss'

export const DropdownContent = (props) => {
  const {
    children,
    align = 'center',
    customOpen,
    label,
    onClose,
    hideClose,
    staticPosition,
    ...rest
  } = props
  const { isOpen, setIsOpen } = useContext(ToogleContext)

  const isOpenValue = customOpen ? customOpen : isOpen

  const wrapperClass = classNames(styles.wrapper, {
    [styles[align]]: align,
    [styles.static]: staticPosition,
    [rest.className || '']: rest.className,
  })

  const handleClose = () => {
    if (onClose) {
      onClose()
    } else {
      setIsOpen(false)
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpenValue && (
          <motion.div
            role="menu"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: globalConstants.animationDuration }}
            className={wrapperClass}
            key="anim1"
          >
            {label && (
              <Text as="div" className={styles.mobileTitle + ' visible-xs'}>
                {label}
              </Text>
            )}
            {!hideClose && (
              <Icon
                source={icons.xCircleLight}
                size="var(--p20)"
                onClick={handleClose}
                className={styles.closeIcon + ' visible-xs'}
              />
            )}
            {children}
          </motion.div>
        )}
        {isOpenValue && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ duration: 0.5 }}
            className={styles.overlay + ' visible-xs'}
            onClick={handleClose}
            key="anim2"
          />
        )}
      </AnimatePresence>
    </>
  )
}

DropdownContent.propTypes = {
  children: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  customOpen: PropTypes.bool,
  label: PropTypes.string,
  onClose: PropTypes.func,
  hideClose: PropTypes.bool,
  staticPosition: PropTypes.bool,
}

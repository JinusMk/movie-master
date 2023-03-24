import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import styles from './Image.module.scss'

export const Image = (props) => {
  const [imgLoadError, setImgLoadError] = useState(false)

  const imageLoadedClass = classNames(styles.image, {
    [props.className || '']: props.className,
  })

  const imageLoaded = (
    <div
      style={{ backgroundImage: `url(${props.url})` }}
      className={imageLoadedClass}
      data-testid="img"
      onError={() => setImgLoadError(true)}
    />
  )

  const imageFailed = (
    <div className={imageLoadedClass}>
      <img
        // src={icons.picture}
        alt={props.alt}
        className={styles.imageError}
        data-testid="img"
      />
    </div>
  )

  return !imgLoadError ? imageLoaded : imageFailed
}

Image.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
}

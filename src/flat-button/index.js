import React from 'react'

import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { trim, equals, not } = R
const FlatButton = ({
  onClick,
  hoverColor = 'light-gray',
  color = 'black-80',
  children,
  disabled = false,
  className,
  type,
  href
}) => {
  const colors = `hover-bg-${hoverColor} ${color}`
  const computedClassName = combine(
    trim(`
    ripple
    ${disabled ? 'black-30' : colors}
    dib
    f6
    flex items-center justify-around
    outline-0 border-block br1 pv2 ph3 bg-transparent bn ttu fw5`),
    className
  )

  return href ? (
    <a
      href={href}
      disabled={disabled}
      style={{ fontFamily: 'roboto' }}
      className={'link ' + computedClassName}
    >
      {children}
    </a>
  ) : (
    <button
      disabled={disabled}
      style={{ fontFamily: 'roboto' }}
      onClick={not(equals('file', type)) && onClick}
      className={computedClassName}
    >
      {children}
      {equals('file', type) && (
        <input
          type="file"
          onChange={onClick}
          className="absolute top-0 left-0 bottom-0 right-0 o-0"
        />
      )}
    </button>
  )
}

export default FlatButton

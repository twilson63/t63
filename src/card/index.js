import React from 'react'

import MdKbArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import MdKbArrowUp from 'react-icons/lib/md/keyboard-arrow-up'

import R from 'ramda'
const { map, prop, or, multiply } = R

const thirtyPercent = multiply(0.3)

const Card = props => {
  return (
    <div className="pv3 shadow-1 w-100 flex flex-column">{props.children}</div>
  )
}

Card.Header = ({
  title,
  subTitle,
  showExpandableButton,
  onClick,
  value = false
}) => {
  return (
    <div
      style={{ fontFamily: 'roboto' }}
      className="ph3 pb4 flex items-center justify-between"
    >
      <div className="">
        {title && <div className="fw5 f5 black-80">{title}</div>}
        {subTitle && <div className="mt2 fw3 f6 black-50">{subTitle}</div>}
      </div>
      {showExpandableButton &&
        (value ? (
          <MdKbArrowUp className="f3" onClick={onClick} />
        ) : (
          <MdKbArrowDown className="f3" onClick={onClick} />
        ))}
    </div>
  )
}

Card.Actions = ({ className, children }) => {
  return <div className="pl1 pt2 flex">{children}</div>
}

Card.Text = ({ value = true, children }) => {
  return (
    <div
      style={{ fontFamily: 'roboto' }}
      className="lh-copy ph3 pv3 f6 black-90"
    >
      {value && children}
    </div>
  )
}

const matches = v => {
  const result = prop(
    'matches',
    window.matchMedia(`(min-width: ${v.toString()}px)`)
  )
  return result
}

// must specify height to override
Card.Media = props => {
  const calcHeight = or(props.height, 300)

  return (
    <div
      className="flex flex-column"
      style={{
        height: `${calcHeight}px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${props.image})`
      }}
    >
      <div className="flex-auto" />
      <div
        style={{
          fontFamily: 'roboto',
          height: `${thirtyPercent(calcHeight)}px`
        }}
        className="bg-black-50 ph3 pt4"
      >
        <span className="f3 white-80 db">{props.title}</span>
        <span className="f5 mt1 white-50 db">{props.subtitle}</span>
      </div>
    </div>
  )
}

export default Card

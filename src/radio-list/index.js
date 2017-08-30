import React from 'react'
import R from 'ramda'
import MdRadioChecked from 'react-icons/lib/md/radio-button-checked'
import MdRadio from 'react-icons/lib/md/radio-button-unchecked'
import randomId from 'random-id'

const { map, isNil } = R

const RadioList = ({
  className,
  value,
  onChange,
  color,
  checkedColor,
  children
}) => {
  checkedColor = isNil(checkedColor) ? color : checkedColor
  const group = randomId()
  const createRadio = (value, onChange) => c => {
    const radioClassName = isNil(className) ? 'f3' : className
    return (
      <RadioList.Radio
        currentValue={value}
        onChange={onChange}
        group={group}
        value={c.props.value}
        radioClassName={radioClassName}
        checkedColor={checkedColor}
        color={color}
      >
        {c.props.children}
      </RadioList.Radio>
    )
  }

  return <div>{map(createRadio(value, onChange), children)}</div>
}

// RadioList.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   color: PropTypes.string,
//   checkedColor: PropTypes.string,
//   className: PropTypes.string
// }

const Radio = ({
  group,
  color,
  currentValue,
  checkedColor,
  radioClassName,
  value,
  onChange,
  children
}) => {
  const id = randomId()
  // `ml1 border-box ${color}`
  return (
    <div value={value} className="flex items-center">
      <input
        id={id}
        className="dn"
        type="radio"
        name={group}
        checked={currentValue === value}
        onChange={e => onChange(value)}
      />
      {currentValue === value ? (
        <MdRadioChecked
          className={[radioClassName, checkedColor, 'animated pulse'].join(' ')}
        />
      ) : (
        <MdRadio
          onClick={e => onChange(value)}
          className={[radioClassName, checkedColor].join(' ')}
        />
      )}
      <label htmlFor={id} className={['ml1', radioClassName, color].join(' ')}>
        {children}
      </label>
    </div>
  )
}

// Radio.propTypes = {
//   value: PropTypes.string.isRequired
// }

RadioList.Radio = Radio

export default RadioList

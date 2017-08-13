import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { map, equals, omit } = R

const Select = props => {
  const draw = (v) => c => {
    const className = combine(c.props.className, 
      `ba pa2 br2 ${equals(v, c.props.value) && props.selectedClass }`)
    return <Select.Option key={c.props.value} {...c.props} 
      className={className} 
      onClick={e => props.onChange(c.props.value)}
    />
  }
  const selectProps = omit(['value', 'onChange'], props)
  const className = combine(selectProps.className, 'flex items-center justify-between h3')
  return (
    <div {...selectProps} className={className}>
      {map(draw(props.value), props.children)}
    </div>
  )
}

Select.Option = props => {
  return (
    <div {...props}>{props.children}</div>
  )
}

export default Select
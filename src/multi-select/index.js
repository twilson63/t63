import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { map, equals, contains, cond, T, append, reject } = R

const idempotent = (v, values) =>
  cond([[contains(v), reject(equals(v))], [T, append(v)]])(values)

const MultiSelect = props => {
  const draw = v => c => {
    const className = combine(
      c.props.className,
      `ba pa2 br2 ${contains(c.props.value, v) && props.selectedClass}`
    )
    return (
      <MultiSelect.Option
        {...c.props}
        className={className}
        onClick={e => {
          props.onChange(idempotent(c.props.value, v))
        }}
      />
    )
  }
  return (
    <div className="flex items-center justify-between h3">
      {map(draw(props.value), props.children)}
    </div>
  )
}

MultiSelect.Option = props => {
  return <div {...props}>{props.children}</div>
}

export default MultiSelect

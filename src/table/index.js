import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { propOr } = R

const Table = props => {
  return (
    <div
      aria-role={props['aria-role'] || 'table'}
      className={combine('flex flex-column', props.className)}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

Table.Row = props => {
  if (props.hoverColor) {
    props.className =
      propOr('', 'className', props) + ' pointer hover-bg-' + props.hoverColor
  }
  return (
    <div
      aria-role={props['aria-role'] || 'row'}
      onClick={props.onClick}
      className={combine(
        'flex bb justify-around items-center',
        props.className,
        'b--silver'
      )}
      style={props.style}
    >
      {props.children}
    </div>
  )
}

Table.Cell = props => {
  return (
    <span
      aria-role={props['aria-role'] || 'cell'}
      onClick={props.onClick}
      style={props.style}
      className={props.className}
    >
      {props.children}
    </span>
  )
}

export default Table

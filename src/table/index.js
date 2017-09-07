import React from 'react'
import combine from '../lib/combine-string-lists'

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
  return (
    <div
      aria-role={props['aria-role'] || 'row'}
      className={combine(
        'flex h2 bb b--silver justify-around items-center',
        props.className
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
      style={props.style}
      className={props.className}
    >
      {props.children}
    </span>
  )
}

export default Table

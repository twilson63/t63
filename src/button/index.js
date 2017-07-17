import React from 'react'
import combine from '../lib/combine-string-lists'
import R from 'ramda'

export default props => {
  const className = combine(
     "f6 link dim br1 ph3 pv2 mb2 dib white bg-black",
     props.className)
  // className={className}
  const newProps = R.merge(props, { className: className })
  return (
    <button {...newProps}>{props.children}</button>
  )
}

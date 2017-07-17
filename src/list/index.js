import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

export default props => {
  const className = combine(
     "list pl0 mt0 measure center",
     props.className)
  const newProps = R.merge(props, { className: className })

  return (
    <ul {...newProps}>{props.children}</ul>
  )
}

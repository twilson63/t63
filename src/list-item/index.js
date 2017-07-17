import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

const ListItem = props => {
  const className = combine(
     "flex items-center lh-copy pa3 ph0-l bb b--black-10",
     props.className)
  const newProps = R.merge(R.omit(['left', 'right'], props), { className: className })

  return (
    <li {...newProps}>
      {props.left && props.left}
      <div className="pl3 flex-auto">
        {props.children}
      </div>
      {props.right && <div>{props.right}</div>}
    </li>
  )
}

export default ListItem

import React from 'react'

const IconButton = props => {
  return (
    <button onClick={props.onClick} className="bg-transparent bn f3">
      {props.children}
    </button>
  )
}

export default IconButton

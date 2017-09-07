import React from 'react'

const AppBar = props => {
  const className = `h3 flex flex-row items-center justify-center bg-${props.bgColor ||
    'light-blue'} ${props.color || 'white'}`
  return <div className={className}>{props.children}</div>
}

AppBar.Left = props => {
  return <div className="ml3">{props.children}</div>
}

AppBar.Right = props => {
  return <div className="mr2 f3">{props.children}</div>
}

AppBar.Title = props => {
  return <div className="flex-auto pl2 fw4 f3">{props.children}</div>
}

export default AppBar

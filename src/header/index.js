import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { omit } = R

const Header = props => {
  const className = combine(
    'flex items-center justify-between h3',
    props.className
  )
  const headerProps = omit(['className'], props)

  return (
    <header className={className} {...headerProps}>
      {props.children}
    </header>
  )
}

Header.Center = props => <div>{props.children}</div>

Header.Left = props => <div className="ml2 w2">{props.children}</div>

Header.Right = props => <div className="mr2 w2">{props.children}</div>

export default Header

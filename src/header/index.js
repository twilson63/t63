import React from 'react'
import R from 'ramda'
import combine from '../lib/combine-string-lists'

const { find, propEq, omit } = R

const Header = props => {
  const className = combine(
    'flex items-center justify-between h3',
    props.className
  )
  const headerProps = omit(['className'], props)

  return (
    <header className={className} {...headerProps}>
      {find(propEq('type', Header.Left), props.children) || <Header.Left />}
      {props.children.length
        ? find(propEq('type', Header.Center), props.children)
        : props.children || <Header.Center />}
      {find(propEq('type', Header.Right), props.children) || <Header.Right />}
    </header>
  )
}

Header.Center = props => <div>{props.children}</div>

Header.Left = props => <div className="ml2 w2">{props.children}</div>

Header.Right = props => <div className="mr2 w2">{props.children}</div>

export default Header

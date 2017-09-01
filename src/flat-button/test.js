import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import FlatButton from './'

test('<FlatButton />', t => {
  const wrapper = shallow(<FlatButton>Foo</FlatButton>)
  t.equal(wrapper.text(), 'Foo')
  t.end()
})

test('<FlatButton onClick />', t => {
  let beep = 'beep'
  const wrapper = shallow(
    <FlatButton onClick={e => (beep = 'boop')}>Foo</FlatButton>
  )
  wrapper.simulate('click')
  t.equal(beep, 'boop')
  t.end()
})

test('<FlatButton className />', t => {
  const className = 'green bg-washed-green b--green'
  const wrapper = shallow(<FlatButton className={className}>Foo</FlatButton>)

  t.equal(
    'ripple\n  hover-bg-light-gray black-80\n dib\n f6\n flex items-center justify-around\n outline-0 border-block br1 pv2 ph3 bg-transparent bn ttu fw5 green bg-washed-green b--green',
    wrapper.props().className
  )
  t.end()
})

import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Button from './'

test('<Button />', t => {
  const wrapper = shallow(<Button>Foo</Button>)
  t.equal(wrapper.text(), 'Foo')
  t.end()
})

test('<Button onClick />', t => {
  let beep = 'beep'
  const wrapper = shallow(<Button onClick={e => beep = 'boop'}>Foo</Button>)
  wrapper.simulate('click')
  t.equal(beep, 'boop')
  t.end()

})


test('<Button className />', t => {
  const className = 'green bg-washed-green b--green'
  const wrapper = shallow(<Button className={className}>Foo</Button>)

  t.equal(
    'f6 link dim br1 ph3 pv2 mb2 dib white bg-black green bg-washed-green b--green',
    wrapper.props().className
  )
  t.end()

})

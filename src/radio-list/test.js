import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import RadioList from './'
const Radio = RadioList.Radio

test('radiolist should have 2 radio components', t => {
  const wrapper = shallow(
    <RadioList>
      <Radio value="on">On</Radio>
      <Radio value="off">Off</Radio>
    </RadioList>
  )

  t.equals(wrapper.children().length, 2, 'expect text to render properly')
  t.end()
})

test('radio component should have text "On"', t => {
  const wrapper = shallow(<Radio value="foo">Bar</Radio>)
  console.log('wrapper', wrapper.text())
  t.equals(
    wrapper.text(),
    '<MdRadioButtonUnchecked />Bar',
    'expect text to render properly'
  )
  t.end()
})

test('radio component should have text "On"', t => {
  const wrapper = shallow(<Radio value="foo">Bar</Radio>)
  t.equals(wrapper.props().value, 'foo', 'expect text to render properly')
  t.end()
})

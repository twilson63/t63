import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import ListItem from './'

test('<ListItem />', t => {
  const wrapper = shallow(<ListItem>Beep</ListItem>)
  t.equals(wrapper.text(), 'Beep')
  t.end()
})


test('<ListItem className />', t => {
  const wrapper = shallow(<ListItem className="green">Beep</ListItem>)
  t.equals(wrapper.props().className, 'flex items-center lh-copy pa3 ph0-l bb b--black-10 green')
  t.end()
})

test('<ListItem left />', t => {
  const img = <img alt="bill murray" src="http://www.fillmurray.com/300/300" />
  const wrapper = shallow(<ListItem left={img}>Beep</ListItem>)
  t.ok(wrapper.contains(img))
  t.end()
})


test('<ListItem right />', t => {
  const img = <img alt="bill murray" src="http://www.fillmurray.com/300/300" />
  const button = <button>Click</button>
  const wrapper = shallow(<ListItem right={button}>Beep</ListItem>)
  t.ok(wrapper.contains(button))
  t.ok(!wrapper.contains(img))
  t.end()
})

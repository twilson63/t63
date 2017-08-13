import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Header from './'

const { Center, Left, Right } = Header

test('<Header />', t => {
  const wrapper = shallow(<Header><Center><h1>Title</h1></Center></Header>)
  t.ok(wrapper.contains(<h1>Title</h1>))
  t.end()
})

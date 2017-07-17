import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import TextField from './'

test('<TextField />', t => {
  const wrapper = shallow(<TextField name="Name" label={{className: 'green'}} />)
  t.equals(wrapper.find('label').props().className, 'f6 b db mb2 green')
  t.end()
})

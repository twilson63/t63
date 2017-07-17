import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import TextField from './'

test('<TextField />', t => {
  const wrapper = shallow(
    <TextField name="Name" label={{ className: 'green' }} />
  )
  t.equals(wrapper.find('label').props().className, 'f6 b db mb2 green')
  t.end()
})

test('<TextField> controlled component', t => {
  let name = ''
  const wrapper = shallow(
    <TextField
      name="Name"
      value={name}
      onChange={e => (name = e.target.value)}
    />
  )
  wrapper.find('input').simulate('change', { target: { value: 'Beep' } })
  t.equals(name, 'Beep')
  t.end()
})

test('<TextField> optional', t => {
  const wrapper = shallow(<TextField name="Name" optional={true} />)
  t.equals(wrapper.find('label').find('span').text(), '(optional)')
  t.end()
})

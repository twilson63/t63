import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import TextArea from './'

test('<TextArea />', t => {
  const wrapper = shallow(
    <TextArea name="Name" label={{ className: 'green' }} />
  )
  t.equals(wrapper.find('label').props().className, 'f6 b db mb2 green')
  t.end()
})

test('<TextArea> controlled component', t => {
  let name = ''
  const wrapper = shallow(
    <TextArea
      name="Name"
      value={name}
      onChange={e => (name = e.target.value)}
    />
  )
  wrapper.find('textarea').simulate('change', { target: { value: 'Beep' } })
  t.equals(name, 'Beep')
  t.end()
})

test('<TextArea> optional', t => {
  const wrapper = shallow(<TextArea name="Name" optional={true} />)
  t.equals(wrapper.find('label').find('span').text(), '(optional)')
  t.end()
})

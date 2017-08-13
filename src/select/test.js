import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Select from './'

test('<Select />', t => {
  const wrapper = shallow(
    <Select>
      <Select.Option value="1">One</Select.Option>
      <Select.Option value="2">Two</Select.Option>
    </Select>)
  t.ok(wrapper.contains("One"))
  t.end()
})



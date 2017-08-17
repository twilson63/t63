import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import MultiSelect from './'

test('<Select />', t => {
  const wrapper = shallow(
    <MultiSelect value={[]}>
      <MultiSelect.Option value="1">One</MultiSelect.Option>
      <MultiSelect.Option value="2">Two</MultiSelect.Option>
    </MultiSelect>
  )
  t.ok(wrapper.contains('One'))
  t.end()
})

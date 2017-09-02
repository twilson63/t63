import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Card from './'
const { Text } = Card

test('<Card />', t => {
  const wrapper = shallow(
    <Card>
      <Text>Hello World</Text>
    </Card>
  )
  t.ok(wrapper.contains(<Text>Hello World</Text>))
  t.end()
})

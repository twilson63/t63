import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import List from './'

test('<List />', t => {
  const wrapper = shallow(<List><li>1</li></List>)
  t.ok(wrapper.contains(<li>1</li>))
  t.end()
})

test('<List className />', t => {
  const wrapper = shallow(<List className="green"><li>1</li></List>)
  t.equals(wrapper.props().className, 'list pl0 mt0 measure center green')
  t.end()

})

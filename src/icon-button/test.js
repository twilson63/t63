import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import IconButton from './'
import MdMenu from 'react-icons/lib/md/menu'

test('<IconButton />', t => {
  const wrapper = shallow(
    <IconButton>
      <MdMenu />
    </IconButton>
  )
  t.ok(wrapper.contains(<MdMenu />))
  t.end()
})

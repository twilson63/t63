import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import AppBar from './'
import IconButton from '../icon-button'
const { Left, Title, Right } = AppBar
import FlatButton from '../flat-button'
import MdMenu from 'react-icons/lib/md/menu'
import MdMoreVert from 'react-icons/lib/md/more-vert'

test('<Table />', t => {
  const wrapper = shallow(
    <AppBar>
      <Left>
        <IconButton>
          <MdMenu className="white f3" />
        </IconButton>
      </Left>
      <Title>AppBar Simple</Title>
      <Right>
        <FlatButton>
          <MdMoreVert className="white f3" />
        </FlatButton>
      </Right>
    </AppBar>
  )
  t.ok(
    wrapper.contains(
      <Left>
        <IconButton>
          <MdMenu className="white f3" />
        </IconButton>
      </Left>
    )
  )
  t.end()
})

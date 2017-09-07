import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'
import Table from './'
const { Row, Cell } = Table

test('<Table />', t => {
  const wrapper = shallow(
    <Table>
      <Row>
        <Cell>Hello World</Cell>
      </Row>
    </Table>
  )
  t.ok(
    wrapper.contains(
      <Row>
        <Cell>Hello World</Cell>
      </Row>
    )
  )
  t.end()
})

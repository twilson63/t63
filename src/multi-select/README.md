# MultiSelect

MultiSelect takes a set of values as options and provides a multi select capability for that set of values.

## Usage

See Demo [https://twilson63.sh/lO6](https://twilson63.sh/lO6)

``` js
import React from 'react'
import { withReducer } from 'recompose'
import R from 'ramda'
import { Header } from 't63'
import MultiSelect from './multi-select'
import moment from 'moment'

const { Option } = MultiSelect
const { Center, Left, Right } = Header

const { cond, T, always, propEq, prop, map} = R

const enhance = withReducer('data', 'dispatch', (state=[], action) => {
  return cond([
    [propEq('type', 'set'), prop('payload')],
    [T, always(state)]
  ])(action)
})

const App = props => {
  const option = m =>
    <Option key={m} className="w4 tc ttu" value={m}>{m}</Option>

  return (
    <div>
      <Header className="bg-purple white">
        <Left><i className="f3 ion-chevron-left" /></Left>
        <Center><h1>t63</h1></Center>
        <Right><i className="f3 ion-chevron-right" /></Right>
      </Header>
      <hr />
      <div className="pa4">
      <h1>Select Buttons</h1>
      <MultiSelect value={props.data} selectedClass="bg-black-40 white" onChange={v => props.dispatch({type: 'set', payload: v})}>
        {map(option, moment.months('MMM'))}
      </MultiSelect>
      </div>
    </div>
  )
}

export default enhance(App)
```

## Links

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

---

### Inspired by

* https://tachyons.io

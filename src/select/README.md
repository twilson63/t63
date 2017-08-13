# Select Component

This component is not like the html select drop down, but more like 
a single row component of select able buttons.

It can be a simple yes/no or a list of months or years.

## Usage 

```js
import Select from 't63'

const { Option } = Select

<Select value={props.data} selectedClass="bg-black-40 white" onChange={v => props.dispatch({type: 'set', payload: v})}>
  <Option className="w4 tc ttu" value="1">Yes</Option>
  <Option className="w4 tc ttu" value="2">Maybe</Option>
  <Option className="w4 tc ttu" value="0">No</Option>
</Select>
```

## API

The Select component has three props that need to be set

- value // the value of the data
- onChange // when a option is clicked 
- selectedClass // how the selected option will be rendered

Then the children should be Select.Option Components

## Links

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

---

### Inspired by

* https://tachyons.io
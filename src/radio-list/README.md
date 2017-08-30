# RadioList Component

A radio list component is a material design inspired style, using the react-icons material design svg files. The component is a controlled component which means that all you have to implement is a value prop and a onChanged prop. When the onChange method is invoked by clicking the label or button of the radio list, it will send the value of the particular radio button item to the parent.  The value property of the RadioList component will set the current value item.

## Usage

```
import { RadioList } from 't63'
const { Radio } = RadioList

const Example = props => {
  return (
    <div>
      <label>Enabled</label>
      <RadioList value={props.enabled} onChange={value =>      props.setEnabled(value)}>
        <Radio value="on">On</Radio>
        <Radio value="off">Off</Radio>
      </RadioList>
    </div>
  )
}

export default Example
```

---

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

# Button component

The button component is a simple react button component that has the following properties:

* className
* onClick

## Example

```
import React from 'react'
import { Button } from 't63'

const MyComponent = () => (
  <div>
    <h1>Button Example</h1>
    <Button className="green bg-washed-green" onClick={e => alert('clicked')}>Click Me</Button>
)

export default MyComponent

```

## Links

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

---

### Inspired by

* https://tachyons.io

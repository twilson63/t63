# List

This is a simple list component that basically injects a common but overridable set of tachyons to the unordered list component.

```
<ul className="list pl0 mt0 measure center">
  {props.children}
</ul>
```

You can use this to quickly put together nice looking lists without having to set up some basic styles.

## Example

```
import 'tachyons'
import { List, ListItem } from 't63'

const Colors = props => (
  <List>
    {
      map(
        color => <ListItem key={color}>{color}</ListItem>,
        ['red', 'green', 'blue']
      )
    }
  </List>
)
```


## Links

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

---

### Inspired by

* https://tachyons.io

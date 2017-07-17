# ListItem

The ListItem component is a child component for the List component. This component is flexible enough to be a simple list with a description and a click handler, or it could have additional components on the left and/or right side of the description. You can add elements to the left or right side of the conditional by using the `left` or `right` props.

## Basic Example

```
<h2>Colors</h2>
<List>
  <ListItem>Red</ListItem>
  <ListItem>Blue</ListItem>
  <ListItem>Yellow</ListItem>
</List>
```

## Left Image Example

```
<h2>Stooges</h2>
<List>
  <ListItem left={<img src="img/larry.png" />}>Larry</ListItem>
  <ListItem left={<img src="img/curley.png" />}>Curley</ListItem>
  <ListItem left={<img src="img/moe.png" />}>Moe</ListItem>
</List>
```

## Right Image Example

```
<h2>Stooges</h2>
<List>
  <ListItem right={<img src="img/larry.png" />}>Larry</ListItem>
  <ListItem right={<img src="img/curley.png" />}>Curley</ListItem>
  <ListItem right={<img src="img/moe.png" />}>Moe</ListItem>
</List>
```

You can also set both the left and right props at the same time, these
props need to be React Component.


## Links

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

---

### Inspired by

* https://tachyons.io

# TextField

A textfield component consists of a Label, Input and with an optional div to display instructions.

## Usage

```
  <TextField
    name="First Name"
    value={props.fname}
    onChange={props.handleChgFName} />
  <TextField
    name="Last Name"
    value={props.lname}
    onChange={props.handleChgLName} />

```

## Design and Style

> t63 uses tachyons for style, but you can use regular inline css or any css class based framework.

Changing the look and feel of the component is easy, you can supply props for each partial component in the TextField component. For example, if you wanted to make the label's color green, you would do the following:

```
<TextField
  name="Widget"
  label={{className: 'green'}}
/>
```

By suppplying the label property, you are able to make adjustments to the label component via its standard properties.

You can do the same for `input` and `help` each of these optional properties can be set to modify the props of the input and help component.

```
<TextField
  name="Widget"
  input={{className: 'bg-yellow', placeholder: 'Enter Widget Name'}}
  help={{className: 'yellow', text: 'Help Text Here'}}
/>
```



## Links

* [code](index.js)
* [test](test.js)

---

[README](../../README.md)

---

### Inspired by

* https://tachyons.io

# t63

t63 is a suite of basic react components, these components are based off of the
components defined with tachyons, you do not have to use tachyons to use these
components, but they will work really well with tachyons.

## Install

```
npm install t63
```

## Using with tachyons

In order to use these components with tachyons, you simply have to include the
tachyons css module. Either from a cdn or using a loader.

### Using Webpack or Create React App

```
npm install tachyons
```

```
import 'tachyons'
```

### Using cdn

Add this element in the head of your html document

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css" />
```

## Example

```
import { Button } from 't63'

const () => (
  <div>
    <h1>Button Example</h1>
    <Button>I am a button</Button>
  </div>
)
```

## components

* [Button](src/button/README.md)
* [List](src/list/README.md)
* [ListItem](src/list-item/README.md)
* [TextField](src/text-field/README.md)
* TextArea
* Header
* Yes/No Button
* SelectList

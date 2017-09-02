# Card Component

This component is inspired by Material Design Cards

The card component is a container component that has several
optional child components.

* Header
* Text
* Media
* Actions

## Examples

Simple Example

``` js
import Card from 't63'
const { Header, Text } = Card

<Card>
  <Header title="Without Avatar" subtitle="A simple description" />
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
  </Text>
</Card>
```

Media Example

``` js
import Card from 't63'

const { Media } = Card

<Card>
  <Media
    title="Overlay Title"
    subtitle="subtitle"
    image="https://lorempixel.com/400/200/" />
</Card>
```

Toggle Example

``` js
import Toggle from 'react-toggled'
import Card from 't63'

const { Header, Text } = Card

<Toggle>
  {({on, getTogglerProps }) => (
    <Card>
      <Header
        title="Toggle Example"
        showExpandableButton={true}
        value={on}
        {...getTogglerProps()}
      />
      <Text value={on}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </Text>
    </Card>
  )}
</Toggle>
```

# Header

The header component, makes it easy to create a basic header with a title in the center and a left button area and a right button area, but the left and right button areas are optional. The header is based on flex box and will responsively space components, but there may be a need to tweak, which you can

## Example

```
import { Link } from 'react-router-dom'
import Header from 't63'
const {Left, Center, Right} = Header

<Header className="bg-purple white">
  <Left><Link to="/"><i className="ion-chevron-left" /></Link></Left>
  <Center><h1 className="avenir ttu tracked">Title</h1></Center>
  <Right><Link to="/widgets"><i className="ion-gears" /></Link></Right>
</Header>
```

Using the Left, Center, and Right Header Components will manage the positioning of the header for you.


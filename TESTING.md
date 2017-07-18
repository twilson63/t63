# Testing

Testing component libraries are critical to creating quality sustainable component libraries. For this project we use the following testing modules to make testing easy and manageable.

## Tape - https://github.com/substack/tape

Tape is a very straight forward testing module, that produces tap output, it comes built in with assertion methods and the surface area of the library is very small and easy to remember.

``` js
import test from 'tape'

test('Ok', t => {
  t.equals(true, true, 'True equals True')
  t.ok(true, 'Is true')
  t.deepEquals({ deep: 'object'}, { deep: 'object'})
  t.end()
})
```

Basically, you have a test function that takes a description an a function handler, the function handler gets invoked by tape passing in
an assert object, that has the following methods:

* plan
* equals
* ok
* deepEquals
* end

plan - If you know how many assertions you are going to make then using plan can be easier than having to call end when you are done.

equals - Compares two values and if they are not equal then the test fails.

ok - Compares the first argument to be truthy, if it is not then the test fails.

deepEquals - Compares two complex data structures (Array or Object) and if both are not equal to each other the test will fail.

end - is the manual way to trigger that the test has ended.

To learn more about tape, read the docs - https://github.com/substack/tape

## Enzyme

Enzyme is used to do shallow testing of React Components without having to run the components in the browser, this offers significant speed to your test suite. Enzyme gives you a small surface area of helper functions to manipulate your component and then assert on if the component behaved as it should have to that scenario. Here is and example of testing a controlled component.

``` js
import React from 'react'
import { shallow } from 'enzyme'

test('<TextField> controlled component', t => {
  let name = ''
  const wrapper = shallow(
    <TextField
      name="Name"
      value={name}
      onChange={e => (name = e.target.value)}
    />
  )
  wrapper.find('input').simulate('change', { target: { value: 'Beep' } })
  t.equals(name, 'Beep')
  t.end()
})
```

Using the enzyme shallow feature you can shallow render a component and the `find` function to locate elements within the component and the `simulate` function to trigger simulated dom events on the component. In this example, we are finding the input element and simulating a change event, then we perform an assertion on the result of that change event.

This type of unit testing can give you a good bit of confidence that your component is performing as expected.

 

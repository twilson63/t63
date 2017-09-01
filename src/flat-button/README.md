# FlatButton

The flatbutton is a material design button that can be used various ways. You can use them as a simple button that can click and perform routine click tasks, or it can be a link by supplying an href, or a file upload button, by setting the type to `file`

## Examples

(See https://blue-inch.glitch.me/)

## Usage

## props

Name | Type | Description
----------|----------|--------------------
onClick   | Function | Handles click events for buttons
hoverColor | tachyons color | handles the background color of the button when hovered
color | tachyons color | handles the foreground color for the button
disabled | boolean | disables the button
className | string | class names to override look and feel
type | string | set to file, if you want the button to be an file input
href | string | set argument if you want the button to behave like a link button

## Appendix

If you want to take advantage of the ripple animation, I recommend including this
module in your project:

* css-ripple-effect

```
import 'css-ripple-effect/dist/ripple.min.css'
```

It is a pure css implementation of the ripple animation

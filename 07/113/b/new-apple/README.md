# New Apple

With a partner, discuss the layout provided below (screenshot are a modified version of the smallest viewport layout on the [Apple Canada Homepage](https://www.apple.com/ca/)) and consider what elements will be required to create the content.

Recreate the layout below using HTML and CSS. **NOTE**: A few of the Apple source images in the folder are slightly different than what's shown below, this is for an upcoming example. Simply create the closest approximation.

## Tips

To start, you may let the logo, menu-button, search-input and menu stack vertically (so no need to put the logo and button beside each other in the same row horizontally).

For the font, attach and apply `Roboto` ([Google Font can be found here](https://fonts.google.com/specimen/Roboto)) in place of Apple's proprietary `SF Pro Display` shown in the screenshots.

To create the search input component, use the following HTML:
```html
<input type="search">
```

One way to add the search magifying glass (`search.svg`) is to use `background-image`. Ensure that the text that's being searched will not overlap the magnifying glass by using `padding`.

# Layout Screenshots

There are _three_ screenshots below, **please review all three before starting.**

The layout with the menu open:

![Apple's Mobile Layout](img/sample-layout-open-menu.png?raw=true "Apple's Mobile Layout")

When the menu is closed, the layout will look like this:

![Apple's Mobile w/ Closed Menu](img/sample-layout.png?raw=true "Apple's Mobile w/ Closed Menu")

This is the menu in isolation (same as in the first image):

![The Menu](img/sample-layout-menu.png?raw=true "The Menu")
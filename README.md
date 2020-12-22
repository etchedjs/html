# @etchedjs/html

[![](https://raw.githubusercontent.com/Lcfvs/library-peer/main/badge.svg)](https://github.com/Lcfvs/library-peer#readme)

A utility to write some HTML elements, based on [`@etchedjs/dom`](../dom).


## Install

`npm i @etchedjs/dom @etchedjs/html`


## Examples

### Basics

```js
import html, { fill, fragment, serialize } from '@etchedjs/html'
import document from '@etchedjs/dom/document.js'

const paragraph = html.p({
  id: 'greetings',
  children: {
    greetings: 'Hello ',
    set user (value) {}
  },
  dataset: {
    set uuid (value) {}
  }
})

const user = html.strong({
  class: 'user',
  children: {
    set name (value) {}
  }
})

const source = serialize(fragment(document, fill(paragraph, {
  class: 'paragraph',
  children: {
    user: fill(user, {
      name: 'user'
    })
  },
  dataset: {
    uuid: '123'
  }
})))
```

Source

```html
<p class="paragraph" id="greetings" data-uuid="123">Hello <strong class="user">user</strong></p>
```

### Deal with unknown number of children

```js
import html, { fill, fragment, serialize } from '@etchedjs/html'
import document from '@etchedjs/dom/document.js'

const paragraph = html.p({
  children: {
    set contents (value) {}
  }
})

const source = serialize(fragment(document, fill(paragraph, {
  children: {
    contents: ['a, ', 'b, ', 'c']
  }
})))
```

Source

```html
<p>a, b, c</p>
```

### Pick some values from an array

Here, the children ignores the first value.

```js
import html, { fill, fragment, serialize } from '@etchedjs/html'
import document from '@etchedjs/dom/document.js'

const paragraph = html.p({
  children: {
    set [1] (value) {},
    set [2] (value) {}
  }
})

const source = serialize(fragment(document, fill(paragraph, {
  children: ['a, ', 'b, ', 'c']
})))
```

Source

```html
<p>b, c</p>
```


## Exports

### Elements (`default`)

A model containing a method for each HTML element, returning the etched model for that element.


### Models

#### closed

A model for any closed HTML elements, etching `element`.


#### container

A model for any container HTML elements, etching `element`.


#### element

A model that represent an HTML element, etching [`dom.element`](../dom#element).


### Methods

#### define

```js
define(target, tag)
```

Returns function that returns an element based on the provided target (`closed` or `container`) and a tag name

It can be used to create some autonomous custom elements.


#### fill

See [`dom.fill`](../dom#fill)


#### fragment

See [`dom.fragment`](../dom#fragment)


#### serialize

See [`dom.serialize`](../dom#serialize)

Additionally, if the `fragment.firstElementChild` is an `<html>` element, it prefixes the content by a `<!doctype html>`.


## Licence

MIT

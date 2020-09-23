# Dialog

```js script
export default {
  title: 'Elements/Dialog/Intro',
};
```

## Description

`fcarrascosa-dialog` is a component which allows you to put almost any component in a way that a modal window will appear.

## Usage

### Installation

In your project run

```bash
npm install @fcarrascosa/dialog -S
```

```js
import { FcarrascosaDialog } from '@fcarrascosa/dialog';

//or

import '@fcarrascosa/dialog/fcarrascosa-dialog.js';
```

### Using the component

#### Slots

There are two named slots `trigger` and `content`.

- `trigger` is where the actionable element should be.
- `content` is where the element you want to behave as dialog should be.
  So an example of usage for this element should be:

#### Code example

```html
<fcarrascosa-dialog>
  <button slot="trigger">Click me to open a dialog!</button>
  <div slot="content">
    <p>Hey! I am the dialog that should appear!</p>
  </div>
</fcarrascosa-dialog>
```

## Features

- Show the content when the trigger element is clicked.
- Hide the content when a click is performed outside the content.
- Hide the content when Escape key is pressed.

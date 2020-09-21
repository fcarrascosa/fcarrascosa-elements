# elements/dialog

```js script
import { html, withKnobs, boolean } from '@open-wc/demoing-storybook';
import '../index.js';

export default {
  title: 'Elements/Dialog',
  decorators: [withKnobs],
};
```

```js story
export const main = () => {
  const open = boolean('Open', false);

  return html`
    <fcarrascosa-dialog ?open=${open}>
      <button slot="trigger">Click me to open a dialog</button>
      <div slot="content">
        <header>
          <h2>Hey! I'm a Dialog</h2>
        </header>
        <div class="body">
          <p>You can put pretty much whatever you want inside me.</p>
          <p>To make me dissapear, click outside me or press Esc key.</p>
        </div>
        <footer>
          <small>Made with <3 by Fernando Carrascosa</small>
        </footer>
      </div>
    </fcarrascosa-dialog>
  `;
};
```

## Description

A simple dialog element

```js story
export const opened = () => {
  const open = boolean('Open', true);

  return html`
    <fcarrascosa-dialog ?open=${open}>
      <button slot="trigger">Click me to open a dialog</button>
      <div slot="content">
        <header>
          <h2>Hey! I'm a Dialog</h2>
        </header>
        <div class="body">
          <p>You can put pretty much whatever you want inside me.</p>
          <p>To make me dissapear, click outside me or press Esc key.</p>
        </div>
        <footer>
          <small>Made with <3 by Fernando Carrascosa</small>
        </footer>
      </div>
    </fcarrascosa-dialog>
  `;
};
```

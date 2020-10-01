# elements/dialog

```js script
import { html, withKnobs, boolean } from '@open-wc/demoing-storybook';
import '../fcarrascosa-dialog.js';

export default {
  title: 'Elements/Dialog',
  decorators: [withKnobs],
};
```

## Default

```js story
export const main = () => {
  const open = boolean('Open', false);

  return html`
    Click
    <fcarrascosa-dialog ?open=${open}>
      <button slot="trigger">this button</button>
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
    to open a dialog
  `;
};
```

## With close button

```js story
export const withCloseEvent = () => {
  return html`
    Click
    <fcarrascosa-dialog>
      <button slot="trigger">this button</button>
      <div slot="content">
        <header>
          <h2>Hey! I'm a Dialog</h2>
        </header>
        <div class="body">
          <p>You can put pretty much whatever you want inside me.</p>
          <p>To make me dissapear, click outside me or press Esc key.</p>
          <p>
            You can also click
            <button
              @click="${e => {
                e.path[0].dispatchEvent(
                  new CustomEvent('fc-dialog-close', {
                    composed: true,
                    bubbles: true,
                  })
                );
              }}"
            >
              HERE
            </button>
            to close me
          </p>
        </div>
        <footer>
          <small>Made with <3 by Fernando Carrascosa</small>
        </footer>
      </div>
    </fcarrascosa-dialog>
    to open a dialog
  `;
};
```

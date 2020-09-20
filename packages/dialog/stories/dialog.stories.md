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
      <button slot="trigger">HOLA</button>
      <div slot="content">PENE DOBLADO</div>
    </fcarrascosa-dialog>
  `;
};
```

## Description

A simple dialog element

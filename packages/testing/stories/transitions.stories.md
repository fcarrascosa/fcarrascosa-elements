# Transitions

```js script
export default {
  title: 'Utils/Testing/Transitions',
};
```

This is a set of testing helpers to make transitions easier to test. Some browsers don't fire the transitionEnd event when they run in headless mode, this util intends to help the developer to test propperly on that case.

**NOTE:** Some refactoring needs to be done in this package. `getElementChildNodes()` needs to find a better place to be set.

## Exported functions

### `getElementChildNodes(<HTMLElement>: element): Array<HTMLElement>`

```js
import { getElementChildNodes } from '@fcarrascosa/test';
```

Returns an array with both, the `lightDom` and `shadowDom` children of an element.

| Accepts                 | Returns             |
| ----------------------- | ------------------- |
| <HTMLElement\>: element | Array<HTMLElement\> |

### `getElementTransitionProps(<HTMLElement>: element): <Object>`

```js
import { getElementTransitionProps } from '@fcarrascosa/test';
```

Returns an `Object` with an element's `ComputedCSS` transition properties.

| Accepts                 | Returns   |
| ----------------------- | --------- |
| <HTMLElement\>: element | <Object\> |

### `getElementAndChildrenTransitionProps(<HTMLElement>: element): Array<Object>`

```js
import { getElementAndChildrenTransitionProps } from '@fcarrascosa/test';
```

Returns an `Array` object with an element and its children's `ComputedCSS` transition properties.

| Accepts                 | Returns        |
| ----------------------- | -------------- |
| <HTMLElement\>: element | Array<Object\> |

### `parseTransitionTime(<String>: time): <Number>`

```js
import { parseTransitionTime } from '@fcarrascosa/test';
```

Gets a `second` or `millisecond` string and converts it to the value in seconds as a number.

| Accepts         | Returns   |
| --------------- | --------- |
| <String\>: time | <Number\> |

### `waitForTransitionEnd(<HTMLElement> element, <Boolean> dispatchEvents): <Promise>`

```js
import { waitForTransitionEnd } from '@fcarrascosa/test';
```

Returns a promise that resolves when the highest combination between `transitionDuration` and `transitionDelay` of an element and its`lightDom` and `shadowDom` children.

If `dispatchEvents` is set to `true`, `transitionEnd` events are dispatched for each transitioned property.

| Accepts                    | Returns    |
| -------------------------- | ---------- |
| <HTMLElement\>: element    | <Promise\> |
| <Boolean\>: dispatchEvents |            |

export const getElementTransitionProps = el => {
  const elementStyle = getComputedStyle(el);
  const cssTransitionKeys = Object.keys(elementStyle).filter(key =>
    key.includes('transition')
  );

  return cssTransitionKeys.reduce(
    (prev, curr) => ({
      ...prev,
      [curr]: elementStyle[curr],
    }),
    {}
  );
};

export const getElementChildNodes = el => {
  const lightChildren = el.childNodes;
  const shadowChildren = el.shadowRoot ? el.shadowRoot.childNodes : [];
  const childNodes = [...lightChildren, ...shadowChildren];
  return [
    ...new Set(
      childNodes
        .reduce((acc, curr) => {
          const currentChildren = getElementChildNodes(curr);
          return [curr, ...currentChildren, ...acc];
        }, [])
        .filter(child => child instanceof HTMLElement)
    ),
  ];
};

export const getElementAndChildrenTransitionProps = el => {
  const elementTransitionProps = getElementTransitionProps(el);
  const elementChildren = getElementChildNodes(el);
  const elementChildrenTransitionProps = elementChildren.map(
    getElementTransitionProps
  );
  return [elementTransitionProps, ...elementChildrenTransitionProps];
};

export const parseTransitionTime = time => {
  const [value, unit] = time.match(/(^\d*\.?\d+)+|(m?s{1}$){1}/g);
  return parseInt(unit === 's' ? value * 1000 : value, 10);
};

export const waitForTransitionEnd = async (el, dispatchEvents = false) => {
  const elementTransitions = getElementAndChildrenTransitionProps(el);
  const timeToTransition = elementTransitions.reduce((prev, curr) => {
    const transitionTotalDuration =
      parseTransitionTime(curr.transitionDuration) +
      parseTransitionTime(curr.transitionDelay);
    return transitionTotalDuration > prev ? transitionTotalDuration : prev;
  }, 0);

  return new Promise(resolve =>
    setTimeout(() => {
      if (dispatchEvents) {
        elementTransitions.forEach(({ transitionProperty }) => {
          const transitionableProperties = transitionProperty
            .split(',')
            .map(property => property.trim());
          transitionableProperties.forEach(propertyName => {
            el.dispatchEvent(
              new TransitionEvent('transitionend', { propertyName })
            );
          });
        });
      }
      resolve();
    }, timeToTransition + 100)
  ); // add 100ms extra delay to ensure transition is actually ended
};

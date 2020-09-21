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
  return unit === 's' ? value * 1000 : value;
};

export const waitForTransitionEnd = async el => {
  const elementTransitions = getElementAndChildrenTransitionProps(el);
  const timeToTransition = elementTransitions.reduce((prev, curr) => {
    const transitionTotalDuration =
      parseTransitionTime(curr.transitionDuration) +
      parseTransitionTime(curr.transitionDelay);
    return transitionTotalDuration > prev ? transitionTotalDuration : prev;
  }, 0);

  return new Promise(resolve => setTimeout(resolve, timeToTransition + 100)); // add 100ms extra delay to ensure transition is actually ended
};

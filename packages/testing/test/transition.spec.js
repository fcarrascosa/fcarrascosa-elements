import {
  parseTransitionTime,
  getElementChildNodes,
} from '../src/transition.js';

describe('Transition Utils', () => {
  describe('parseTransitionTime', () => {
    it('should return value times 1000 without units if input is in seconds', () => {
      expect(parseTransitionTime('1s')).to.be.equal(1000);
    });

    it('should return value without units if input is in milliseconds', () => {
      expect(parseTransitionTime('1000ms')).to.be.equal(1000);
    });

    it('should parse decimal units in seconds', () => {
      expect(parseTransitionTime('.1s')).to.be.equal(100);
    });

    it('should parse unit + decimal in seconds', () => {
      expect(parseTransitionTime('1.1s')).to.be.equal(1100);
    });
  });

  describe('getElementChildNodes', () => {
    let element;
    beforeEach(async () => {
      element = document.createElement('div');
    });

    describe('when element is empty', () => {
      it('should return an empty collection', () => {
        expect(getElementChildNodes(element)).to.deep.equal([]);
      });
    });

    describe('when element has lightDom children', () => {
      let lightChild;

      describe('and that child is an HTMLElement', () => {
        beforeEach(() => {
          lightChild = document.createElement('div');
          element.appendChild(lightChild);
        });

        it('should return the lightDom children', () => {
          expect(getElementChildNodes(element)).to.include(lightChild);
        });

        describe('and that child has lightDom children', () => {
          let lightGrandChild;

          describe('and that grandChild is an HTML element', () => {
            beforeEach(() => {
              lightGrandChild = document.createElement('div');
              lightChild.appendChild(lightGrandChild);
            });

            it('should return the lightDom children', () => {
              expect(getElementChildNodes(element)).to.include(lightGrandChild);
            });
          });

          describe('and that grandChild is not an HTML element', () => {
            beforeEach(() => {
              lightGrandChild = document.createComment('dummy');
              lightChild.appendChild(lightGrandChild);
            });

            it('should not return the lightDom children', () => {
              expect(getElementChildNodes(element)).to.not.include(
                lightGrandChild
              );
            });
          });
        });

        describe('and that child has shadowDom children', () => {
          let shadowGrandChild;

          beforeEach(() => {
            lightChild.attachShadow({ mode: 'open' });
          });

          describe('and that grandChild is an HTML element', () => {
            beforeEach(() => {
              shadowGrandChild = document.createElement('div');
              lightChild.shadowRoot.appendChild(shadowGrandChild);
            });

            it('should return the shadowDom grandChildren', () => {
              expect(getElementChildNodes(element)).to.include(
                shadowGrandChild
              );
            });
          });

          describe('and that grandChild is not an HTML element', () => {
            beforeEach(() => {
              shadowGrandChild = document.createComment('dummy');
              lightChild.appendChild(shadowGrandChild);
            });

            it('should not return the lightDom grandChildren', () => {
              expect(getElementChildNodes(element)).to.not.include(
                shadowGrandChild
              );
            });
          });
        });
      });

      describe('and that child is not an HTMLElement', () => {
        beforeEach(() => {
          lightChild = document.createComment('Goat');
          element.appendChild(lightChild);
        });

        it('should not return the lightDom child', () => {
          expect(getElementChildNodes(element)).to.not.include(lightChild);
        });
      });
    });

    describe('when element has shadowDom children', () => {
      let shadowChild;

      beforeEach(() => {
        element.attachShadow({ mode: 'open' });
      });

      describe('and that child is an HTMLElement', () => {
        beforeEach(() => {
          shadowChild = document.createElement('div');
          element.shadowRoot.appendChild(shadowChild);
        });

        it('should return the lightDom children', () => {
          expect(getElementChildNodes(element)).to.include(shadowChild);
        });

        describe('and that child has lightDom children', () => {
          let lightGrandChild;

          describe('and that grandChild is an HTML element', () => {
            beforeEach(() => {
              lightGrandChild = document.createElement('div');
              shadowChild.appendChild(lightGrandChild);
            });

            it('should return the lightDom children', () => {
              expect(getElementChildNodes(element)).to.include(lightGrandChild);
            });
          });

          describe('and that grandChild is not an HTML element', () => {
            beforeEach(() => {
              lightGrandChild = document.createComment('dummy');
              shadowChild.appendChild(lightGrandChild);
            });

            it('should not return the lightDom children', () => {
              expect(getElementChildNodes(element)).to.not.include(
                lightGrandChild
              );
            });
          });
        });

        describe('and that child has shadowDom children', () => {
          let shadowGrandChild;

          beforeEach(() => {
            shadowChild.attachShadow({ mode: 'open' });
          });

          describe('and that grandChild is an HTML element', () => {
            beforeEach(() => {
              shadowGrandChild = document.createElement('div');
              shadowChild.shadowRoot.appendChild(shadowGrandChild);
            });

            it('should return the shadowDom grandChildren', () => {
              expect(getElementChildNodes(element)).to.include(
                shadowGrandChild
              );
            });
          });

          describe('and that grandChild is not an HTML element', () => {
            beforeEach(() => {
              shadowGrandChild = document.createComment('dummy');
              shadowChild.appendChild(shadowGrandChild);
            });

            it('should not return the lightDom grandChildren', () => {
              expect(getElementChildNodes(element)).to.not.include(
                shadowGrandChild
              );
            });
          });
        });
      });

      describe('and that child is not an HTMLElement', () => {
        beforeEach(() => {
          shadowChild = document.createComment('Goat');
          element.shadowRoot.appendChild(shadowChild);
        });

        it('should not return the lightDom child', () => {
          expect(getElementChildNodes(element)).to.not.include(shadowChild);
        });
      });
    });
  });

  describe('getElementTransitionProps', () => {});
});

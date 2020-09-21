import '../index.js';
import { fixture, html } from '@open-wc/testing';
import FcarrascosaDialog from '../src/FcarrascosaDialog.js';
import { getElementTransitionProps } from '../../../test/utils/transition.js';
import { getElementAndChildrenTransitionProps, getElementChildNodes } from "../../../test/utils/transition.js";
import { waitForTransitionEnd } from "../../../test/utils/transition";

describe('@fcarrascosa/dialog element', () => {
  let element;

  describe('behavior tests', () => {
    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-dialog>
        <button slot="trigger">Trigger</button>
        <p slot="content">Content</p>
      </fcarrascosa-dialog>`);
    });

    it('should render propperly', () => {
      expect(element.constructor.is).to.be.equal('fcarrascosa-dialog');
    });

    describe('overlay behavior', () => {
      it('should render closed for the first time', () => {
        expect(element.open).to.be.false;
        expect(element).to.not.have.attribute('open');
      });

      describe('when it is closed', () => {
        it('should not display the content', () => {
          const content = element.querySelector('[slot="content"]');
          expect(content).to.not.be.visible;
        });

        it('should not block body overflow', () => {
          expect(document.body.style.overflow).to.be.equal('');
        });

        describe('when trigger is clicked', () => {
          beforeEach(async () => {
            element.querySelector('[slot="trigger"]').click();
            await waitForTransitionEnd(element);
          });

          it('should open the dialog', () => {
            expect(element.open).to.be.true;
            expect(element).to.have.attribute('open');
          });

          it('should display the content', () => {
            const content = element.querySelector('[slot="content"]');
            expect(content).to.be.visible;
          });
        });
      });

      describe('when it is open', () => {
        beforeEach(async () => {
          element = await fixture(html`<fcarrascosa-dialog open>
            <button slot="trigger">Trigger</button>
            <p slot="content">Content</p>
          </fcarrascosa-dialog>`);
        });

        it('should not display the content', () => {
          const content = element.querySelector('[slot="content"]');
          expect(content).to.be.visible;
        });

        it('should block body overflow', () => {
          expect(document.body.style.overflow).to.be.equal('hidden');
        });

        describe('when backdrop is clicked', () => {
          beforeEach (async () => {
            element.shadowRoot.querySelector('.dialog-backdrop').click();
            await waitForTransitionEnd(element);
          });

          it('should close itself', () => {
            expect(element.open).to.be.false;
            expect(element).to.not.have.attribute('open');
          });

          it('should hide content', () => {
            const content = element.querySelector('[slot="content"]');
            expect(content).to.not.be.visible;
          });

          it('should release body overflow', () => {
            expect(document.body.style.overflow).to.be.equal('');
          });
        });
      });
    });
  });

  describe('unit tests', () => {
    beforeEach(() => {
      element = new FcarrascosaDialog();
    });

    describe('toggleOpen method', () => {
      describe('when open property is false', () => {
        beforeEach(() => {
          element.open = false;
        });

        it('should set open property to true', () => {
          element.toggleOpen();
          expect(element.open).to.be.true;
        });
      });
      describe('when open property is true', () => {
        beforeEach(() => {
          element.open = true;
        });

        it('should set open property to false', () => {
          element.toggleOpen();
          expect(element.open).to.be.false;
        });
      });
    });
  });
});

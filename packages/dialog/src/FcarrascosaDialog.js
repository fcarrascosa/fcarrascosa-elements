import { LitElement, css, html } from 'lit-element';

export default class FcarrascosaDialog extends LitElement {
  constructor() {
    super();
    this.open = false;
    this.keyUpEventHandler = this.handleKeyUp.bind(this);
  }

  static get is() {
    return 'fcarrascosa-dialog';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProps) {
    super.updated(changedProps);

    if (this.open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keyup', this.keyUpEventHandler);
    } else {
      document.body.style.overflow = null;
      document.removeEventListener('keyup', this.keyUpEventHandler);
    }
  }

  static get properties() {
    return {
      open: {
        reflect: true,
        type: Boolean,
      },
    };
  }

  handleKeyUp(e) {
    if (e.key === 'Escape') {
      this.toggleOpen();
    }
  }

  toggleOpen() {
    this.open = !this.open;
  }

  static get styles() {
    return css`
      .dialog,
      ::slotted([slot='content']) {
        opacity: 0;
        transition: all 0.5s ease-in-out;
        visibility: hidden;
      }

      .dialog {
        align-items: center;
        display: flex;
        height: 100%;
        justify-content: center;
        left: 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 200;
      }

      .dialog-backdrop {
        background: rgba(0, 0, 0, 0.7);
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 200;
      }

      ::slotted([slot='content']) {
        background: #fff;
        border-radius: 3px;
        overflow: hidden;
        opacity: 1;
        transform: translateY(50vh);
        z-index: 200;
      }

      :host([open]) .dialog,
      :host([open]) ::slotted([slot='content']) {
        opacity: 1;
        visibility: visible;
      }

      :host([open]) ::slotted([slot='content']) {
        box-shadow: #000 0 8px 16px;
        transform: translateY(0);
      }
    `;
  }

  render() {
    return html`
      <slot name="trigger" @click="${this.toggleOpen}"></slot>
      <div class="dialog">
        <div class="dialog-backdrop" @click="${this.toggleOpen}"></div>
        <slot name="content"></slot>
      </div>
    `;
  }
}

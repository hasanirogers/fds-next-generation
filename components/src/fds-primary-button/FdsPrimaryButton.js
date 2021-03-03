import { html, LitElement } from 'lit-element';
import { svgChevronLeft, svgChevronRight} from '../../assets/js/svgs.js';
import { stylesPrimaryButton } from './fds-primary-button.styles.js';
import keyCodes from '../../utilities/constants/keycodes.const.js';


export class FDSPrimaryButton extends LitElement {
  static get styles() {
    return [
      stylesPrimaryButton
    ]
  }

  static get properties() {
    return {
      active: {
        type: Boolean,
        reflect: true
      },
      hover: {
        type: Boolean,
        reflect: true
      },
      focused: {
        type: Boolean,
        reflect: true
      },
      link: {
        type: String
      },
      label: {
        type: String,
      },
      outlined: {
        type: Boolean,
        reflect: true
      },
      chevron: {
        type: String,
        reflect: true
      },
      disabled: {
        type: Boolean,
        reflect: true
      },
      theme: {
        type: String,
        reflect: true
      },
    }
  }

  constructor() {
    super();

    this.addEventListener('click', this.handleClick.bind(this));
    this.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.addEventListener('mouseout', this.handleMouseOut.bind(this));
    this.addEventListener('blur', this.handleBlur.bind(this));
    this.addEventListener('keyup', (event) => this.handleKeyUp(event));
    this.addEventListener('keydown', (event) => this.handleKeydown(event));
  }

  render() {
    if (this.link && !this.disabled) {
      return html`
        <a href=${this.link} class="btn" role="button" aria-label=${this.label}>
          <span class="text">
            <slot></slot>
          </span>
        </a>
      `;
    }

    return html`
      <button class="btn" ?disabled=${this.disabled} aria-disabled=${this.disabled ? 'true' : 'false'}>
        <span class="text">
          <span class="chevron left">
            ${svgChevronLeft}
          </span>
          <slot></slot>
          <span class="chevron right">
            ${svgChevronRight}
          </span>
        </span>
      </button>
    `;
  }

  handleMouseOver() {
    this.hover = true;
  }

  handleMouseOut() {
    this.hover = false;
  }

  handleClick() {
    this.hover = false;
    this.active = true;

    setTimeout(() => {
      this.active = false;
    }, 300);
  }

  handleBlur() {
    this.focused = false;
    this.active = false;
    this.hover = false;
  }

  handleKeyUp(event) {
    if (event.keyCode === keyCodes.TAB) {
      this.focused = true;
    }
  }

  handleKeydown(event) {
    if (event.keyCode === keyCodes.SPACE) {
      event.preventDefault();
      this.shadowRoot.querySelector('button').click();
    }
  }
}

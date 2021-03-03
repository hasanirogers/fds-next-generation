import { css } from 'lit-element';

export const stylesPrimaryButton = css`
  /* default */
  :host {
    display: inline-block;
    position: relative;
  }

  :host([focused]) {
    outline: 1px solid var(--fds-color-ford-blue);
    outline-offset: 10px;
  }

  a {
    outline: none;
  }

  button {
    border: 0;
    outline: none;
    background: transparent;
  }

  .btn::before {
    content: '';
    width: 100%;
    border-radius: 20px;
    border: 2px solid transparent;
    border-color: var(--fds-color-ford-blue);
    background-color: var(--fds-color-ford-blue);
    box-shadow:
      0 1rem 1rem 0 rgba(0, 0, 0, 0.1),
      0 2rem 2rem 0 rgba(0, 0, 0, 0.1),
      0 3rem 3rem 0 rgba(0, 0, 0, 0.15);

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    will-change: transform, background-color, border-color;
    transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out, background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  }

  :host([hover]) .btn::before {
    border-color: var(--fds-color-ford-light-blue);
    background-color: var(--fds-color-ford-light-blue);
    transform: scale(1.05);
    box-shadow:
      0 1.1rem 1.1rem 0 rgba(0, 0, 0, 0.1),
      0 2.1rem 2.1rem 0 rgba(0, 0, 0, 0.1),
      0 3.2rem 3.2rem 0 rgba(0, 0, 0, 0.15);
  }

  :host([active]) .btn::before {
    border-color: var(--fds-color-ford-light-blue);
    background-color: var(--fds-color-ford-light-blue);
  }

  .text {
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-family: "FordAntennaCond", Arial, Helvetica, sans-serif;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 1px;
    font-weight: 400;
    text-transform: capitalize;
    padding: 12px 30px 11px;
    position: relative;
    z-index: 1;
  }

  /* outlined */
  :host([outlined]) .btn::before {
    background: transparent;
    box-shadow: none;
  }

  :host([outlined][hover]) .btn::before {
    transform: none;
    background-color: rgba(16, 43, 78, 0.05);
  }

  :host([outlined]) .text {
    color: inherit;
  }

  /* chevron */

  .chevron {
    position: absolute;
    top: 8px;
    display: none;
  }

  .chevron svg {
    width: 24px;
    height: 24px;
    fill: #ffffff;
  }

  :host([outlined]) .chevron svg {
    fill: inherit;
  }

  .chevron.right {
    right: -0.5rem;
  }

  :host([chevron="right"]) .chevron.right {
    display: inline;
  }

  :host([chevron="right"]) .btn::before {
    padding-right: 1rem;
  }

  .chevron.left {
    left: -0.5rem;
  }

  :host([chevron="left"]) .chevron.left {
    display: inline;
  }

  :host([chevron="left"]) .btn::before {
    padding-left: 1rem;
  }

  :host([chevron="left"]) .text {
    position: relative;
    left: 1.5rem;
  }

  /* disabled */

  :host([disabled]) .text {
    cursor: not-allowed;
  }

  :host([disabled]) .btn::before {
    border-color: var(--fds-color-disabled-gray);
    background-color: var(--fds-color-disabled-gray);
    box-shadow: none;
  }

  :host([disabled][hover]) .btn::before {
    transform: none;
  }

  :host([disabled][outlined]) .btn::before {
    border-color: var(--fds-color-disabled-gray);
    background-color: transparent;
    box-shadow: none;
  }

  :host([disabled][outlined]) .text {
    color: var(--fds-color-disabled-gray);
  }

  /* dark theme */

  :host([theme="dark"]) .btn::before {
    border-color: #ffffff;
    background-color: #ffffff;
  }

  :host([theme="dark"]) .text {
    color: var(--fds-color-ford-blue);
  }

  :host([theme="dark"][outlined]) .btn::before {
    border-color: #ffffff;
    background-color: transparent;
  }

  :host([theme="dark"][outlined]) .text {
    color: #ffffff;
  }

  :host([theme="dark"]) .chevron svg {
    fill: var(--fds-color-ford-blue);
  }

  :host([theme="dark"][outlined]) .chevron svg {
    fill: #ffffff;
  }

  :host([theme="dark"][disabled]) .btn::before {
    border-color: var(--fds-color-disabled-gray);
    background-color: var(--fds-color-disabled-gray);
  }

  :host([theme="dark"][disabled]) .text {
    color: #000000;
  }

  :host([theme="dark"][disabled][outlined]) .btn::before {
    border-color: var(--fds-color-disabled-gray);
    background-color: transparent;
  }

  :host([theme="dark"][disabled][outlined]) .text {
    color: var(--fds-color-disabled-gray);
  }
`;

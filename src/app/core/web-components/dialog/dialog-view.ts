import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Dialog } from './dialog';

@customElement('card-user')
export class CardUser extends LitElement {
  static styles = css`
  `;

  @property({ type: Object }) data?: Dialog<unknown> = {
    title: 'Dialog',
    data: []
  };

  render() {
    if (this.data === undefined) {
      return '';
    }

    return html`
<div class="container card genCardColor">
  <div class="upHeaderStyle">
    <span class="iconStyle">
      <i class="fa-solid fa-angles-down">${this.data.title}</i>
    </span>
  </div>
</div>

    `;
  }

  private handleEdit() {
    this.dispatchEvent(
      new CustomEvent<unknown>('edit', {
        detail: this.data,
      })
    );
  }
}

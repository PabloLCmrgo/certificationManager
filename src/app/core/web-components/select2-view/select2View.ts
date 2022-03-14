
// card-user.ts

import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { Select2OptionData } from 'ng-select2';

import { Select2Data } from './select2Data';

@customElement('select2-view')
export class CardUser extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 160px;
    }
    .card-content {
      padding: 10px;
    }
  `;

  @property({ type: Object }) data?: Select2Data<Select2OptionData> = {
    id: 0,
    list: [],
    placeholder: 'placeholder',
    width: 1000
  };

  render() {
    if (this.data === undefined) {
      return [];
    }

    return html`
    <ng-select2 [data]=${this.data.list} [id]=${this.data.id} [placeholder]=${this.data.placeholder} [width]=${this.data.width}>
    </ng-select2>
    `;
  }

  //private handleEdit() {
  //  this.dispatchEvent(
  //    new CustomEvent<User>('edit', {
  //      detail: this.user,
  //    })
  //  );
  //}
}

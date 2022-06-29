import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('idea-headline')
export class IdeaHeadline extends LitElement {

  static override styles = css`
    .headline {
      text-align: center;
    }
  `

  override render() {
    return html`
      <p class='headline'>Add your failed idea here!</p>
      `
  }
}

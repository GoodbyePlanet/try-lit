
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

import './idea-headline.js';
import './idea-input.js';

@customElement('idea-container')
export class IdeaContainer extends LitElement {

  static override styles = css`
    .container {
			display: flex;
      flex-direction: column;
			align-items: center;
    }
  `

  override render() {
    return html`
				<div class='container'>
				  <idea-headline></idea-headline>
				  <idea-input></idea-input>
        </div>
      `
  }
}

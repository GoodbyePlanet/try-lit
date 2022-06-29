import {LitElement, html} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';

interface BadIdeaInput {
  subject: string;
  body: string;
}

@customElement('idea-input')
export class IdeaInput extends LitElement {

  @state()
  private badIdeas: BadIdeaInput[] = [
    { subject: "First bad idea", body: "This is my first idea that failed" },
    { subject: "Second bad idea", body: "This is my second idea that failed" }
  ];

  @query('#subject')
  inputSubject!: HTMLInputElement;

  @query('#body')
  inputBody!: HTMLInputElement;

  addBadIdea(): void {
    this.badIdeas = [...this.badIdeas, { subject: this.inputSubject.value, body: this.inputBody.value}];
    this.inputSubject.value = '';
    this.inputBody.value = '';
  }

  override render() {
    return html`
      <ul>
        ${this.badIdeas.map((idea) => 
            html`<li>${idea.subject} ${idea.body}</li>`
          )}
      <input id="subject" placeholder="Bad idea subject">
      <input id="body" placeholder="Bad idea body">
      <button @click=${this.addBadIdea}>Submit</button>
    `;
  }
}

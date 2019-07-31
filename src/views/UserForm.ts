export class UserForm {
  parent: Element;
  template(): string {
    return /*html*/ `
      <div>
        <h1>From template</h1>
        <input />
      </div>
    `;
  }
}

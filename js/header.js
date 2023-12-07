class AppHeader {
  container;

  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = `<div>!! --Header Component-- !!</div>`;
  }
}
class MerchantHero {
  container;

  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = `<div>!! --Merchant Hero Component-- !!</div>`;
  }
}
class AppHeader {
  container;

  constructor(container) {
    this.container = container;
    this.render();
  }

  render() {
    this.container.innerHTML = 
    `<header>
      <img src="img/clover-logo.svg" alt="clover-logo" class="image1"/>
      <img src="img/cart-icon.svg" alt="cart-icon" class="image2"/>
    </header>`;
  }
}
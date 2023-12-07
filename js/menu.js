fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1/menu', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));


class Menu {
  container;
  #menudata

  constructor(container) {
    this.container = container;
    this.#loadMenu().then(() => this.render());
  }

  async #loadMenu() {
    this.#merchantData = await fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1/menu', {
      method: 'GET',
      mode: 'cors'
    }).then(res => res.json());

  /**
   * Create an item component and append it as a child to the container
   */
  #renderItem(container, item) {
    // TODO: Render the item name, description, price, and add to cart button
  }

  /**
   * Create a category component and append it as a child to the container
   */
  #renderCategory(container, category) {
    // TODO: Render the category name
  }

  render() {
    this.container.innerHTML = `<div>!! --Menu Component-- !!</div>`;

    // TODO: Render each category
      // TODO: Render each item in the category
  }
}
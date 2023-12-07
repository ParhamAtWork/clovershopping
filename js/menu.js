class Menu {
  container;
  #menuData;
  #itemMap;

  constructor(container) {
    this.container = container;
    this.#loadMenu().then(() => this.render());
  }

  async #loadMenu() {
    this.#menuData = await fetch(
      "https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1/menu",
      {
        method: "GET",
        mode: "cors",
      }
    ).then((res) => res.json());

    this.#itemMap = this.#menuData.items.reduce((hashMap, item) => {
      hashMap[item.id] = item;
      return hashMap;
    }, {})


  }

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
    const categoryElements = Object.values(this.#menuData.categories).map(
      (category) => {

        const elem = document.createElement("div");
        elem.className = "category";
        elem.innerHTML = `<h2>${category.name}</h2>`;
        

        const itemElements = category.items.map((itemId) => {
          const i = this.#itemMap[itemId];
          const itemElem = document.createElement("div");
          console.log(i.images[4])
          itemElem.className = "item";
          itemElem.innerHTML = `<p>${i.name}</p> 
          <p>$${(i.price/100).toFixed(2)}</p>
          `;

          return itemElem;
        });

        elem.append(...itemElements);

        return elem;
      }
    );

    this.container.append(...categoryElements);
  }
}

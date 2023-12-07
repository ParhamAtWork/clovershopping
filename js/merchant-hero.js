class MerchantHero {
  container;
  #merchantData;

  constructor(container) {
    this.container = container;
    this.#loadMerchant().then(() => this.render());
  }
  
  async #loadMerchant() {
    this.#merchantData = await fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1', {
      method: 'GET',
      mode: 'cors'
    }).then(res => res.json());


  }

  render() {
    this.container.innerHTML = `
    <div class="merchant-hero">
      <div class="imageDiv">
        <img src="./img/fatcat.jpg" class="image3"/>
      
        <div class="text-content">
          <h1>${this.#merchantData.name}</h1>
          <div class="address">
            <p>${this.#merchantData.address.address1}</p>
            <p>${this.#merchantData.address.city}</p>
            <p>${this.#merchantData.address.state}</p>
            <p>${this.#merchantData.services.hours}</p>
      </div>
          <p>${this.#merchantData.phone}</p>
          </div>
        </div>
    </div>
    

    `;
  }
}
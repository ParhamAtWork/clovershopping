fetch('https://dev1.dev.clover.com/oloservice/v1/merchants/R9AHC6Q4K7PX1', {
  method: 'GET',
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Hero Error:', error));


class MerchantHero {
  container;

  constructor(container) {
    this.container = container;
    this.render();
  }
  

  render() {
    this.container.innerHTML = `
    <div>
      hi
    </div>`;
  }
}
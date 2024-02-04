// ? Gets one product from fakestoreapi.com
async function getOneProduct() {
    const data = await fetch("https://fakestoreapi.com/products/category/electronics/1");
    const res = await data.json();
    return res;
  }
  
  // ? Gets many products from fakestoreapi.com
  async function getProducts(amount) {
    const data = await fetch(`https://fakestoreapi.com/products/category/electronics?limit=${amount}`);
    const res = await data.json();
  
    return res;
  }
  
  function displayProducts(products) {
    const productContainer = document.getElementsByClassName("product-container");
    products.forEach((product) => {
      let listItemElement = document.createElement("li");
      listItemElement.innerHTML = `
      <div class="product">
      <img src="${product.image}" alt="">
      <h3 class="title">${product.title}</h3>
      <div class="category">
          <span>${product.category}</span>
      </div>
      <div class="description">
          ${product.description}
      </div>
      <div class="price">
         ${product.price} USD
      </div>
  </div>
  
      `;
      productContainer[0].appendChild(listItemElement);
    });
  }
  
  let counter = 0;
  let products = await getProducts(3);
  displayProducts(products);
  
  const button = document.getElementsByClassName("btn");
  button[0].addEventListener("click", async () => {
    counter += 3;
    const data = await getProducts(products.length + counter);
    products = data.slice(counter);
    displayProducts(products);
  });
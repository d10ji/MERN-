const productSection = document.querySelector('.products');
const createCardAddData = (product)=>{
let productCard = `
  <div class="product-card">
    <a href="/details.html">
    <div class="product-image">
      <img src="${product.image}">
    </div>
    <div class="product-info">
      <h5>${product.title}</h5>
      <h6>${product.price}</h6>
    </div>
     </a>
    </div>
  `
productSection.innerHTML += productCard;
}


async function fetchprocductData (){
  const res = await fetch('http://localhost:4444/api/products');
  const data = await res.json();
  console.log(data);
  data.map( (product) => {
    createCardAddData(product)
  });
};
fetchprocductData();

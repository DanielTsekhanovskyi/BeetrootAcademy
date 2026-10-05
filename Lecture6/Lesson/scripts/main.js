const title = document.getElementById('title');
const version = document.getElementById('title');
const model = document.getElementById('model');
const newProduct = document.getElementById('product-new');
const usedProduct = document.getElementById('product-used');

const createdBtn = document.getElementById('create-product-button');
const productList = document.getElementById('product-list');

createdBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const productTitle = title.value;
    const productVersion = version.value;
    const productModel = model.value;
    const productNew = newProduct.value
    const productUsed = usedProduct.value;

    const createdProduct = document.createElement('div');

    const pTitle = document.createElement('p');
    pTitle.textContent = `Product title: ${title.value}`;

    const pVersion = document.createElement('p');
    pVersion.textContent = `Product title: ${version.value}`;

    const pModel = document.createElement('p');
    pModel.textContent = `Product title: ${model.value}`;

    const b = document.createElement('b');
createdProduct.append(pTitle, pVersion, pModel, b);

productList.appendChild(createdProduct)
});
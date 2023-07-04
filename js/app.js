import Cart from "./cart.js";
import Product from "./product.js";

const productObj = new Product();
const cartObj = new Cart();

hideDivById("cart-tab");
showProductLists(makeProductList);
showCategoryList();
showTotalCartItem();

function hideDivById(idName) {
  const element = document.getElementById(idName);
  element.style.display = "none";
}

function showDivById(idName) {
  const element = document.getElementById(idName);
  element.style.display = "block";
}

function showProductLists(callback) {
  let productListsElement = document.getElementById("list-div");
  let productLists = productObj.getProducts();
  let output = callback(productLists);
  productListsElement.innerHTML = output;
  cartBtnAction();
}

function makeProductList(productLists) {
  let output = `<div class="row">`;
  productLists.forEach((product) => {
    output += `
        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col mt-3">
            <div class="card">
                <img
                    class="card-img-top"
                    src="${product.image}"
                    alt="Card image"
                    style="width: 100%"
                />
                <div class="card-body">
                    <h4 class="card-title">${product.name}</h4>
                    <p class="card-text">${product.description}</p>
                    <button type="button" class="btn btn-outline-primary btn-cart cart" product-id="${product.id}">
                        <i class="fa-solid fa-cart-shopping"></i>&nbsp;Add To Cart
                    </button>
                </div>
            </div>
        </div>
    `;
  });
  output += `</div>`;
  return output;
}

function cartBtnAction() {
  const cartBtn = document.querySelectorAll(".cart");
  cartBtn.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const productId = this.getAttribute("product-id");
      console.log("productId: ", productId);
      const productList = productObj.getProducts();
      const foundProduct = productList.find((product) => {
        return product.id === productId;
      });
      const cart = {
        id: foundProduct.id,
        name: foundProduct.name,
        description: foundProduct.description,
        image: foundProduct.image,
        quantity: 1,
        price: foundProduct.price,
      };
      cartObj.addToCart(cart);
      showTotalCartItem();
    });
  });
}

function showCategoryList() {
  let catgoryListsElement = document.getElementById("category-list");
  let categoryLists = productObj.getCategories();
  let output = ``;
  output = `<select class="form-select form-select-lg" id=category><option value="">Select Category</option>`;
  categoryLists.forEach((category) => {
    output += `<option value="${category.id}">${category.name}</option>`;
  });
  output += `</select>`;
  catgoryListsElement.innerHTML = output;
}

function showTotalCartItem() {
  const totalItem = cartObj.getTotalCartItem();
  const totalItemElement = document.getElementById("total-item");
  totalItemElement.innerHTML = `(${totalItem})`;
}

function viewCartItemList() {
  let cartItem = cartObj.getCartFromSession();
  let output = ``;
  if (cartItem.length > 0) {
    cartItem.forEach((item) => {
      output += `
        <tr>
          <td class="p-3">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  src="${item.image}"
                  class="d-block ui-w-65 ui-bordered me-3"
                />
              </div>
              <div class="flex-grow-1 pt-0">
                <p class="mb-0">${item.name}</p>
                <small>${item.description}</small>
              </div>
            </div>
          </td>
          <td class="text-end font-weight-semibold align-middle p-4">
            <i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="price-${item.id}">${item.price}</span>
          </td>
          <td class="align-middle p-4">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <button
                  type="button"
                  class="btn btn-outline-success inc-btn"
                  item-id="${item.id}"
                  item-price="${item.price}">
                  <i class="fa-sharp fa-solid fa-plus"></i>
                </button>
              </div>
              <div class="flex-grow-1 pt-0">
                <input
                  type="number"
                  min="1"
                  class="form-control text-center shadow-none item-qty"
                  id="qty-${item.id}"
                  value="${item.quantity}"
                />
              </div>
              <div class="flex-shrink-0">
                <button
                  type="button"
                  class="btn btn-outline-success dec-btn"
                  item-id="${item.id}"
                  item-price="${item.price}">
                  <i class="fa-sharp fa-solid fa-minus"></i>
                </button>
              </div>
            </div>
          </td>
          <td class="text-end font-weight-semibold align-middle p-4">
            <i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="total-${item.id}">${item.total}</span>
          </td>
          <td class="text-center align-middle px-0">
            <button type="button" class="btn btn-outline-danger remove-item" item-id="${item.id}">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      `;
    });
    output += `    
      <tr>
        <th colspan="3" class="text-end font-weight-semibold align-middle p-4">Sub Total</th>
        <td class="text-end font-weight-semibold align-middle p-4">
          <i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="sub-total-text">${cartObj.getCartTotal()}</span>
        </td>
        <td class="text-center align-middle px-0">
        </td>
      </tr>
      <tr>
        <th colspan="3" class="text-end font-weight-semibold align-middle p-4">Discount</th>
        <td class="text-end font-weight-semibold align-middle p-4">
          <i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="discount-text">0</span>
        </td>
        <td class="text-center align-middle px-0">
        </td>
      </tr>
      <tr>
        <th colspan="3" class="text-end font-weight-semibold align-middle p-4">Total</th>
        <td class="text-end font-weight-semibold align-middle p-4">
          <i class="fa-solid fa-bangladeshi-taka-sign"></i><span id="total-text">${cartObj.getCartTotal()}</span>
        </td>
        <td class="text-center align-middle px-0">
        </td>
      </tr>
    `;
  }
  return output;
}

function removeItemFromCart() {
  const removeItemBtn = document.querySelectorAll(".remove-item");
  removeItemBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemId = this.getAttribute("item-id");
      cartObj.removeItemFromCart(itemId);
      const cartBodyElement = document.getElementById("cart-body");
      const output = viewCartItemList();
      cartBodyElement.innerHTML = output;
      removeItemFromCart();
    });
  });
}

document.querySelector("#category").addEventListener("change", function () {
  let productListsElement = document.getElementById("list-div");
  let categoryId = this.value;
  let productList = productObj.getProducts();
  let foundProductList = [];
  if (categoryId) {
    foundProductList = productList.filter((product) => {
      return product.categoryId === categoryId;
    });
  } else {
    foundProductList = productList;
  }
  let output = makeProductList(foundProductList);
  productListsElement.innerHTML = output;
});

document
  .querySelector("#search-product")
  .addEventListener("input", function (event) {
    let productListsElement = document.getElementById("list-div");
    let searchText = this.value;
    let productLists = productObj.getProducts();
    let foundProductList = [];
    if (searchText) {
      searchText = searchText.toLowerCase();
      const predicate = (searchData) =>
        searchData?.name?.toLowerCase().indexOf(searchText) > -1;
      console.log("predicate: ", predicate);
      foundProductList = productLists.filter(predicate);
    } else {
      foundProductList = productLists;
    }
    let output = makeProductList(foundProductList);
    productListsElement.innerHTML = output;
  });

document.querySelector("#view-cart").addEventListener("click", function () {
  hideDivById("product-tab");
  showDivById("cart-tab");
  const cartBodyElement = document.getElementById("cart-body");
  const output = viewCartItemList();
  cartBodyElement.innerHTML = output;
  removeItemFromCart();
  incrementItemQty();
  decrementItemQty();
  incDecItemQty();
  applyDiscount();
  cancelDiscount();
  clearAllCartItem();
});

document
  .querySelector("#view-product-tab")
  .addEventListener("click", function () {
    hideDivById("cart-tab");
    showDivById("product-tab");
    showProductLists(makeProductList);
    showTotalCartItem();
  });

function incrementItemQty() {
  const incBtnElement = document.querySelectorAll(".inc-btn");
  incBtnElement.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemId = this.getAttribute("item-id");
      const intemPriceElement = document.getElementById(`price-${itemId}`);
      const intemQtyElement = document.getElementById(`qty-${itemId}`);
      const totalElement = document.getElementById(`total-${itemId}`);
      const subTotalElement = document.getElementById(`sub-total-text`);
      const itemPrice = parseInt(intemPriceElement.innerHTML);
      let quantity = parseInt(intemQtyElement.value);
      quantity += 1;
      let total = itemPrice * quantity;
      intemQtyElement.value = quantity;
      totalElement.innerHTML = total;
      cartObj.updateToCart(itemId, quantity);
      subTotalElement.innerHTML = cartObj.getCartTotal();
      showDiscountAmount();
    });
  });
}

function decrementItemQty() {
  const decBtnElement = document.querySelectorAll(".dec-btn");
  decBtnElement.forEach((btn) => {
    btn.addEventListener("click", function () {
      const itemId = this.getAttribute("item-id");
      const intemPriceElement = document.getElementById(`price-${itemId}`);
      const intemQtyElement = document.getElementById(`qty-${itemId}`);
      const totalElement = document.getElementById(`total-${itemId}`);
      const subTotalElement = document.getElementById(`sub-total-text`);
      const itemPrice = parseInt(intemPriceElement.innerHTML);
      let quantity = parseInt(intemQtyElement.value);
      quantity -= 1;
      if (quantity <= 0) {
        quantity = 1;
      }
      let total = itemPrice * quantity;
      intemQtyElement.value = quantity;
      totalElement.innerHTML = total;
      cartObj.updateToCart(itemId, quantity);
      subTotalElement.innerHTML = cartObj.getCartTotal();
      showDiscountAmount();
    });
  });
}

function incDecItemQty() {
  const itemQtyElement = document.querySelectorAll(".item-qty");
  itemQtyElement.forEach((itemQty) => {
    itemQty.addEventListener("change", function () {
      const subTotalElement = document.getElementById(`sub-total-text`);
      let itemId = this.getAttribute("id");
      itemId = itemId.split("-")[1];
      let quantity = parseInt(this.value);
      const intemPriceElement = document.getElementById(`price-${itemId}`);
      const totalElement = document.getElementById(`total-${itemId}`);
      const itemPrice = parseInt(intemPriceElement.innerHTML);
      let total = itemPrice * quantity;
      totalElement.innerHTML = total;
      cartObj.updateToCart(itemId, quantity);
      subTotalElement.innerHTML = cartObj.getCartTotal();
      showDiscountAmount();
    });
  });
}

function calculateDiscount() {
  const discountInputElement = document.getElementById("discount-input");
  let discountInput = discountInputElement.value;
  if (discountInput <= 0) {
    discountInputElement.value = 0;
    return 0;
  }
  const cartSubTotal = cartObj.getCartTotal();
  let discountAmount = 0;
  if (cartSubTotal > 0) {
    discountAmount = (cartSubTotal * discountInput) / 100;
  }
  return discountAmount;
}

function showDiscountAmount() {
  const discountTextElement = document.getElementById("discount-text");
  const totalTextElement = document.getElementById("total-text");
  const cartSubTotal = cartObj.getCartTotal();
  const discountAmount = calculateDiscount();
  let total = cartSubTotal - discountAmount;
  if (total < 0) {
    total = 0;
  }
  discountTextElement.innerHTML = discountAmount;
  totalTextElement.innerHTML = total;
}

function applyDiscount() {
  document
    .getElementById("discount-btn")
    .addEventListener("click", function () {
      showDiscountAmount();
    });
}

function cancelDiscount() {
  document
    .getElementById("cancel-discount-btn")
    .addEventListener("click", function () {
      const discountInputElement = document.getElementById("discount-input");
      const discountTextElement = document.getElementById("discount-text");
      const totalTextElement = document.getElementById("total-text");
      discountInputElement.value = 0;
      discountTextElement.innerHTML = 0;
      totalTextElement.innerHTML = cartObj.getCartTotal();
    });
}

function clearAllCartItem() {
  document.getElementById("clearCart").addEventListener("click", function () {
    cartObj.clearAllCartItem();
    const discountInputElement = document.getElementById("discount-input");
    discountInputElement.value = 0;
    const cartBodyElement = document.getElementById("cart-body");
    const output = viewCartItemList();
    cartBodyElement.innerHTML = output;
    clearAllCartItem();
  });
}

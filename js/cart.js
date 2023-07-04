export default class Cart {
  constructor() {
    console.log("This is Cart Class");
  }

  addToCart(...cartItem) {
    let cart = [];
    const cartData = {
      id: cartItem[0].id,
      name: cartItem[0].name,
      description: cartItem[0].description,
      image: cartItem[0].image,
      quantity: cartItem[0].quantity,
      price: cartItem[0].price,
      total: cartItem[0].quantity * cartItem[0].price,
    };
    cart = this.getCartFromSession();
    let cartJsonStr;
    if (cart.length > 0) {
      cart.push(cartData);
      cartJsonStr = JSON.stringify(cart);
    } else {
      cart.push(cartData);
      cartJsonStr = JSON.stringify(cart);
    }
    localStorage.setItem("cart", cartJsonStr);
  }

  updateToCart(itemId, quantity) {
    let cart = this.getCartFromSession();
    if (cart.length > 0) {
      let itemIndex = -1;
      itemIndex = cart.findIndex((item) => item.id === itemId);
      if (itemIndex > -1) {
        cart[itemIndex].quantity = quantity;
        cart[itemIndex].total = quantity * cart[itemIndex].price;
      }
      let cartJsonStr = JSON.stringify(cart);
      localStorage.setItem("cart", cartJsonStr);
    }
  }

  getCartFromSession() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(cart);
    }
    return [];
  }

  getTotalCartItem() {
    const cart = this.getCartFromSession();
    const totalItem = cart.length;
    return totalItem;
  }

  removeItemFromCart(itemId) {
    let cart = this.getCartFromSession();
    if (cart.length > 0) {
      let itemIndex = -1;
      itemIndex = cart.findIndex((item) => item.id === itemId);
      if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
      }
      let cartJsonStr = JSON.stringify(cart);
      localStorage.setItem("cart", cartJsonStr);
    }
  }

  getCartTotal() {
    let cart = this.getCartFromSession();
    let total = 0;
    if (cart) {
      cart.forEach((item) => {
        total += parseInt(item.total);
      });
    }
    return total;
  }

  clearAllCartItem() {
    localStorage.clear("cart");
  }
}

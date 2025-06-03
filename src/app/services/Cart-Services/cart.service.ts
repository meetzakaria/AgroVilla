import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private CART_KEY = 'agrovilla-cart';

  constructor() {}

  // Get cart items from localStorage
  getCartItems(): any[] {
    const data = localStorage.getItem(this.CART_KEY);
    let parsedData;
    if (data != null) {
      parsedData = JSON.parse(data);

      parsedData = parsedData.map((p: { image: any }) => {
        let imageSrc = '';
        if (p.image && Array.isArray(p.image)) {
          const base64 = btoa(String.fromCharCode(...p.image));
          imageSrc = 'data:image/jpeg;base64,' + base64;
          // console.log(p.image);
        }
        return { ...p, imageSrc };
      });
    }

    if (parsedData == null) {
      parsedData = [];
    }
    // debugger;
    return parsedData;
  }

  // Add a product to the cart
  addToCart(product: any): void {
    const currentCart = this.getCartItems();
    currentCart.push(product);
    localStorage.setItem(this.CART_KEY, JSON.stringify(currentCart));
  }

  // Remove a product from the cart
  removeFromCart(index: number): void {
    const currentCart = this.getCartItems();
    currentCart.splice(index, 1);
    localStorage.setItem(this.CART_KEY, JSON.stringify(currentCart));
  }

  // Clear the cart
  clearCart(): void {
    localStorage.removeItem(this.CART_KEY);
  }
}

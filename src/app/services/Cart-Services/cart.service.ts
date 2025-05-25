import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private CART_KEY = 'agrovilla-cart';

  constructor() { }

  // Get cart items from localStorage
  getCartItems(): any[] {
    const data = localStorage.getItem(this.CART_KEY);
    return data ? JSON.parse(data) : [];
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

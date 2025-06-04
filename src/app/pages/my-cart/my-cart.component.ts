import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/Cart-Services/cart.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-cart',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css'],
})
export class MyCartComponent  implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateSubtotal();
  }

  calculateSubtotal(): void {
    this.subtotal = this.cartItems.reduce((total, item) => total + (item.price || 0), 0);
  }

  removeItem(index: number): void {
    this.cartService.removeFromCart(index);
    this.cartItems.splice(index, 1);
    this.calculateSubtotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.subtotal = 0;
  }

  increaseQty(index: number): void {
    this.cartItems[index].quantity++;
    
  }

  decreaseQty(index: number): void {
    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

}

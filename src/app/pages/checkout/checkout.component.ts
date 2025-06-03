import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/Cart-Services/cart.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [NavbarComponent,CommonModule]
})
export class CheckoutComponent implements OnInit {
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
}

import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-payment',
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  totalAmount: number = 0;
  paymentMethod: string = '';
  cartItems: any[] = [];

  ngOnInit(): void {
    const cart = localStorage.getItem('cart');
    if (cart) {
      this.cartItems = JSON.parse(cart);
      this.totalAmount = this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 60;
    }
  }

  confirmOrder() {
    if (!this.paymentMethod) {
      alert('Please select a payment method.');
      return;
    }
    alert(`Order placed successfully with ${this.paymentMethod.toUpperCase()}!`);
    // এখানে actual API call / order placing code যাবে
  }
}

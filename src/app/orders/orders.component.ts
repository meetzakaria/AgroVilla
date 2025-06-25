import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/Cart-Services/cart.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent implements OnInit {

  cartItems: any[] = [];
    subtotal: number = 0;
    shippingCharge: number = 60; // ✅ Shipping charge added
    http: any;
  
    constructor(private cartService: CartService) {}
  
    ngOnInit(): void {
      this.cartItems = this.cartService.getCartItems().map((item: any) => ({
        ...item,
        quantity: item.quantity ?? 1, // যদি না থাকে, তাহলে 1 সেট করো
      }));
      this.calculateSubtotal();
    }
  
    calculateSubtotal(): void {
      this.subtotal = this.cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
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
      this.calculateSubtotal();
    }
  
    decreaseQty(index: number): void {
      if (this.cartItems[index].quantity > 1) {
        this.cartItems[index].quantity--;
        this.calculateSubtotal();
      }
    }
  
    subTotal(): number {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // ✅ Added shipping charge
    }
  
    getTotal(): number {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + this.shippingCharge; // ✅ Added shipping charge
    }
  
    getTotalQuantity(): number {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }
  
  
  
  
  
    checkout() {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  
    const order = {
      userId: 1, // auth user id, ideally from auth service
      items: cartItems.map((item: any) => ({
        productId: item.id,
        productName: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    };
  
    this.http.post('/api/orders/place', order).subscribe(() => {
      alert("Order placed successfully!");
      localStorage.removeItem('cart');
    });
  }

}

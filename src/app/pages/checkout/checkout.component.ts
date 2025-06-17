import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/Cart-Services/cart.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  imports: [CommonModule]
})
export class CheckoutComponent {
  
}
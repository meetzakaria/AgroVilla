import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products = [
    { name: 'Hybril Rice Seeds', price: 20, image: 'seeds01.jpg' },
    { name: 'Organic Fertilizer', price: 15, image: 'fertilizer01.jpeg' },
    { name: 'Tractor Tiller', price: 120000, image: 'tructor01.jpg' }
  ];
}

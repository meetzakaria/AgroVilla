import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products = [
    { name: 'Hybril Rice Seeds', price: 20, image: 'seeds01.jpg' },
    { name: 'Organic Fertilizer', price: 15, image: 'fertilizer01.jpeg' },
    { name: 'Tractor Tiller', price: 120000, image: 'tructor01.jpg' }
  ];

  categories = [
    'Seeds',
    'Fertilizers',
    'Equipment',
    'Machinery',
    'Saplings'
  ];
  
  filterByCategory(category: string) {
    console.log("Selected Category:", category);
    // এখান থেকে filter logic call করতে পারো
  }

}

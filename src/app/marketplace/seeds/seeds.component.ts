import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-seeds',
  imports: [CommonModule],
  templateUrl: './seeds.component.html',
  styleUrl: './seeds.component.css'
})
export class SeedsComponent {

  products = [
    {
      name: 'Hybrid Tomato Seeds',
      price: 120,
      image: 'assets/products/tomato-seeds.jpg'
    },
    {
      name: 'Organic Fertilizer (5kg)',
      price: 350,
      image: 'assets/products/organic-fertilizer.jpg'
    },
    {
      name: 'Mini Power Tiller',
      price: 29500,
      image: 'assets/products/power-tiller.jpg'
    },
    {
      name: 'Rice Saplings Bundle',
      price: 75,
      image: 'assets/products/rice-saplings.jpg'
    },
    {
      name: 'Hybrid Tomato Seeds',
      price: 120,
      image: 'assets/products/tomato-seeds.jpg'
    },
    {
      name: 'Organic Fertilizer (5kg)',
      price: 350,
      image: 'assets/products/organic-fertilizer.jpg'
    },
    {
      name: 'Mini Power Tiller',
      price: 29500,
      image: 'assets/products/power-tiller.jpg'
    },
    {
      name: 'Rice Saplings Bundle',
      price: 75,
      image: 'assets/products/rice-saplings.jpg'
    }
  ];

}

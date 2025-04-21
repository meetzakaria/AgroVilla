import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private cartService: CartService) {}

  products = [
    {
      name: 'Hybrid Tomato Seeds',
      price: 15,
      image: 'marketplace/seeds/tomato.jpg'
    },
    {
      name: 'Arabian Cucumber Seeds',
      price: 150,
      image: 'marketplace/seeds/cucumber.png'
    },
    {
      name: 'HYBRID Black FLORANCE F1 WATER MELON SEEDS',
      price: 20,
      image: 'marketplace/seeds/tormuj.jpg'
    },
    {
      name: 'Hybrid Supremo BAROMASHI Cucumber Seeds',
      price: 55,
      image: 'marketplace/seeds/shosha.png'
    },
    {
      name: 'Bangladeshi Spinach, Palong Shak seeds',
      price: 65,
      image: 'marketplace/seeds/palang.jpg'
    },
    {
      name: 'Adenium Flowers Seeds from Thailand',
      price: 120,
      image: 'marketplace/seeds/ful.jpg'
    },
    {
      name: 'Chili Red JHALMORICH F1 Hybrid Seeds',
      price: 40,
      image: 'marketplace/seeds/moric.png'
    },
    {
      name: '6 items capsicum combo package',
      price: 180,
      image: 'marketplace/seeds/capsicam.jpg'
    }
  ];

  addToCart(product: any): void {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}

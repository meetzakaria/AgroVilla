import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/Cart-Services/cart.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../../services/Product-Services/product.service';

@Component({
  selector: 'app-seeds',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './seeds.component.html',
  styleUrl: './seeds.component.css'
})
export class SeedsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {

    this.productService.getProductsByCategory('Seeds').subscribe(data => {
      this.products = this.processProducts(data);
      this.filteredProducts = this.products.filter(p => p.category === 'Seeds');
    });

  }

  processProducts(data: any[]): any[] {
    return data.map(p => {
      let imageSrc = '';
      if (p.image && Array.isArray(p.image)) {
        const base64 = btoa(String.fromCharCode(...p.image));
        imageSrc = 'data:image/jpeg;base64,' + base64;
      }
      return { ...p, imageSrc };
    });
  }

  addToCart(product: any): void {
      this.cartService.addToCart(product);
      
      
      alert(`${product.name} added to cart!`);
    }
  
}

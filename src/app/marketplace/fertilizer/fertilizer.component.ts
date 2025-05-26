import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/Product-Services/product.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-fertilizer',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './fertilizer.component.html',
  styleUrl: './fertilizer.component.css'
})
export class FertilizerComponent implements OnInit {

  products: any[] = [];
    filteredProducts: any[] = [];
    cartService: any;
  
    constructor(
      private http: HttpClient,
      private productService: ProductService
    ) { }
  
    ngOnInit() {
  
      this.productService.getProductsByCategory('Fertilizer').subscribe(data => {
        this.products = this.processProducts(data);
        this.filteredProducts = this.products.filter(p => p.category === 'Fertilizer');
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

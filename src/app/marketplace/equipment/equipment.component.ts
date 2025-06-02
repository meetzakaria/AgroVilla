
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";
import { ProductService } from '../../services/Product-Services/product.service';
import { CartService } from '../../services/Cart-Services/cart.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  imports: [CommonModule, NavbarComponent],
})
export class EquipmentComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  

  constructor(
    private http: HttpClient,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit() {

    this.productService.getProductsByCategory('Equipment').subscribe(data => {
      this.products = this.processProducts(data);
      this.filteredProducts = this.products.filter(p => p.category === 'Equipment');
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


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  imports: [CommonModule, NavbarComponent],
})
export class EquipmentComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
    cartService: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    

    this.http.get<any[]>('http://localhost:8082/api/products')
      .subscribe(data => {
        this.products = this.processProducts(data);
        this.filteredProducts = this.products.filter(p => p.category === 'Equipment');
        
        console.log(this.products.map(p => p.category));
        console.log('API Data:', data);

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

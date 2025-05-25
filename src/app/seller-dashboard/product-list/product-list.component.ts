import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  imports: [CommonModule, NavbarComponent],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8082/api/products')
      .subscribe(data => {
        this.products = this.processProducts(data);
        // শুধু Equipment ক্যাটাগরি ফিল্টার করুন
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
}
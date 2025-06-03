import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

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
    this.http
      .get<any[]>('http://localhost:8081/api/products')
      .subscribe((data) => {
        this.products = this.processProducts(data);
      });
  }

  processProducts(data: any[]): any[] {
    return data.map((p) => {
      let imageSrc = '';
      // console.log(p.image);
      if (p.image && Array.isArray(p.image)) {
        const base64 = btoa(String.fromCharCode(...p.image));
        imageSrc = 'data:image/jpeg;base64,' + base64;
      }
      return { ...p, imageSrc };
    });
  }
}

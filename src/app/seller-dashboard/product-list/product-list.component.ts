import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../navbar/navbar.component";

@Component({
  imports: [CommonModule, NavbarComponent],
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient , private router: Router) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/products')
      .subscribe(data => {
        this.products = data;
      });
  }

  onAddProduct() {
    // Redirect to product form or trigger modal
    this.router.navigate(['/ap']);
  }
}

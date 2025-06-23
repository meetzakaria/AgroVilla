import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductService, Product } from '../../services/Product-Services/product.service';
import { NavbarComponent } from "../../navbar/navbar.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  editingProduct: Product | null = null;

  constructor(private http: HttpClient, private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
    this.http
      .get<any[]>('http://localhost:8081/api/products')
      .subscribe((data) => {
        this.products = this.processProducts(data);
      });
  }

  loadProducts() {
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.products = this.processProducts(data);
    });
  }

  processProducts(data: Product[]): Product[] {
    return data.map((p) => {
      if (p.image && Array.isArray(p.image)) {
        const base64 = btoa(String.fromCharCode(...p.image));
        return { ...p, image: base64 };
      }
      return p;
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure to delete this product?')) {
      this.productService.deleteProduct(id).subscribe(() => {
        this.loadProducts();
      });
    }
  }

  editProduct(product: Product) {
    this.editingProduct = { ...product };
  }

  saveEdit() {
    if (this.editingProduct) {
      this.productService
        .updateProduct(this.editingProduct.id, this.editingProduct)
        .subscribe(() => {
          this.loadProducts();
          this.editingProduct = null;
        });
    }
  }

  cancelEdit() {
    this.editingProduct = null;
  }
}

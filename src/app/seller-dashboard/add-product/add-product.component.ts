import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  imports: [ CommonModule, FormsModule],
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
onCancel() {
throw new Error('Method not implemented.');
}
  product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    imageUrl: '',
    quantity: 0
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8081/api/products', this.product)
      .subscribe(response => {
        alert("Product Added Successfully!");
        this.product = { name: '', description: '', price: 0, category: '', imageUrl: '', quantity: 0 };
      });
  }
}

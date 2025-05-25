import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from "../../nav/nav.component";

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule, NavComponent],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    category: ''
  };

  selectedImageFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
  }

  onSubmit() {
    if (!this.selectedImageFile) {
      alert('Please select an image!');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('price', this.product.price.toString());
    formData.append('quantity', this.product.quantity.toString());
    formData.append('category', this.product.category);
    formData.append('image', this.selectedImageFile);  // File append

    this.http.post('http://localhost:8082/api/products', formData).subscribe({
      next: () => {
        alert('✅ Product added successfully!');
        this.product = {
          name: '',
          description: '',
          price: 0,
          quantity: 0,
          category: ''
        };
        this.selectedImageFile = null;
      },
      error: (err) => {
        console.error('❌ Product upload failed:', err);
        alert('Product upload failed!');
      }
    });
  }

  onCancel() {
    this.product = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      category: ''
    };
    this.selectedImageFile = null;
  }
}

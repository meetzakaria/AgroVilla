import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterRequest,UserService } from '../services copy/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products = [
    { name: 'Hybril Rice Seeds', price: 20, image: 'seeds01.jpg' },
    { name: 'Organic Fertilizer', price: 15, image: 'fertilizer01.jpeg' },
    { name: 'Tractor Tiller', price: 120000, image: 'tructor01.jpg' }
  ];

  categories = [
    'Seeds',
    'Fertilizers',
    'Equipment',
    'Machinery',
    'Saplings',
    'Seeds',
    'Fertilizers',
    'Equipment',
    'Machinery',
    'Saplings',
  ];
  
  filterByCategory(category: string) {
    console.log("Selected Category:", category);
    // এখান থেকে filter logic call করতে পারো
  }

  user: RegisterRequest = {
    
    password: '',
    role: 'CUSTOMER',
    name: '',
    phoneNumber: ''
  };
  confirmPassword = '';
  registrationSuccess = false;
  registrationError = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private userService: UserService,
  ) { }

  onSubmit() {
    if (this.user.password === this.confirmPassword) {
      this.userService.registerUser(this.user).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.registrationSuccess = true;
          this.registrationError = '';
          alert('Registration successful! Please log in.');
          this.router.navigate(['/']);
        },
        error: (error: Error) => {
          console.error('Registration error:', error.message);
          this.registrationError = error.message;
          this.registrationSuccess = false;
          alert(error.message);
        },
      });
    } else {
      this.registrationError = 'Passwords do not match.';
      this.registrationSuccess = false;
      alert('Passwords do not match.');
    }
  }

  phoneNumber = '';
  password = '';

  onLogin() {
    console.log('Logging in...');
    this.auth.login({ phoneNumber: this.phoneNumber, password: this.password })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          alert('Invalid credentials')
          console.log(error)
        }
      });
  }

}
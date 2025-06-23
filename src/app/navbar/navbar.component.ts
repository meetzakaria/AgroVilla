import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  RegisterRequest,
  UserService,
} from '../services/User-Services/user.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  showLogin = true;
  roleString = '';

  user: RegisterRequest = {
    password: '',
    role: '',
    name: '',
    phoneNumber: '',
    sellerStatus: '',
  };

  confirmPassword = '';
  registrationSuccess = false;
  registrationError = '';

  searchTerm: string = '';
searchResults: any[] = [];

  constructor(
    private router: Router,
    private auth: AuthService,
    private userService: UserService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    // Check if user is authenticated
    if (this.auth.isAuthenticated()) {
      this.showLogin = false;
      this.roleString = this.auth.getUserRole();
      console.log(this.roleString);
      console.log('Role from token: ', this.roleString);
    }
  }

  getJwtPayload() {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('No token found in localStorage');
      return null;
    }

    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64); // Decode base64
      const payload = JSON.parse(payloadJson); // Convert to object
      return payload;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  onSubmit() {
    if (this.user.password === this.confirmPassword) {
      if (this.user.role === 'SELLER') {
        this.user.sellerStatus = 'PENDING';
      } else if (this.user.role === 'CUSTOMER') {
        this.user.sellerStatus = 'APPROVED';
      }

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
    this.auth
      .login({ phoneNumber: this.phoneNumber, password: this.password })
      .subscribe({
        next: (res) => {
          this.auth.setToken(res.access_token);
          this.showLogin = false;
          // this.router.navigate(['/home']);
        },
        error: (error) => {
          alert('Invalid credentials');
          console.log(error);
        },
      });
  }

  logout() {
    this.auth.logout();
    this.showLogin = true;
    this.router.navigate(['/home']);
  }


  searchProducts() {
  this.http
    .get<any[]>(`http://localhost:8081/api/products/search?keyword=${this.searchTerm}`)
    .subscribe((data) => {
      this.searchResults = data;
    });
}


}
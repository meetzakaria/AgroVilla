import { Component, OnInit } from '@angular/core';
import { RegisterRequest, UserService } from '../services/User-Services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav',
  imports: [CommonModule,FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  showLogin = true;

  user: RegisterRequest = {
    password: '',
    role: 'CUSTOMER',
    name: '',
    phoneNumber: '',
  };
  confirmPassword = '';
  registrationSuccess = false;
  registrationError = '';

  constructor(
    private router: Router,
    private auth: AuthService,
    private userService: UserService
  ) {}
  
  ngOnInit(): void {
    // Check if user is authenticated
    if (this.auth.isAuthenticated()) {
      this.showLogin = false;
    }
  }

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
}

import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  constructor(private router: Router) {}

  logout() {
    // logout logic here (example: clear token and redirect)
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}

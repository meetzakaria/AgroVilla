import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/User-Services/user.service';

@Component({
  selector: 'app-userlist',
  imports: [NavbarComponent,CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent implements OnInit {
  pendingsellers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getSellers().subscribe({
      next: (data: any[]) => {
        this.pendingsellers = data;
      },
      error: (err: any) => {
        console.error('Error fetching sellers', err);
      }
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { UserService } from '../../services/User-Services/user.service';


@Component({
  selector: 'app-pending-approval',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './pending-approval.component.html',
  styleUrl: './pending-approval.component.css'
})
export class PendingApprovalComponent implements OnInit {
  pendingsellers: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getPendingSellers().subscribe({
      next: (data: any[]) => {
        this.pendingsellers = data;
      },
      error: (err: any) => {
        console.error('Error fetching sellers', err);
      }
    });
  }

  approveSeller(id: number): void {
  this.userService.updateSellerStatus(id, 'APPROVED').subscribe({
    next: () => {
      this.pendingsellers = this.pendingsellers.filter(s => s.id !== id);
    },
    error: err => console.error('Approve failed', err)
  });
}

rejectSeller(id: number): void {
  this.userService.updateSellerStatus(id, 'REJECTED').subscribe({
    next: () => {
      this.pendingsellers = this.pendingsellers.filter(s => s.id !== id);
    },
    error: err => console.error('Reject failed', err)
  });
}

}

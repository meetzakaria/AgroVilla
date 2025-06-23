import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [CommonModule,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})

export class UserProfileComponent implements OnInit {
  user: any = {};
  editable: boolean = false;
  passwordChange = { oldPassword: '', newPassword: '' };
  imagePreview: string | ArrayBuffer | null = null;
  selectedImage: File | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.http.get('/api/profile/1').subscribe((res: any) => {
      this.user = res;
      if (res.profileImage) {
        this.imagePreview = 'data:image/jpeg;base64,' + res.profileImage;
      }
    });
  }

  enableEdit() {
    this.editable = true;
  }

  cancelEdit() {
    this.editable = false;
    this.loadProfile();
    this.selectedImage = null;
    this.imagePreview = null;
  }

  onImageChange(event: any) {
    this.selectedImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => (this.imagePreview = reader.result);
    reader.readAsDataURL(this.selectedImage!);
  }

  saveChanges() {
    const formData = new FormData();
    formData.append('user', new Blob([JSON.stringify(this.user)], { type: 'application/json' }));
    if (this.selectedImage) {
      formData.append('image', this.selectedImage);
    }

    this.http.post(`/api/profile/${this.user.id}/update`, formData).subscribe(() => {
      alert('Profile updated successfully!');
      this.editable = false;
      this.loadProfile();
    });
  }

  changePassword() {
    this.http
      .post(`/api/profile/${this.user.id}/change-password`, this.passwordChange)
      .subscribe(() => {
        alert('Password changed successfully!');
        this.passwordChange = { oldPassword: '', newPassword: '' };
      });
  }
}

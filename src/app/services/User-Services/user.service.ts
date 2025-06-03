import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8081';
  private apiUrl = `${this.baseUrl}/api/users`;

  constructor(private http: HttpClient) {}


  registerUser(registerRequest: RegisterRequest): Observable<UserResponse> {
    const url = `${this.baseUrl}/api/auth/register`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<UserResponse>(url, registerRequest, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getSellers(): Observable<UserResponse[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<UserResponse[]>(url).pipe(
      catchError(this.handleError)
    );
  }

  getPendingSellers(): Observable<UserResponse[]> {
    const url = `${this.apiUrl}/roleAndStatus?role=SELLER&sellerStatus=PENDING`;
    return this.http.get<UserResponse[]>(url).pipe(
      catchError(this.handleError)
    );
  }


updateSellerStatus(userId: number, status: string): Observable<UserResponse> {
  const url = `${this.apiUrl}/${userId}/status?status=${status}`;
  return this.http.put<UserResponse>(url, {}).pipe(
    catchError(this.handleError)
  );
}


  private handleError(error: any): Observable<any> {
    let errorMessage = 'An error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error?.message || 'Server error'}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}

// Interfaces
export interface RegisterRequest {
  password: string;
  role: string;
  name?: string;
  phoneNumber?: string;
  sellerStatus?: string;
}

export interface UserResponse {
  id: number;
  role: string;
  name?: string;
  phoneNumber?: string;
  sellerStatus?: string;
}
export enum SellerStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}
export enum Role {
  SELLER = 'SELLER',
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN'
}
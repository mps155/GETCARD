import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowroomService {
  private apiUrl = 'http://localhost:5000/api/card';
  constructor(private http: HttpClient) {}

  getAllCards(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/getAllCards`, { headers });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  private apiUrl = 'http://localhost:5000/api/cardUser';
  constructor(private http: HttpClient) {}

  register(groups: Number[]): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/register`, groups, { headers });
  }

  getAllCards() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/getAllByUser`, { headers });
  }

  spinFirstCollection() {
    return this.http.get(`${this.apiUrl}/getInitialCollection`);
  }
}

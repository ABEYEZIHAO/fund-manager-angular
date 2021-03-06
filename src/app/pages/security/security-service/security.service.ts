import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../security';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class SecurityService {

  private baseUrl = 'http://localhost:8090/api/v1/securities';

  constructor(private http: HttpClient) { }

  getSecurity(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSecurity(security: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, security);
  }

  updateSecurity(id: number, security: Object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, security);
  }

  deleteSecurity(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSecurityList(): Observable<any> {
    // return this.http.get(`${this.baseUrl}`).pipe(map((result: any) => [result]));
    return this.http.get(`${this.baseUrl}`);
  }
}


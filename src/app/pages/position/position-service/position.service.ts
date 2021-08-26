import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Position } from '../position';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class PositionService {

  private baseUrl = 'http://localhost:8090/api/v1/positions';

  constructor(private http: HttpClient) { }

  getPosition(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPosition(position: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}`, position);
  }

  updatePosition(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePosition(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPositionList(): Observable<any> {
    // return this.http.get(`${this.baseUrl}`).pipe(map((result: any) => [result]));
    return this.http.get(`${this.baseUrl}`);
  }
}


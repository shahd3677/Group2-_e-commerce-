import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  baseURL = "http://localhost:3000/staff"
  constructor(private http: HttpClient) { }


  login(body: any): Observable<any> {
    return this.http.post(`${this.baseURL}/login`, body)
  }
  getStaff(): Observable<any> {
    return this.http.get(`${this.baseURL}/`)
  }
  addStaff(body: any): Observable<any> {
    return this.http.post(`${this.baseURL}/`, body)
  }
}

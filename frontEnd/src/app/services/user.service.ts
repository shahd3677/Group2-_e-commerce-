import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:3000/user"
  private currentUser:any
  constructor(private _HttpClient: HttpClient) { }

  setUser(user: any) {
    this.currentUser = user;
    return this.currentUser
  }
 

  getUserId(): string {
    return this.currentUser?._id;
  }
  getUser(userId: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/getuser/${userId}`)
  }
  getAllUser(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/getAll`)
  }
  createUser(obj: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/add`, obj)
  }
  deleteUser(userId: string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/delete/${userId}`)
  }
  updateUser(userId: string, obj: any): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/update/${userId}`, obj)
  }
}

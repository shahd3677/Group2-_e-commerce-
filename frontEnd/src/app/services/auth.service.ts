
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: any = null
  userData:any=null
  isLogin:boolean=false;
  baseUrl:string="https://full.faedg.com/public/api"
  constructor( private _HttpClient:HttpClient) {
    
  }
  Login(data:any):Observable<any>{
  return  this._HttpClient.post(`${this.baseUrl}/client/customer_login`,data)
  }
  Register(data:any):Observable<any>{
   return this._HttpClient.post(`${this.baseUrl}/client/customer_register`,data)
  }

  profile(): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/client/profile`)
  }

  userImage(obj:any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/client/update-profile-image`,obj)
  }
}


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) {

  }
  Login(data:any):Observable<any>{
  return  this._HttpClient.post("https://full.faedg.com/public/api/client/customer_login",data)
  }
  Register(data:any):Observable<any>{
   return this._HttpClient.post("https://full.faedg.com/public/api/client/customer_register",data)
  }
}

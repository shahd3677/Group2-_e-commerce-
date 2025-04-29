import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) {
  }
    readonly baseUrl = "http://localhost:3000/products/"

  getAllProducts():Observable<any>{
    return this.http.get(this.baseUrl +'all')
  }

  getLimitedProducts():Observable<any>{
    return this.http.get(this.baseUrl +'home')
  }
  getAllCategories():Observable<any>{
    return this.http.get(this.baseUrl +'categories')
  }

  getProductsCat(category:any):Observable<any>{
  return this.http.get(this.baseUrl+`category/${category}`)
}
  getSingleProduct(_id:any):Observable<any>{
  return this.http.get(this.baseUrl+`${_id}`)
}

}

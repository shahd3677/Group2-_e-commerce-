import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) {
  }

  getAllProducts():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products")
  }

  getLimitedProducts():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products?limit=6")
  }
  getAllCategories():Observable<any>{
    return this.http.get("https://fakestoreapi.com/products/categories")
  }

  getProductsCat(category:any):Observable<any>{
  return this.http.get(`https://fakestoreapi.com/products/category/${category}`)
}
  getSingleProduct(id:any):Observable<any>{
  return this.http.get(`https://fakestoreapi.com/products/${id}`)
}

}

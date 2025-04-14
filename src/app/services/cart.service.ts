import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string = 'https://fakestoreapi.com/carts';
  private products = new BehaviorSubject<any[]>([])
  products$ = this.products.asObservable();
  constructor(private _HttpClient: HttpClient) { }
  addProduct(product: any) {
    const currentProducts = this.products.value;
    this.products.next([...currentProducts, { ...product }]); // إضافة نسخة جديدة للمصفوفة
  }
  getCart(cartID: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/user/${cartID}`)
  }
  addCart(cartData: any): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}`, cartData)
  }
  updateCart(userID: string, cartData: any): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/${userID}`, cartData)
  }
  deleteCart(userID:string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/${userID}`)
  }
}

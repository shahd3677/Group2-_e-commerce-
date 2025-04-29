import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseUrl:string = 'http://localhost:3000/cart';
  private products = new BehaviorSubject<any[]>([])
  products$ = this.products.asObservable();
  constructor(private _HttpClient: HttpClient) { }
  addProduct(product: any) {
    const currentProducts = this.products.value;
    this.products.next([...currentProducts, { ...product }]); // إضافة نسخة جديدة للمصفوفة
  }
  getCart(userId: string): Observable<any> {
    return this._HttpClient.get(`${this.baseUrl}/getCart/${userId}`)
  }
  addCart(userId:string,productIds: string[]): Observable<any> {
    return this._HttpClient.post(`${this.baseUrl}/addproductToCart/${userId}`,{productIds})
  }
  updateCart(userID: string, cartData: any): Observable<any> {
    return this._HttpClient.put(`${this.baseUrl}/${userID}`, cartData)
  }
  deleteALLCart(userId:string): Observable<any> {
    return this._HttpClient.delete(`${this.baseUrl}/deletedAll/${userId}`)
  }
  deleteOneProduct(itemId:string,userId:string):Observable<any>{
    return this._HttpClient.delete(`${this.baseUrl}/${userId}/${itemId}`)
  }
}

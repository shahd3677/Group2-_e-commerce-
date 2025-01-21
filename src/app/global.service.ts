import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  logoPage:string="62d3960a755658580bdded8a_logo.png"
  imgSection:string="62e0bd1e0f555f392e090236_breadcrumb-image-1-p-800.png"
  constructor() { 
    this.logoPage=this.logoPage;
    this.imgSection=this.imgSection;
  }
}

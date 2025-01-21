import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  logoPage:string="62d3960a755658580bdded8a_logo.png"
  constructor() { 
    this.logoPage=this.logoPage
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent  implements OnInit{
  products:[]=[]
  title="cart"
 constructor(){

 }
 ngOnInit(): void {
   

   
 }
}

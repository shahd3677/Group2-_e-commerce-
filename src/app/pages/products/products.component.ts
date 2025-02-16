import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 title : string = "Our Products"
 Products : any = []
 constructor(private auth : AuthService){

 }
 ngOnInit(){
  this.auth.getProducts().subscribe((res)=>{
    // console.log(res.products)
    this.Products = res.products
  })
 }
}

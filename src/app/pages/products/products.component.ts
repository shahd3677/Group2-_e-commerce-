import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 title : string = "Our Products"
 Products : any = []
 constructor(private product : ProductService){

 }
 ngOnInit(){
  this.product.getAllProducts().subscribe((res)=>{
    //console.log(res)
    this.Products = res
  })
 }

}

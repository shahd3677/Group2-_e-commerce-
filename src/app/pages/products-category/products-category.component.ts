import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-category',
  standalone: false,

  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css'
})
export class ProductsCategoryComponent {
   title : string = "Products Category"
   category : any = ""
   ProductsCategory :any = []
   constructor(private activated : ActivatedRoute , private product: ProductService ){
     //activated.snapshot.paramMap.get('catTitle')
   }

   ngOnInit(){
    this.activated.paramMap.subscribe((param)=>{
      this.category = param.get('catTitle')
      this.product.getProductsCat(this.category).subscribe((res)=>{
        this.ProductsCategory= res
    })
    })
   }
}

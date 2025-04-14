import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-section',
  standalone: false,

  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.css'
})
export class ProductSectionComponent implements OnInit{
  @Input() productInfo : any
  products:any[]=[]
  listOfCart:any
  constructor(private router:Router,private _CartService:CartService,private _ProductService:ProductService){}
ngOnInit(): void {

 
      this._CartService.products$.subscribe({
        next: (res) => {
          this.products = res;
          this.products.filter((ele)=>{
         
              this._CartService.getCart(ele.id).subscribe({
          next:(res)=>{
            this.listOfCart=res
           
          }
         })
          })

          
        }
      });
    
}

addCart(productID:string){
  Swal.fire({
    title: "Add To Cart",
    text: "",
    icon: "success",
    showCancelButton: true,
    confirmButtonText: "Add",
    cancelButtonText: "Cancel"
  })
  .then(result => {
    if (result.isConfirmed) {  
      // ✅ تنفيذ جلب المنتج فقط بعد التأكيد
      this._ProductService.getSingleProduct(productID).subscribe({
        next: (res: any) => {
          this._CartService.addProduct(res);
          console.log(res);
        }
      });
    }
  });
 
}
}

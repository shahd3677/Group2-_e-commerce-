import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
import { UserService } from '../../services/user.service';

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
  userId:string=''
  productId:string=''
  constructor(private router:Router,private _CartService:CartService,private _ProductService:ProductService,private _UserService:UserService){}
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


addCart(productId: string) {
  try {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user || !user._id) {
      Swal.fire({
        title: "You need to login first",
        icon: "warning",
        confirmButtonText: "Go to Login",
      }).then(() => {
        this.router.navigateByUrl("/login");
      });
      return;
    }

    // إنشاء مصفوفة تحتوي على productId فقط
    const selectedProductIds = [productId];  // تأكد من أن المنتج هو ID الصحيح

    Swal.fire({
      title: "Add To Cart",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Add",
      cancelButtonText: "Cancel"
    }).then(result => {
      if (result.isConfirmed) {
        console.log('Selected Product IDs:', selectedProductIds);

        this._CartService.addCart(user._id, selectedProductIds).subscribe({
          next: (res) => {
            console.log('تمت الإضافة بنجاح:', res);
            alert('تم إضافة المنتج إلى السلة');
          },
          error: (err) => {
            console.error('خطأ في الإضافة:', err);
            alert('فشل في إضافة المنتج');
          }
        });
      }
    });
  } catch (error) {
    console.error('حدث خطأ غير متوقع:', error);
  }
}




}

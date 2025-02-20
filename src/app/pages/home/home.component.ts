import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {  NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Categories : any = []
  LimitedProducts : any = []
  isLoading=true;
  constructor(private product : ProductService,private spinner: NgxSpinnerService){
    this.spinner.show();
  }
  ngOnInit(){
    this.isLoading=true
    this.product.getAllCategories().subscribe((res)=>{
    
      
        this.Categories= res
       
      
    })
    this.product.getLimitedProducts().subscribe((res)=>{
      if(res){
        this.LimitedProducts = res
        console.log(this.LimitedProducts)
        this.isLoading=false
        this.spinner.hide();
      }
     
    },()=>{},()=>{
     this.spinner.hide();
      this.isLoading=false
    })
  }

}

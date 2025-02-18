import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  Categories : any = []
  LimitedProducts : any = []
  constructor(private product : ProductService){
  }
  ngOnInit(){
    this.product.getAllCategories().subscribe((res)=>{
      this.Categories= res
    })
    this.product.getLimitedProducts().subscribe((res)=>{
      this.LimitedProducts = res
    })
  }

}

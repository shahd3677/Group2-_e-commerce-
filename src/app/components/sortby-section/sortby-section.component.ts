import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sortby-section',
  standalone: false,

  templateUrl: './sortby-section.component.html',
  styleUrl: './sortby-section.component.css'
})
export class SortbySectionComponent {
    Categories : any = []
    constructor(private product : ProductService){
    }
    ngOnInit(){
      this.product.getAllCategories().subscribe((res)=>{
        this.Categories= res
      })
    }
}

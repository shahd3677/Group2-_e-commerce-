import { Component } from '@angular/core';

@Component({
  selector: 'app-products-category',
  standalone: false,

  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.css'
})
export class ProductsCategoryComponent {
   title : string = "Products Category"
}

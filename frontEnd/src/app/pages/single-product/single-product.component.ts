import { Component, OnInit } from '@angular/core';


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  stock: number;
  relatedProducts?: Product[];
}


@Component({
  selector: 'app-single-product',
  standalone: false,

  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})

export class SingleProductComponent implements OnInit {
  [x: string]: any;
  title: string = "Product Details"
  product!: Product;
  quantity: number = 1;

  relatedProducts: Product[] = [];

  ngOnInit() {
    this.fetchRelatedProducts();
  }

  fetchRelatedProducts() {
    this.relatedProducts = [];
  }

  buyNow() {
    alert(`Purchased ${this.quantity} x ${this.product.name}!`);
  }
  addToCart(product: Product) {
    alert(`Added ${product.name} to cart!`);
  }

}